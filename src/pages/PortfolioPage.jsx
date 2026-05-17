import { useSearchParams } from "react-router-dom";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "Youtube SEO";

  return (
    <>
      <PageSEO
        title="Portfolio"
        description="Explore our portfolio of successful YouTube SEO, video editing, website optimization, and digital marketing projects."
        keywords="portfolio, case studies, YouTube SEO results, video marketing examples"
        url="/portfolio"
      />
      <Layout>
        <PortfolioSection initialTab={tabParam} />
      </Layout>
    </>
  );
}

export default PortfolioPage;
