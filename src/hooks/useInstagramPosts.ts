// useInstagramPosts.ts
import { useEffect, useReducer, useCallback, useRef } from 'react';

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM' | string;
  media_url: string;
  permalink: string;
  thumbnail_url?: string;
  timestamp: string;
  username: string;
  like_count?: number;
  comments_count?: number;
  children?: {
    data: Array<{
      id: string;
      media_type: string;
      media_url: string;
      thumbnail_url?: string;
      permalink: string;
    }>;
  };
  [key: string]: any;
}

interface InstagramAPIResponse {
  data: InstagramMedia[];
  paging?: {
    cursors?: {
      after?: string;
      before?: string;
    };
    next?: string;
  };
}

type State = {
  posts: InstagramMedia[];
  loading: boolean;
  error: unknown | null;
  nextCursor?: string;
  hasNextPage: boolean;
  refreshing: boolean;
};

type Action =
  | { type: 'start_fetch'; refreshing?: boolean }
  | { type: 'append'; payload: InstagramAPIResponse }
  | { type: 'reset'; payload: InstagramAPIResponse }
  | { type: 'fail'; error: unknown };

const initialState: State = {
  posts: [],
  loading: false,
  error: null,
  nextCursor: undefined,
  hasNextPage: false,
  refreshing: false,
};

// <<< HARD-CODED CONFIG: replace these with real values >>>
const INSTAGRAM_USER_ID = '1784140XXXXXXXXX'; // put actual Instagram user ID
const ACCESS_TOKEN = 'EAAG...'; // put actual valid Instagram Graph API access token
const PAGE_SIZE = 9;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'start_fetch':
      return {
        ...state,
        loading: true,
        error: null,
        refreshing: !!action.refreshing,
      };
    case 'append': {
      const newPosts = action.payload.data || [];
      const after = action.payload.paging?.cursors?.after;
      return {
        ...state,
        loading: false,
        refreshing: false,
        posts: [...state.posts, ...newPosts],
        nextCursor: after,
        hasNextPage: !!after,
      };
    }
    case 'reset': {
      const newPosts = action.payload.data || [];
      const after = action.payload.paging?.cursors?.after;
      return {
        ...state,
        loading: false,
        refreshing: false,
        posts: [...newPosts],
        nextCursor: after,
        hasNextPage: !!after,
        error: null,
      };
    }
    case 'fail':
      return {
        ...state,
        loading: false,
        refreshing: false,
        error: action.error,
      };
    default:
      return state;
  }
}

async function fetchInstagramMediaPage(
  userId: string,
  accessToken: string,
  limit = PAGE_SIZE,
  after?: string,
  signal?: AbortSignal
): Promise<InstagramAPIResponse> {
  const fields = [
    'id',
    'caption',
    'media_type',
    'media_url',
    'permalink',
    'thumbnail_url',
    'timestamp',
    'username',
    'like_count',
    'comments_count',
    'children{media_type,media_url,thumbnail_url,permalink,id}',
  ].join(',');

  const params = new URLSearchParams({
    access_token: accessToken,
    fields,
    limit: limit.toString(),
  });
  if (after) {
    params.set('after', after);
  }

  const url = `https://graph.instagram.com/${userId}/media?${params.toString()}`;

  const res = await fetch(url, { signal });
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Instagram API error: ${res.status} ${txt}`);
  }
  const json = (await res.json()) as InstagramAPIResponse;
  return json;
}

export function useInstagramPosts() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const abortRef = useRef<AbortController | null>(null);

  const loadPage = useCallback(
    async (opts: { cursor?: string; reset?: boolean }) => {
      abortRef.current?.abort();
      const controller = new AbortController();
      abortRef.current = controller;

      try {
        dispatch({ type: 'start_fetch', refreshing: !!opts.reset });
        const response = await fetchInstagramMediaPage(
          INSTAGRAM_USER_ID,
          ACCESS_TOKEN,
          PAGE_SIZE,
          opts.cursor,
          controller.signal
        );
        if (opts.reset) {
          dispatch({ type: 'reset', payload: response });
        } else {
          dispatch({ type: 'append', payload: response });
        }
      } catch (err) {
        if ((err as any).name === 'AbortError') return;
        dispatch({ type: 'fail', error: err });
      }
    },
    []
  );

  useEffect(() => {
    loadPage({ reset: true });
    return () => {
      abortRef.current?.abort();
    };
  }, [loadPage]);

  const fetchNextPage = useCallback(() => {
    if (!state.hasNextPage) return;
    loadPage({ cursor: state.nextCursor, reset: false });
  }, [state.hasNextPage, state.nextCursor, loadPage]);

  const refresh = useCallback(() => {
    loadPage({ reset: true });
  }, [loadPage]);

  return {
    posts: state.posts,
    loading: state.loading,
    error: state.error,
    hasNextPage: state.hasNextPage,
    fetchNextPage,
    refresh,
    isRefreshing: state.refreshing,
  };
}
