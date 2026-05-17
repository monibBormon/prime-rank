import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";
import Homepage from "./pages/Homepage";
import MeetingPage from "./pages/MeetingPage";
import PortfolioPage from "./pages/PortfolioPage";
import PricingPage from "./pages/PricingPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import WebsiteSeoPage from "./pages/WebsiteSeoPage";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/meetings" element={<MeetingPage />} />
          <Route path="/video-editing" element={<VideoEditingPage />} />
          <Route path="/seo" element={<WebsiteSeoPage />} />
          <Route path="/google-ads" element={<GoogleAdsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
