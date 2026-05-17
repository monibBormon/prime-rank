import AboutHero from "../components/About/AboutHero";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

function AboutPage() {
  return (
    <>
      <PageSEO
        title="About Us"
        description="Learn about Prime Rank's mission to help businesses succeed through expert digital marketing, YouTube SEO, and video optimization services."
        keywords="about Prime Rank, digital marketing expertise, YouTube SEO specialists"
        url="/about"
      />
      <Layout>
        <AboutHero />
      </Layout>
    </>
  );
}

export default AboutPage;
