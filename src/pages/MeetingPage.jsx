import ClientMeetings from "../components/Meeting/ClientMeetings";
import CounterSection from "../components/Meeting/CounterSection";
import WorkflowSection from "../components/Meeting/WorkflowSection";
import Layout from "../components/Shared/Layout";

function MeetingPage() {
  return (
    <Layout>
      <ClientMeetings />
      <CounterSection />
      <WorkflowSection />
    </Layout>
  );
}

export default MeetingPage;
