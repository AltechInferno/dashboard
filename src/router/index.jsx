import { useRoutes } from "react-router-dom";
import SideMenu from "../layouts/side-menu/Main";
import SimpleMenu from "../layouts/simple-menu/Main";
import TopMenu from "../layouts/top-menu/Main";
import DashboardOverview1 from "../views/dashboard-overview-1/Main";
import DashboardOverview2 from "../views/dashboard-overview-2/Main";
import SuperAdmin from "../views/superadmin-dashboard/Main";
import DashboardOverview3 from "../views/dashboard-overview-3/Main";
import DashboardOverview4 from "../views/dashboard-overview-4/Main";
import Categories from "../views/categories/Main";
import AddProduct from "../views/add-product/Main";
import ProductList from "../views/product-list/Main";
import ProductGrid from "../views/product-grid/Main";
import TransactionList from "../views/transaction-list/Main";
import TransactionDetail from "../views/transaction-detail/Main";
import SellerList from "../views/seller-list/Main";
import SellerDetail from "../views/seller-detail/Main";
import Reviews from "../views/reviews/Main";
import Inbox from "../views/inbox/Main";
import FileManager from "../views/file-manager/Main";
import PointOfSale from "../views/point-of-sale/Main";
import Chat from "../views/chat/Main";
import Post from "../views/post/Main";
import Calendar from "../views/calendar/Main";
import CrudDataList from "../views/crud-data-list/Main";

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


import UsersLayout1 from "../views/users-layout-1/Main";
import UsersLayout2 from "../views/users-layout-2/Main";
import UsersLayout3 from "../views/users-layout-3/Main";
import ProfileOverview1 from "../views/profile-overview-1/Main";
import ProfileOverview2 from "../views/profile-overview-2/Main";
import ProfileOverview3 from "../views/profile-overview-3/Main";
import WizardLayout1 from "../views/wizard-layout-1/Main";
import WizardLayout2 from "../views/wizard-layout-2/Main";
import WizardLayout3 from "../views/wizard-layout-3/Main";
import BlogLayout1 from "../views/blog-layout-1/Main";
import BlogLayout2 from "../views/blog-layout-2/Main";
import BlogLayout3 from "../views/blog-layout-3/Main";
import PricingLayout1 from "../views/pricing-layout-1/Main";
import PricingLayout2 from "../views/pricing-layout-2/Main";
import InvoiceLayout1 from "../views/invoice-layout-1/Main";
import InvoiceLayout2 from "../views/invoice-layout-2/Main";
import FaqLayout1 from "../views/faq-layout-1/Main";
import FaqLayout2 from "../views/faq-layout-2/Main";
import FaqLayout3 from "../views/faq-layout-3/Main";
import Login from "../views/login/Main";
import Register from "../views/register/Main";
import ErrorPage from "../views/error-page/Main";
import UpdateProfile from "../views/update-profile/Main";
import ChangePassword from "../views/change-password/Main";
import RegularTable from "../views/regular-table/Main";
import Tabulator from "../views/tabulator/Main";
import Modal from "../views/modal/Main";
import SlideOver from "../views/slide-over/Main";
import Notification from "../views/notification/Main";
import Tab from "../views/tab/Main";
import Accordion from "../views/accordion/Main";
import Button from "../views/button/Main";
import Alert from "../views/alert/Main";
import ProgressBar from "../views/progress-bar/Main";
import Tooltip from "../views/tooltip/Main";
import Dropdown from "../views/dropdown/Main";
import Typography from "../views/typography/Main";
import Icon from "../views/icon/Main";
import LoadingIcon from "../views/loading-icon/Main";
import RegularForm from "../views/regular-form/Main";
import Datepicker from "../views/datepicker/Main";
import TomSelect from "../views/tom-select/Main";
import FileUpload from "../views/file-upload/Main";
import WysiwygEditor from "../views/wysiwyg-editor/Main";
import Validation from "../views/validation/Main";
import Chart from "../views/chart/Main";
import Slider from "../views/slider/Main";
import ImageZoom from "../views/image-zoom/Main";

import Main from "../views/welcome";
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
      path: "/top-menu",
      element:isLoggedIn ? <TopMenu /> : <Login />,
      children: [
        {
          path: "dashboard-overview-1",
          element: <DashboardOverview1 />,
        },
        {
          path: "dashboard-overview-2",
          element: <DashboardOverview2 />,
        },
        {
          path: "dashboard-overview-3",
          element: <DashboardOverview3 />,
        },
        {
          path: "dashboard-overview-4",
          element: <DashboardOverview4 />,
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
      path: "/error-page",
      element: <ErrorPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];

  return useRoutes(routes);
}

export default Router;
