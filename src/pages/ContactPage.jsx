import ContactSection from "../components/Contact/ContactSection";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

function ContactPage() {
  return (
    <>
      <PageSEO
        title="Contact Us"
        description="Get in touch with Prime Rank for YouTube SEO, digital marketing, and video optimization services. We're here to help grow your online presence."
        keywords="contact Prime Rank, digital marketing services, customer support"
        url="/contact"
      />
      <Layout>
        <ContactSection />
      </Layout>
    </>
  );
}

export default ContactPage;
