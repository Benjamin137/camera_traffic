import { createBrowserRouter } from "react-router";
import CamerasPage from "./pages/CamerasPage";
import CameraAdminPage from "./pages/CameraAdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: CamerasPage,
  },
  {
    path: "/admin/:cameraId",
    Component: CameraAdminPage,
  },
]);
