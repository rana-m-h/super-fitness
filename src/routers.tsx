import { createBrowserRouter } from "react-router-dom";
import HomePage from "./app/[locale]/(homepage)/page";
import AboutPage from "./app/[locale]/about/page";
import HealthyPage from "./app/[locale]/healthy/page";
import ClassesPage from "./app/[locale]/classes/page";
import RootLayout from "./app/layout";
import NotFound from "./app/[locale]/not-found";
import MealDetails from "./app/[locale]/healthy/_components/meals-details";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "healthy", element: <HealthyPage /> },
      { path: "classes", element: <ClassesPage /> },
      { path: "/mealsdetails/:id", element: <MealDetails /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
