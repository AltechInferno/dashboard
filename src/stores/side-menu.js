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
      {
        icon: "Users",
        title: "Users",
        subMenu: [
          {
            icon: "",
            pathname: "/",
            title: "Create Role",
          },
          {
            icon: "",
            pathname: "/",
            title: "Modify Roles",
          },
          {
            icon: "",
            pathname: "/",
            title: "Create User",
          },
          {
            icon: "",
            pathname: "/",
            title: "Modify User",
          },
          {
            icon: "",
            pathname: "/",
            title: "Profile",
          },
        ],
      },
      {
        icon: "Inbox",
        pathname: "/",
        title: "Inbox",
      },
   
    
      {
        icon: "FileText",
        pathname: "/",
        title: "Tasks",
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
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pathname: "/superadmin/create-form",
            title: "Create Forms",
          },
          {
            icon: "",
            pathname: "/superadmin/view-form",
            title: "View Forms",
          },
          {
            icon: "",
            pathname: "/",
            title: "Category",
          },
          {
            icon: "",
            pathname: "/",
            title: "Rejected Questionnaires",
          },
          {
            icon: "",
            pathname: "/",
            title: "Responses",
          },
          
        ],
      },
     
    ],
  },
});

export { sideMenu };
