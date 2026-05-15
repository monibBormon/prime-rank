import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import MeetingPage from "./pages/MeetingPage";
import VideoEditingPage from "./pages/VideoEditingPage";
import WebsiteSeoPage from "./pages/WebsiteSeoPage";
import GoogleAdsPage from "./pages/GoogleAdsPage";

function App() {
  return (
    <>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
