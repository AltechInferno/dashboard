import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "@/base-components";
import VerticalBarChart from "@/components/vertical-bar-chart/Main";
import StackedBarChart from "@/components/stacked-bar-chart/Main";
import HorizontalBarChart from "@/components/horizontal-bar-chart/Main";
import LineChart from "@/components/line-chart/Main";
import DonutChart from "@/components/donut-chart/Main";
import PieChart from "@/components/pie-chart/Main";

function Main() {
  return (
    <>
      <div className="intro-y flex items-center mt-8">
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
                    Animal Production
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
          {/* BEGIN: Line Chart */}
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
      </div>
    </>
  );
}

export default Main;
