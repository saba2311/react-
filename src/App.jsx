import { createBrowserRouter, RouterProvider } from "react-router";
import { useState } from "react";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Static from "./pages/task/Static";
import Dynamic from "./pages/task/Dynamic";
import Counter from "./pages/task/Counter";
import TodoList from "./pages/task/TodoList";
import RBBadges from "./pages/non_interactive_components/RBBadges";
import RBBreadcrumbs from "./pages/non_interactive_components/RBBreadcrumbs";
import RBButtonGroups from "./pages/non_interactive_components/RBButtonGroups";
import RBButtons from "./pages/non_interactive_components/RBButtons";
import RBCards from "./pages/non_interactive_components/RBCards";
import RBImages from "./pages/non_interactive_components/RBImages";
import RBListGroup from "./pages/non_interactive_components/RBListGroup";
import RBFigure from "./pages/non_interactive_components/RBFigure";
import RBPagination from "./pages/non_interactive_components/RBPagination";
import RBSpinners from "./pages/non_interactive_components/RBSpinners";
import RBProgressBars from "./pages/non_interactive_components/RBProgressBars";
import RBTables from "./pages/non_interactive_components/RBTables";


import RBAccordion from './pages/interactive_components/RBAccordion';
import RBCarousel from './pages/interactive_components/RBCarousel';
import RBDropdowns from './pages/interactive_components/RBDropdowns';
import RBModal from './pages/interactive_components/RBModal';
import RBNavbarOffcanvas from './pages/interactive_components/RBNavbarOffcanvas';
import RBNavTabs from './pages/interactive_components/RBNavTabs';
import RBOverlays from './pages/interactive_components/RBOverlays';

import RBBasicFormControls from "./pages/Forms/RBBasicFormControls";
import RBFormikForm from "./pages/Forms/RBFormikForm";
import RHFForm from "./pages/Forms/RHFForm";
import RHFFormYup from "./pages/Forms/RHFFormYup";






const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "static",
        element: <Static />,
      },
      {
        path: "dynamic",
        element: <Dynamic />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "todo",
        element: <TodoList />,
      },
      {
        path: "badges",
        element: <RBBadges />,
      },
      {
        path: "breadcrumbs",
        element: <RBBreadcrumbs />,
      },
      {
        path: "buttons",
        element: <RBButtons />,
      },
      {
        path: "button-group",
        element: <RBButtonGroups />,
      },
      {
        path: "cards",
        element: <RBCards />,
      },
      {
        path: "images",
        element: <RBImages />,
      },
      {
        path: "list-group",
        element: <RBListGroup />,
      },
      {
        path: "figures",
        element: <RBFigure />,
      },
      {
        path: "pagination",
        element: <RBPagination />,
      },
      {
        path: "progress-bars",
        element: <RBProgressBars />,
      },
      {
        path: "spinners",
        element: <RBSpinners />,
      },
      {
        path: "tables",
        element: <RBTables />,
      },
      {
        path: "Accordion",
        element: <RBAccordion />,
      },
      {
        path: "Carousel",
        element: <RBCarousel/>,
      },
      {
        path: "Dropdown",
        element: <RBDropdowns />,
      },
      {
        path: "Modal",
        element: <RBModal />,
      },
      {
        path: "NavbarOffcanvas",
        element: <RBNavbarOffcanvas />,
      },
      {
        path: "NavTabs",
        element: <RBNavTabs />,
      },
      {
        path: "Overlays",
        element: <RBOverlays />,
      },
      {
        path: "basic-form-controls",
        element: <RBBasicFormControls />,
      },
       {
        path: "formik-form",
        element: <RBFormikForm/>,
      },
       {
        path: "rhf-form",
        element: <RHFForm/>,
      },
      {
        path: "yup-form",
        element: <RHFFormYup/>,
      },
      
      
      
      
      

      




    ],
  },
]);



function App() {
  return <RouterProvider router={router} />;
}

export default App;