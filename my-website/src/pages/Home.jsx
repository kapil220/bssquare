import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import ParallaxSection from '../components/home/ParallaxSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>B Square Global FZE — CAD & BIM Engineering & Virtual HR Services</title>
        <meta name="description" content="B Square Global FZE offers world-class CAD & BIM Engineering Services and comprehensive Virtual HR Services across UAE, Oman, Qatar, KSA and India. 20+ years of expertise." />
        <meta name="keywords" content="CAD BIM services UAE, BIM engineering Dubai, Virtual HR services, BIM outsourcing, HR solutions UAE, B Square Global FZE" />
        <meta property="og:title" content="B Square Global FZE — CAD & BIM Engineering & Virtual HR Services" />
        <meta property="og:description" content="World-class CAD & BIM Engineering and expert Virtual HR Services across the UAE and beyond." />
        <meta property="og:url" content="https://bsquareglobalfze.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://bsquareglobalfze.com/logo.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="B Square Global FZE — CAD & BIM & Virtual HR Services" />
        <meta name="twitter:description" content="World-class CAD & BIM Engineering and expert Virtual HR Services." />
        <link rel="canonical" href="https://bsquareglobalfze.com/" />
      </Helmet>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ParallaxSection />
      <WhyChooseUs />
      <Industries />
      <CTA />
    </div>
  );
};

export default Home;