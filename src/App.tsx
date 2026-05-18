import HomePage from "../views/HomePage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import NavLayout from "./layouts/NavLayout";
import PolicyPage from "../views/PolicyPage";
import TermsPage from "../views/TermsPage";
import DeleteAccountPage from "../views/DeleteAccountPage";
import DeleteAccountConfirmedPage from "../views/DeleteAccountConfirmedPage";
import PartnerNavLayout from "./layouts/PartnerNavLayout";
import PartnerLogin from "./components/Partners/PartnerLogin";
import Dashboard from "./components/Partners/Dashboard";
import CreateEvent from "./components/Partners/CreateEvent";
import PartnerEvents from "./components/Partners/PartnerEvents";
import PartnerSettings from "./components/Partners/PartnerSettings";
import ProtectedRoutes from "./components/Partners/ProtectedRoutes";
const router = createBrowserRouter([
  {
    path: "/",
    Component: NavLayout,
    children: [{ path: "", Component: HomePage }],
  },
  { path: "/privacy", Component: PolicyPage },
  { path: "/terms", Component: TermsPage },
  { path: "/delete-account", Component: DeleteAccountPage },
  { path: "/delete-account/confirmed", Component: DeleteAccountConfirmedPage },
  { path: "/partner/login", Component: PartnerLogin },
  {
    path: "/partner",
    Component: ProtectedRoutes,
    children: [
      {
        Component: PartnerNavLayout,
        children: [
          { index: true, Component: Dashboard },
          { path: "dashboard", Component: Dashboard },
          { path: "create-event", Component: CreateEvent },
          { path: "partner-events", Component: PartnerEvents },
          { path: "partner-settings", Component: PartnerSettings },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
