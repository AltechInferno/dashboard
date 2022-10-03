import { atom } from "recoil";

const sideMenu = atom({
  key: "sideMenu",
  default: {
    menu: [
      {
        icon: "Home",
        title: "Dashboard",
        pathname: "/superadmin",
      },
      {
        icon: "Box",
        title: "Analytics",
        ignore: true,
        pathname: "/",
        
      },
      {
        icon: "ShoppingBag",
        title: "Features",
        subMenu: [
          {
            icon: "",
            pathname: "/categories",
            title: "organization",
          },
          {
            icon: "",
            pathname: "/add-product",
            title: "Department",
          },
         
          {
            icon: "",
            pathname: "/reviews",
            title: "Country",
          },
          {
            icon: "",
            pathname: "/reviews",
            title: "Region",
          },
          {
            icon: "",
            pathname: "/reviews",
            title: "District",
          },
          {
            icon: "",
            pathname: "/reviews",
            title: "Community",
          },
        ],
      },
      {
        icon: "Users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pathname: "/users-layout-1",
            title: "Create Role",
          },
          {
            icon: "",
            pathname: "/users-layout-2",
            title: "Modify Roles",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "Create User",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "Modify User",
          },
          {
            icon: "",
            pathname: "/users-layout-3",
            title: "Profile",
          },
        ],
      },
      {
        icon: "Inbox",
        pathname: "/inbox",
        title: "Inbox",
      },
   
    
      {
        icon: "FileText",
        pathname: "/post",
        title: "Tasks",
      },
     
      "devider",
      {
        icon: "Edit",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pathname: "/crud-data-list",
            title: "Data List",
          },
          {
            icon: "",
            pathname: "/crud-form",
            title: "Form",
          },
        ],
      },
     
      {
        icon: "Trello",
        title: "Profile",
        subMenu: [
          {
            icon: "",
            pathname: "/profile-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pathname: "/profile-overview-2",
            title: "Overview 2",
          },
          {
            icon: "",
            pathname: "/profile-overview-3",
            title: "Overview 3",
          },
        ],
      },
      {
        icon: "Layout",
        title: "Pages",
        subMenu: [
          {
            icon: "",
            title: "Wizards",
            subMenu: [
              {
                icon: "",
                pathname: "/wizard-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/wizard-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/wizard-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            title: "Blog",
            subMenu: [
              {
                icon: "",
                pathname: "/blog-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/blog-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/blog-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            title: "Pricing",
            subMenu: [
              {
                icon: "",
                pathname: "/pricing-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/pricing-layout-2",
                title: "Layout 2",
              },
            ],
          },
          {
            icon: "",
            title: "Invoice",
            subMenu: [
              {
                icon: "",
                pathname: "/invoice-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/invoice-layout-2",
                title: "Layout 2",
              },
            ],
          },
          {
            icon: "",
            title: "FAQ",
            subMenu: [
              {
                icon: "",
                pathname: "/faq-layout-1",
                title: "Layout 1",
              },
              {
                icon: "",
                pathname: "/faq-layout-2",
                title: "Layout 2",
              },
              {
                icon: "",
                pathname: "/faq-layout-3",
                title: "Layout 3",
              },
            ],
          },
          {
            icon: "",
            pathname: "login",
            title: "Login",
          },
          {
            icon: "",
            pathname: "register",
            title: "Register",
          },
          {
            icon: "",
            pathname: "error-page",
            title: "Error Page",
          },
          {
            icon: "",
            pathname: "/update-profile",
            title: "Update profile",
          },
          {
            icon: "",
            pathname: "/change-password",
            title: "Change Password",
          },
        ],
      },
      "devider",
      {
        icon: "Inbox",
        title: "Utility",
        subMenu: [
          {
            icon: "",
            title: "NADMO",
            pathname: "/"
          },
          {
            icon: "",
            title: "MOFA",
            pathname: "/"
          },
        
        ],
      },
      {
        icon: "Sidebar",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/forms/create-form",
            title: "Create Forms",
          },
          {
            icon: "",
            pathname: "/datepicker",
            title: "View Forms",
          },
          {
            icon: "",
            pathname: "/tom-select",
            title: "Category",
          },
          {
            icon: "",
            pathname: "/file-upload",
            title: "Rejected Questionnaires",
          },
          {
            icon: "",
            pathname: "/wysiwyg-editor",
            title: "Responses",
          },
          
        ],
      },
     
    ],
  },
});

export { sideMenu };
