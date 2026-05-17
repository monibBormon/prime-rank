import ClientMeetings from "../components/Meeting/ClientMeetings";
import CounterSection from "../components/Meeting/CounterSection";
import WorkflowSection from "../components/Meeting/WorkflowSection";
import PageSEO from "../components/SEO/PageSEO";
import Layout from "../components/Shared/Layout";

function MeetingPage() {
  return (
    <>
      <PageSEO
        title="Schedule Consultation"
        description="Schedule a consultation with Prime Rank's experts to discuss your digital marketing strategy and YouTube SEO needs."
        keywords="consultation, client meetings, digital strategy, expert advice"
        url="/meetings"
      />
      <Layout>
        <ClientMeetings />
        <CounterSection />
        <WorkflowSection />
      </Layout>
    </>
  );
}

export default MeetingPage;
