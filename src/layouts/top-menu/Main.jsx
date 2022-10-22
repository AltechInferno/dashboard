import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { helper as $h } from "@/utils";
import { topMenu as useTopMenuStore } from "@/stores/top-menu";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import { useRecoilValue } from "recoil";
import { linkTo, nestedMenu } from "@/layouts/side-menu";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/base-components";
import logoUrl from "@/assets/images/logo.png";
import classnames from "classnames";
import MobileMenu from "@/components/mobile-menu/Main";
import MainColorSwitcher from "@/components/main-color-switcher/Main";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";

function Main() {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [formattedMenu, setFormattedMenu] = useState([]);
  const topMenuStore = useRecoilValue(useTopMenuStore);
  const topMenu = () => nestedMenu($h.toRaw(topMenuStore.menu), location);

  useEffect(() => {
    dom("body").removeClass("error-page").removeClass("login").addClass("main");
    setFormattedMenu(topMenu());
  }, [topMenuStore, location.pathname]);

  return (
    <div className="py-5 md:py-0 -mx-3 px-3 sm:-mx-8 sm:px-8 bg-black/[0.15] dark:bg-transparent">
   
      <MobileMenu />
      {/* BEGIN: Top Bar */}
      <div className="top-bar-boxed border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:mx-0 px-4 sm:px-8 md:px-6 mb-10 md:mb-8">
        <div className="h-full flex items-center">
          {/* BEGIN: Logo */}
          <Link
            to="/"
            className="-intro-x hidden md:flex"
          >
            <img
              alt="Agriews"
              className="w-6"
              src={logoUrl}
            />
            <span className="text-white text-lg ml-3"> AGRIEWS </span>
          </Link>
          {/* END: Logo */}
          {/* BEGIN: Breadcrumb */}
          <nav aria-label="breadcrumb" className="-intro-x h-full mr-auto">
            
          </nav>
          {/* END: Breadcrumb */}
          {/* BEGIN: Search */}
          <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
              <input
                type="text"
                className="search__input form-control border-transparent"
                placeholder="Search..."
                onFocus={() => {
                 
                }}
                onBlur={() => {
                  setSearchDropdown(false);
                }}
              />
              <Lucide
                icon="Search"
                className="search__icon dark:text-slate-500"
              />
            </div>
            <a className="notification notification--light sm:hidden" href="">
              <Lucide
                icon="Search"
                className="notification__icon dark:text-slate-500"
              />
            </a>
            <div
              className={classnames({
                "search-result": true,
                show: searchDropdown,
              })}
            >
             
            </div>
          </div>
          {/* END: Search */}
         
          {/* BEGIN: Account Menu */}
          <Dropdown className="intro-x w-8 h-8">
            <DropdownToggle
              tag="div"
              role="button"
              className="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
              style={{backgroundColor: "white"}}
            >
              <img
                alt="Agriews"
                src={logoUrl}
              />
            </DropdownToggle>
            <DropdownMenu className="w-56">
              <DropdownContent className="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white">
               
                <DropdownDivider className="border-white/[0.08]" />
               
                
                <DropdownItem className="hover:bg-white/5">
                      <Link
                      to="/login"
                      className="-intro-x hidden md:flex">
                  <Lucide icon="Lock" className="w-4 h-4 mr-2" /> Signin
                  </Link>
                </DropdownItem>
                <DropdownItem className="hover:bg-white/5">
                  <Lucide icon="HelpCircle" className="w-4 h-4 mr-2" /> Help
                </DropdownItem>
                <DropdownDivider className="border-white/[0.08]" />
               
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          {/* END: Account Menu */}
        </div>
      </div>
      {/* END: Top Bar */}
     

      {/* BEGIN: Content */}
      <div className="content content--top-nav">
        <Outlet />
      </div>
      {/* END: Content */}
    </div>
  );
}

export default Main;
