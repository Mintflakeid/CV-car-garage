import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { StoragePage } from "./pages/StoragePage";
import { AboutPage } from "./pages/AboutPage";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: "storage", Component: StoragePage },
      { path: "about", Component: AboutPage },
    ],
  },
]);
