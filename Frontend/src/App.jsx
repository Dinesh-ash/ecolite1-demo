import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyParcels from "./pages/MyParcels";
import Parcels from "./pages/Parcels";
import Parcel from "./pages/Parcel";
import { useSelector } from "react-redux";
import CreateParcel from "./pages/CreateParcel";
import GoalsPage from "./pages/goals";
import Registration from "./pages/register";
import CarbonFootprintCal from "./pages/carboncal";
import InitiativesPage from "./pages/initiatives";
import Tracking from "./pages/Tracking"
import Users from "./pages/Users";
import BlackYellowTables from "./pages/comparison";


function App() {
  const user = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "Tracking",
      element: <Tracking />,
    },
    {
      path: "/carbon",
      element: <CarbonFootprintCal />,
    },
    {
      path: "/initiatives",
      element: <InitiativesPage />,
    },
    {
      path: "/goals",
      element: <GoalsPage />,
    },
    {
      path: "/register",
      element: <Registration />,
    },
    {
      path: "/admin/users",
      element: <Users />,
    },
    {
      path: "/myparcels",
      element: user.currentUser ? <MyParcels /> : <Navigate to="/login" />,
    },
    {
      path: "/allparcels",
      element: user.currentUser ? <Parcels /> : <Navigate to="/login" />,
    },
    {
      path: "/parcel/:id",
      element: user.currentUser ? <Parcel /> : <Navigate to="/login" />,
    },
    {
      path: "/track/:id", // Added Tracking Page Route
      element: user.currentUser ? <Tracking /> : <Navigate to="/login" />,
    },
    {
      path: "/create-parcel", // Add the new route here
      element: user.currentUser ? <CreateParcel /> : <Navigate to="/login" />,
    },
    {
      path: "/comparison",
      element: <BlackYellowTables />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}


export default App;