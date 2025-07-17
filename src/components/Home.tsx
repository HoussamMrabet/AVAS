import HeroSection from './HeroSection'
import GallerySection from './GallerySection'
import StatsSection from './StatsSection'
import TestimonialSection from './TestimonialSection'

const Home = () => {
  return (
        <section className='mx-4 md:mx-8 lg:mx-12 xl:mx-20'>
            <HeroSection />
            <GallerySection />
            <StatsSection />
            <TestimonialSection />
        </section>
  )
}

export default Home