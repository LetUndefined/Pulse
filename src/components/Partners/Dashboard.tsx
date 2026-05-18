import CreateEventDashboard from "./CreateEventDashboard";
import InformationContainer from "./InformationContainer";
import RecentActivity from "./RecentActivity";

const Dashboard = () => {
  return (
    <>
      <div>
        <h1 className="text-text text-2xl">Welcome back, User</h1>
        <p className="text-text3">Here's what's happening with your events</p>
      </div>
      <div className="flex flex-col gap-xl">
        <section className="flex gap-xl justify-evenly mt-xl">
          <InformationContainer />
        </section>
        <section className="flex gap-md">
          <RecentActivity />
          <CreateEventDashboard />
        </section>
      </div>
    </>
  );
};

export default Dashboard;
