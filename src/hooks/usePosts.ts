import { useEffect, useState } from 'react';

export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
  thumbnail_url: string;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = 'EAAPDtIEENdYBPCJTPZAWf9upn9M8WAyYDVTxu5OTwAkcNvOzZARo4K49RxIQlxilPuZCvWCZBPLOZA2njpEodDCNxYChnEIpeqGhhv2OAXBGZAB809RVZC6XD6GjPyfnWBWycgpB5hXZBabp1GnBRwd6y3dZBXZAHk1SzbinXZBYZCk9pQpJu6glcDVkDLLaZCgvZCvdsgFIZBA';
    const igAccountId = '17841476555801658';
    const url = `https://graph.facebook.com/v19.0/${igAccountId}/media?fields=id,caption,media_url,permalink,timestamp,thumbnail_url&access_token=${token}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.data) {
            console.log(data.data);
          setPosts(data.data);
        } else {
          setError('Failed to fetch Instagram posts.');
          console.error('Instagram API error:', data);
        }
      })
      .catch(err => {
        setError(err.message || 'Unknown error');
        console.error('Fetch error:', err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { posts, isLoading, error };
};
