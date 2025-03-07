import AboutUs from "../../components/about";
import BannerComponent from "../../components/banner";
import BlogComponents from "../../components/blog";
import VideoComponent from "../../components/core";
import FooterComponent from "../../components/footer";
import HeroComponent from "../../components/hero";
import LocationComponents from "../../components/location";
import Navbar from "../../components/navbar";
import Products from "../../components/products";
import TestimonialsComponents from "../../components/testimonials";
const HomePage = () => {
  
  return (
    <div>
      
      <Navbar theme="light"  />
      <HeroComponent />
      <AboutUs />
      <VideoComponent />
      <Products />
      <TestimonialsComponents />
      <BlogComponents />
      <BannerComponent />
      <BlogComponents />

   <LocationComponents />
      <FooterComponent />

      

      
    
    </div>
  );
};
export default HomePage;
