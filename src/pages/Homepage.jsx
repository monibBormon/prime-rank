import HeroSection from "../components/Home/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import HomeReviews from "../components/Home/HomeReviews";
import Layout from "../components/Shared/Layout";

function Homepage() {
  return (
    <Layout>
      <HeroSection />
      <HomeAbout />
      <HomeReviews/>
    </Layout>
  );
}

export default Homepage;
