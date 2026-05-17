import HeroSection from "../components/Home/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import HomeCta from "../components/Home/HomeCta";
import HomeReviews from "../components/Home/HomeReviews";
import HomeTeam from "../components/Home/HomeTeam";
import Layout from "../components/Shared/Layout";

function Homepage() {
  return (
    <>
      <Layout>
        <HeroSection />
        <HomeAbout />
        <HomeReviews />
        {/* <HomeFeatures/> */}
        <HomeTeam />
        <HomeCta />
      </Layout>
    </>
  );
}

export default Homepage;
