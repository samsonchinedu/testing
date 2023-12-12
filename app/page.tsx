import "./globals.css"
import HeroSection from './component/hero-section/page'
import Catergories from "./component/catergory/page"
import AboutSection from "./component/About-section/page"
import CtaPopularCourse from "./component/cta_popular_course/page"
import VideoGalleries from "./component/video_gallery/page"
import CounterUp from "./component/counter_up/page"
import Testimony from "./component/testimony/page"
import Sponsor from "./component/sponsor/page"
import BlogSection from "./component/blog_section/page"
import SingleFaqs from "./component/faq/page"

export default function Home() {
  return (
    <main className="main-section">
      <HeroSection />
      <Catergories />
      <AboutSection />
      <CtaPopularCourse />
      <VideoGalleries />
      <CounterUp />
      <Testimony />
      <Sponsor />
      <SingleFaqs />
      <BlogSection />
    </main>
  )
}
