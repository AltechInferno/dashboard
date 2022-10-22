import {
    Lucide,
    Tippy,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
  } from "@/base-components";
  import xlsx from "xlsx";
  import { useEffect, useRef, createRef, useState } from "react";
  import { createIcons, icons } from "lucide";
  import Tabulator from "tabulator-tables";
  import dom from "@left4code/tw-starter/dist/js/dom";
  import { faker as $f } from "@/utils";
  import * as $_ from "lodash";

import axios from "axios";
  function Main() {
    
    
    const [forms, setForms] = useState([""])
      
    useEffect(() => {
      const fetchFormData = async ()=> {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const token = userData.token; 
        console.log(localStorage.getItem('token')); 

        const response = await axios.get(
          "https://endpoints.cervello.com.gh/agriews/getAllForms/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        ); 

        // console.log(response.data); 
        setForms(response.data);

      };
      fetchFormData(); 
    }, []); 


    return (
      <>
      <div className="intro-y flex flex-col sm:flex-row items-center mt-8">
        <h2 className="text-lg font-medium mr-auto">Manage of Forms</h2>
        <div className="w-full sm:w-auto flex mt-4 sm:mt-0">
          <button className="btn btn-primary shadow-md mr-2">Add Form</button>
          <Dropdown className="ml-auto sm:ml-0">
            <DropdownToggle className="btn px-2 box">
              <span className="w-5 h-5 flex items-center justify-center">
                <Lucide icon="Plus" className="w-4 h-4" />
              </span>
            </DropdownToggle>
            <DropdownMenu className="w-40">
              <DropdownContent>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export Word
                </DropdownItem>
                <DropdownItem>
                  <Lucide icon="File" className="w-4 h-4 mr-2" /> Export to PDF
                </DropdownItem>
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      {/* BEGIN: Form Details */}
      <div className="intro-y grid grid-cols-11 gap-5 mt-5">
       
        <div className="col-span-12 lg:col-span-12 2xl:col-span-12">
          <div className="box p-5 rounded-md">
            <div className="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5">
              <div className="font-medium text-base truncate">
                Form Details
              </div>
              <a href="/superadmin/create-form" className="flex items-center ml-auto text-primary">
                <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add Form
              </a>
            </div>
            <div className="overflow-auto lg:overflow-visible -mt-3">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th className="whitespace-nowrap !py-5">Form Name</th>
                    <th className="whitespace-nowrap text-right">Form Description</th>
                    <th className="whitespace-nowrap text-right">Form Status</th>
                    <th className="whitespace-nowrap text-right">Action</th>
           
                  </tr>
                </thead>
                <tbody>
                  {forms.map(({id, formName, formDescription, formStatus}) => (
                    <tr>
                      <td className="!py-4">
                        <div className="flex items-center">
                         
                          <a
                            href=""
                            className="font-medium whitespace-nowrap ml-4"
                          >
                            {formName}
                          </a>
                        </div>
                      </td>
                      <td className="text-right">
                      {formDescription}
                      </td>
                      <td className="text-right">
                      {formStatus===1 ? 'Active' : 'Disabled'}
                      </td>
                      <td className="text-right">
                        <a href={`/superadmin/view-questionnaire/${id}`}>
                          View Questions
                        </a>
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Form Details */}
    </>
    );
  }
  
  export default Main;
  