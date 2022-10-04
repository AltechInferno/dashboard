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
        subMenu: [
          {
            icon: "",
            pathname: "/",
            title: "Query Builder",
          },
        ]
        
      },
     
      {
        icon: "Users",
        title: "Users",
        subMenu: [
         
          {
            icon: "",
            pathname: "/",
            title: "Manage Roles",
          },
          {
            icon: "",
            pathname: "/",
            title: "Manage Users",
          },
          
        ],
      },
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
        title: "Survey",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/create-form",
            title: "Create Forms",
          },
          {
            icon: "",
            pathname: "/superadmin/view-form",
            title: "Manage Forms",
          },
         
        ],
      },
      {
        icon: "Sidebar",
        title: "Quality Assurance",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/",
            title: "Review Responses",
          },
          {
            icon: "",
            pathname: "/superadmin",
            title: "Queries",
          },
         
        ],
      },
      {
        icon: "ShoppingBag",
        title: "Settings",
        subMenu: [
          {
            icon: "",
            pathname: "/",
            title: "organization",
          },
          {
            icon: "",
            pathname: "/",
            title: "Department",
          },
         
          {
            icon: "",
            pathname: "/",
            title: "Country",
          },
          {
            icon: "",
            pathname: "/",
            title: "Region",
          },
          {
            icon: "",
            pathname: "/",
            title: "District",
          },
          {
            icon: "",
            pathname: "/",
            title: "Community",
          },
        ],
      },
     
    ],
  },
});

export { sideMenu };
