import { useSearchParams } from "react-router-dom";
import PortfolioSection from "../components/Portfolio/PortfolioSection";
import Layout from "../components/Shared/Layout";

function PortfolioPage() {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab") || "Youtube SEO";

  return (
    <Layout>
      <PortfolioSection initialTab={tabParam} />
    </Layout>
  );
}

export default PortfolioPage;
