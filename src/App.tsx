import HomePage from "../views/HomePage";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import NavLayout from "./layouts/NavLayout";
import PolicyPage from "../views/PolicyPage";
import TermsPage from "../views/TermsPage";
import DeleteAccountPage from "../views/DeleteAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: NavLayout,
    children: [{ path: "", Component: HomePage }],
  },
  { path: "/privacy", Component: PolicyPage },
  { path: "/terms", Component: TermsPage },
  { path: "/delete-account", Component: DeleteAccountPage },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
