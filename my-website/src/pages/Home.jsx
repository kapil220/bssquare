import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Industries from '../components/home/Industries';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyChooseUs />
      <Industries />
      <CTA />
    </div>
  );
};

export default Home;