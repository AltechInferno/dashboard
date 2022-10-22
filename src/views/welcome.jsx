import {
    PreviewComponent,
    Preview,
    Source,
    Highlight,
    Tippy,
    Lucide,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    TinySlider,
    Alert
  } from "@/base-components";
  import { faker as $f } from "@/utils";
  import * as $_ from "lodash";
  import classnames from "classnames";
  import ReportMap from "@/components/report-map/Main";
  import { useRef } from "react";
  import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import StackedBarChart from "@/components/stacked-bar-chart/Main";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main";
import LineChart from "@/components/line-chart/Main";
import SimpleLineChart3 from "@/components/simple-line-chart-3/Main";
import SimpleLineChart4 from "@/components/simple-line-chart-4/Main";

import ReportDonutChart2 from "@/components/report-donut-chart-2/Main";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main";
  
  function Main() {
    const importantNotesRef = useRef();
    const prevImportantNotes = () => {
      importantNotesRef.current.tns.goTo("prev");
    };
    const nextImportantNotes = () => {
      importantNotesRef.current.tns.goTo("next");
    };
  
    return (
      <>
             <div className="intro-y flex items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">AGRICULTURE EARLY WARMING SYSTEM</h2>
      </div>

      <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 xl:col-span-12 2xl:col-span-12 z-10">
            <div className="mt-6 -mb-6 intro-y">
              <Alert className="box bg-primary text-white flex items-center mb-6">
                {({ dismiss }) => (
                  <>
                    <span>
                      Subscribe to our daily reports
                      
                      .
                      <button className="rounded-md bg-white bg-opacity-20 dark:bg-darkmode-300 hover:bg-opacity-30 py-0.5 px-2 -my-3 ml-2">
                        Subscribe Now
                      </button>
                    </span>
                    <button
                      type="button"
                      className="btn-close text-white"
                      onClick={dismiss}
                      aria-label="Close"
                    >
                      <Lucide icon="X" className="w-4 h-4" />
                    </button>
                  </>
                )}
              </Alert>
            </div>


            <div className="mt-14 mb-3 grid grid-cols-12 sm:gap-10 intro-y">
              <div className="col-span-12 sm:col-span-6 md:col-span-4 py-6 sm:pl-5 md:pl-0 lg:pl-5 relative text-center sm:text-left">
                <Dropdown className="absolute pt-0.5 2xl:pt-0 mt-5 2xl:mt-6 top-0 right-0">
                  <DropdownToggle tag="a" className="block" href="#">
                    <Lucide
                      icon="MoreVertical"
                      className="w-5 h-5 text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                        Monthly Report
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                        Annual Report
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
                <div className="text-sm 2xl:text-base font-medium -mb-1">
                  National Topical  Incidents!
                  <span className="text-slate-600 dark:text-slate-300 font-normal">
                     
                  </span>
                </div>
                <div className="text-base 2xl:text-lg justify-center sm:justify-start flex items-center text-slate-600 dark:text-slate-300 leading-3 mt-14 2xl:mt-24">
                  Bagre Dam Spillage
                  <Tippy
                    tag="div"
                    content="Current situation"
                  >
                    <Lucide
                      icon="AlertCircle"
                      className="w-5 h-5 ml-1.5 mt-0.5"
                    />
                  </Tippy>
                </div>
                <div className="2xl:flex mt-5 mb-3">
                  <div className="flex items-center justify-center sm:justify-start">
                    <div className="relative text-2xl 2xl:text-3xl font-medium leading-6 pl-3 2xl:pl-4">
                      <span className="absolute text-xl 2xl:text-2xl top-0 left-0 -mt-1 2xl:mt-0">
                        
                      </span>
                      102
                    </div>
                    <a className="text-slate-500 ml-4 2xl:ml-16" href="">
                      <Lucide icon="RefreshCcw" className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="mt-5 2xl:flex 2xl:justify-center 2xl:mt-0 2xl:-ml-20 2xl:w-14 2xl:flex-none 2xl:pl-2.5">
                    <Tippy
                      tag="div"
                      className="font-medium inline-flex bg-success text-white rounded-full px-2 py-1 text-xs 2xl:text-sm 2xl:p-0 2xl:text-success 2xl:bg-transparent 2xl:flex items-center cursor-pointer 2xl:justify-center"
                      content="49% Higher than last month"
                    >
                      affected communities
                      <Lucide icon="ChevronUp" className="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                </div>
                <div className="text-slate-500">Last updated 1 hour ago</div>
                <div className="2xl:text-base text-slate-600 dark:text-slate-300 mt-6 -mb-1">
                  Number of affected farms
                  <a
                    href=""
                    className="underline decoration-dotted underline-offset-4 text-primary dark:text-slate-400"
                  >
                    300
                  </a>
                </div>
                <Dropdown className="mt-14 2xl:mt-24">
                  <DropdownToggle className="btn btn-rounded-primary w-44 2xl:w-52 px-4 relative justify-start">
                    Download Reports
                    <span className="w-8 h-8 absolute flex justify-center items-center right-0 top-0 bottom-0 my-auto ml-auto mr-1">
                      <Lucide icon="ChevronDown" className="w-4 h-4" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="w-44 2xl:w-52">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                        Monthly Report
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="FileText" className="w-4 h-4 mr-2" />
                        Annual Report
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="row-start-2 md:row-start-auto col-span-12 md:col-span-4 py-6 border-black border-opacity-10 border-t md:border-t-0 md:border-l md:border-r border-dashed px-10 sm:px-28 md:px-5 -mx-5">
                <div className="flex flex-wrap items-center">
                  <div className="flex items-center w-full sm:w-auto justify-center sm:justify-start mr-auto mb-5 2xl:mb-0">
                    <div className="w-2 h-2 bg-primary rounded-full -mt-4"></div>
                    <div className="ml-3.5">
                      <div className="relative text-xl 2xl:text-2xl font-medium leading-6 2xl:leading-5 pl-3.5 2xl:pl-4">
                        <span className="absolute text-base 2xl:text-xl top-0 left-0 2xl:-mt-1.5">
                          
                        </span>
                        Population
                      </div>
                      <div className="text-slate-500 mt-2">Yearly Report</div>
                    </div>
                  </div>
                  <select className="form-select bg-transparent border-black border-opacity-10 dark:border-darkmode-400 dark:bg-transparent mx-auto sm:mx-0 py-1.5 px-3 w-auto -mt-2">
                    <option value="daily">2018</option>
                    <option value="weekly">2019</option>
                    <option value="monthly">2020</option>
                    <option value="yearly">2021</option>
                    <option value="custom-date">2022</option>
                  </select>
                </div>
                
                <div className="mt-6">
                  <ReportBarChart1 height={290} />
                </div>
              </div>


              <div className="2xl:pl-6 grid grid-cols-4 gap-x-6 2xl:gap-x-0 gap-y-6">
              {/* BEGIN: Important Notes */}
              <div className="col-span-12 md:col-span-6 xl:col-span-12 mt-3 2xl:mt-8">
                <div className="intro-x flex items-center h-10">
                  <h2 className="text-lg font-medium truncate mr-auto">
                    Important Notes
                  </h2>
                  <button
                    data-carousel="important-notes"
                    data-target="prev"
                    className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    onClick={prevImportantNotes}
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </button>
                  <button
                    data-carousel="important-notes"
                    data-target="next"
                    className="tiny-slider-navigator btn px-2 border-slate-300 text-slate-600 dark:text-slate-300 mr-2"
                    onClick={nextImportantNotes}
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </button>
                </div>
                <div className="mt-5 intro-x">
                  <div className="box zoom-in">
                    <TinySlider
                      getRef={(el) => {
                        importantNotesRef.current = el;
                      }}
                    >
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="text-base font-medium truncate">
                          Lorem Ipsum is simply dummy text
                        </div>
                        <div className="text-slate-400 mt-1">20 Hours ago</div>
                        <div className="text-slate-500 text-justify mt-1">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s.
                        </div>
                        <div className="font-medium flex mt-5">
                          <button
                            type="button"
                            className="btn btn-secondary py-1 px-2"
                          >
                            View Notes
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary py-1 px-2 ml-auto"
                          >
                            Dismiss
                          </button>
                        </div>
                      </div>
                    </TinySlider>
                  </div>
                </div>
              </div>
              {/* END: Important Notes */}
              {/* BEGIN: Recent Activities */}

              </div>
             
            </div>
          </div>


        

        </div>
      <div className="intro-y grid grid-cols-12 gap-6 mt-5">
     
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Vertical Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Crop Production
                  </h2>
                </div>
                <div className="p-5">
                  <Preview>
                    <VerticalBarChart height={400} />
                  </Preview>
                
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Vertical Bar Chart */}
          {/* BEGIN: Horizontal Bar Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Frequency of Hazard
                  </h2>
                  
                </div>
                <div className="p-5">
                  <Preview>
                    <HorizontalBarChart height={400} />
                  </Preview>
                  
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Horizontal Bar Chart */}
         
        </div>
        <div className="col-span-12 lg:col-span-6">
          {/* BEGIN: Stacked Bar Chart */}
          <PreviewComponent className="intro-y box">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">
                    Animal Production Chart
                  </h2>
                </div>
                <div className="p-5">
                  <Preview>
                    <StackedBarChart height={400} />
                  </Preview>
                
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Stacked Bar Chart */}
          {/* BEGIN: Market price Chart */}
          <PreviewComponent className="intro-y box mt-5">
            {({ toggle }) => (
              <>
                <div className="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                  <h2 className="font-medium text-base mr-auto">Market Price</h2>
                 
                </div>
                <div className="p-5">
                  <Preview>
                    <LineChart height={400} />
                  </Preview>
                 
                </div>
              </>
            )}
          </PreviewComponent>
          {/* END: Line Chart */}
        
        </div>

         {/* BEGIN: Official Store */}
         <div className="col-span-12 xl:col-span-12 mt-12">
            <div className="intro-y block sm:flex items-center h-10">
              <h2 className="text-lg font-medium truncate mr-5">
                Mapped Data Collection
              </h2>
              <div className="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
                <Lucide
                  icon="MapPin"
                  className="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
                />
                <input
                  type="text"
                  className="form-control sm:w-56 box pl-10"
                  placeholder="Filter by city"
                />
              </div>
            </div>
            <div className="intro-y box p-5 mt-12 sm:mt-5">
              <div>
                250 data collected in 3 regions, click the marker to see
                location details.
              </div>
              <ReportMap className="report-maps mt-5 bg-slate-200 rounded-md" />
            </div>
          </div>
          {/* END: Official Store */}
      </div>
      </>
    );
  }
  
  export default Main;
  