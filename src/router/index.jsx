import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import SuperAdmin from "../views/superadmin-dashboard/Main";
import Inbox from "../views/inbox/Main";
import Sent from "../views/inbox/sent/Main";
import ViewCountry from "../views/country/Main";
import ViewRegion from "../views/region/Main";
import ViewDistrict from "../views/district/Main";
import ViewDepartment from "../views/department/Main";
import ViewCommunity from "../views/community/Main";
import ViewOrganization from "../views/organization/Main";
import ViewUsers from "../views/users/view-users/Main";
import ViewRoles from "../views/users/view-roles/Main";
import CreateForm from "../views/forms/create-form/Main";
import ViewForm from "../views/forms/view-forms/Main";
import AddUser from "../views/users/add-user/Main";
import AddRole from "../views/users/add-role/Main";
import ViewResponses from "../views/qa/view-responses/Main";
import ViewSingleResponse from "../views/qa/view-single-response/Main";
import ViewQuestionnaire from "../views/qa/view-questionnaire/Main";
import Compose from "../views/inbox/compose/Main";
import Login from "../views/login/Main";
import Register from "../views/register/Main";
import ErrorPage from "../views/error-page/Main";
import Main from "../views/welcome/Main";
import CreateQuestionnaire from "../views/forms/create-questionnaire/Main";

function Router() {

  const isLoggedIn = localStorage.getItem("token") != null;

  
  const routes = [

    {
      path: "/superadmin",
      element:  isLoggedIn  ? <SideMenu /> : <Login />,
      children: [
        {
          path: "/superadmin",
          element: <SuperAdmin />,
        },
     
        {
          path: "create-form",
          element: <CreateForm />,
        },
        {
          path: "view-form",
          element: <ViewForm />,
        },
        {
          path: "create-questionnaire/:id",
          element: <CreateQuestionnaire />,
        },
        {
          path: "view-organization",
          element: <ViewOrganization />,
        },
        {
          path: "view-department",
          element: <ViewDepartment />,
        },
        {
          path: "view-country",
          element: <ViewCountry />,
        },
        {
          path: "view-region",
          element: <ViewRegion />,
        },
        {
          path: "view-district",
          element: <ViewDistrict />,
        },
        {
          path: "view-community",
          element: <ViewCommunity />,
        },
        {
          path: "view-users",
          element: <ViewUsers />,
        },
        {
          path: "add-user",
          element: <AddUser />,
        },
        {
          path: "view-roles",
          element: <ViewRoles />,
        },
        {
          path: "add-role",
          element: <AddRole />,
        },
        {
          path: "view-responses/:id",
          element: <ViewResponses />,
        },
        {
          path: "view-single-response/:id",
          element: <ViewSingleResponse />,
        },
        {
          path: "view-questionnaire/:id",
          element: <ViewQuestionnaire />,
        },
        {
          path: "inbox",
          element: <Inbox />
        },
        {
          path: "sent",
          element: <Sent />
        },
        {
          path: "compose", 
          element: <Compose />
        }
      ],
    },
    {
      path: "/",
      element: <TopMenu />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
