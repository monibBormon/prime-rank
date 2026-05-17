import HeroSection from "../components/Home/Hero";
import HomeAbout from "../components/Home/HomeAbout";
import HomeCta from "../components/Home/HomeCta";
import HomeReviews from "../components/Home/HomeReviews";
import HomeTeam from "../components/Home/HomeTeam";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

function Homepage() {
  return (
    <>
      <PageSEO
        title="Digital Marketing Agency"
        description="Prime Rank is a leading digital marketing agency specializing in YouTube SEO, video optimization, website SEO, and Google Ads management to boost your online presence."
        keywords="YouTube SEO, video marketing, digital marketing agency, online growth, content optimization"
        url="/"
      />
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
