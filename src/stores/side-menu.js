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
        icon: "Sidebar",
        title: "Messaging",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/compose",
            title: "Compose",
          },
          {
            icon: "",
            pathname: "/superadmin/inbox",
            title: "Inbox",
          },
          {
            icon: "",
            pathname: "/superadmin/sent",
            title: "Sent",
          },
         
        ],
      },
     
      {
        icon: "Users",
        title: "Users",
        subMenu: [
         
          {
            icon: "",
            pathname: "/superadmin/view-roles",
            title: "Manage Roles",
          },
          {
            icon: "",
            pathname: "/superadmin/view-users",
            title: "Manage Users",
          },
          
        ],
      },
      {
        icon: "File",
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
        icon: "Files",
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
        title: "Data Review",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/view-responses",
            title: "Review Responses",
          },
          {
            icon: "",
            pathname: "/superadmin/view-responses",
            title: "Queries",
          },
         
        ],
      },
      {
        icon: "Settings",
        title: "Settings",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/view-organization",
            title: "organization",
          },
          {
            icon: "",
            pathname: "/superadmin/view-department",
            title: "Department",
          },
         
          {
            icon: "",
            pathname: "/superadmin/view-country",
            title: "Country",
          },
          {
            icon: "",
            pathname: "/superadmin/view-region",
            title: "Region",
          },
          {
            icon: "",
            pathname: "/superadmin/view-district",
            title: "District",
          },
          {
            icon: "",
            pathname: "/superadmin/view-community",
            title: "Community",
          },
        ],
      },
     
    ],
  },
});

export { sideMenu };
