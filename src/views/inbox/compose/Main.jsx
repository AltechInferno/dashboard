import {
    Lucide,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownContent,
    DropdownItem,
    ClassicEditor,
    PreviewComponent,
    Preview,
    Source,
    Highlight,
  } from "@/base-components";
  import { useState, useEffect } from "react";
  import { faker as $f } from "@/utils";
  import classnames from "classnames";
  import axios from "axios";
import { useNavigate } from "react-router-dom";
  
  function Main() {

    const [editorData, setEditorData] = useState("Message Content...");
    const [messageTitle, setMessageTitle] = useState(""); 
    const navigate = useNavigate()

    const onSendMessage = async () => {
        const userData = JSON.parse(localStorage.getItem("userData"));
        const token = userData.token;
        console.log(messageTitle, editorData, userData.id);
        const createdAt = "2022-10-13";

        const response = await axios.post(
            "https://endpoints.cervello.com.gh/agriews/createMessages",
            {
              title: messageTitle,
              content: editorData,
              status:  1,
              createdBy: userData.id,
              createdDate: createdAt, 
              isDeleted: 0, 
              updatedDate: createdAt
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log(response.data);
            
            navigate(`/superadmin/sent`)

    }
    return (
      <>
        <div className="grid grid-cols-12 gap-6 mt-8">
          <div className="col-span-12 lg:col-span-3 2xl:col-span-2">
            <h2 className="intro-y text-lg font-medium mr-auto mt-2">Inbox</h2>
            {/* BEGIN: Inbox Menu */}
            <div className="intro-y box bg-primary p-5 mt-6">
              <a hef="/superadmin/compose">
              <button
                type="button"
                className="btn text-slate-600 dark:text-slate-300 w-full bg-white dark:bg-darkmode-300 dark:border-darkmode-300 mt-1"
              >
                <Lucide icon="Edit3" className="w-4 h-4 mr-2" /> Compose
              </button>
              </a>
              <div className="border-t border-white/10 dark:border-darkmode-400 mt-6 pt-6 text-white">
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md"
                >
                  <Lucide icon="Mail" className="w-4 h-4 mr-2" /> Inbox
                </a>
                <a
                  href="/superadmin/sent"
                  className="flex items-center px-3 py-2 mt-2 rounded-md"
                >
                  <Lucide icon="Send" className="w-4 h-4 mr-2" /> Sent
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md"
                >
                  <Lucide icon="Inbox" className="w-4 h-4 mr-2" /> Draft
                </a>
               
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md"
                >
                  <Lucide icon="Trash" className="w-4 h-4 mr-2" /> Trash
                </a>
              </div>
              <div className="border-t border-white/10 dark:border-darkmode-400 mt-4 pt-4 text-white">
                <a href="" className="flex items-center px-3 py-2 truncate">
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  Custom Work
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
                >
                  <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                  Important Meetings
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
                >
                  <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
                  Work
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
                >
                  <div className="w-2 h-2 bg-pending rounded-full mr-3"></div>
                  Design
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
                >
                  <div className="w-2 h-2 bg-danger rounded-full mr-3"></div>
                  Next Week
                </a>
                <a
                  href=""
                  className="flex items-center px-3 py-2 mt-2 rounded-md truncate"
                >
                  <Lucide icon="Plus" className="w-4 h-4 mr-2" /> Add New Label
                </a>
              </div>
            </div>
            {/* END: Inbox Menu */}
          </div>
          <div className="col-span-12 lg:col-span-9 2xl:col-span-10">
            {/* BEGIN: Inbox Filter */}
            <div className="intro-y flex flex-col-reverse sm:flex-row items-center">
              <div className="w-full sm:w-auto relative mr-auto mt-3 sm:mt-0">
                <Lucide
                  icon="Search"
                  className="w-4 h-4 absolute my-auto inset-y-0 ml-3 left-0 z-10 text-slate-500"
                />
                <input
                  type="text"
                  className="form-control w-full sm:w-64 box px-10"
                  placeholder="Search mail"
                />
                <Dropdown
                  className="inbox-filter absolute inset-y-0 mr-3 right-0 flex items-center"
                  placement="bottom-start"
                >
                  <DropdownToggle
                    tag="a"
                    role="button"
                    className="w-4 h-4 block"
                    href="#"
                  >
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 cursor-pointer text-slate-500"
                    />
                  </DropdownToggle>
                  <DropdownMenu className="inbox-filter__dropdown-menu pt-2">
                    <DropdownContent tag="div">
                      <div className="grid grid-cols-12 gap-4 gap-y-3 p-3">
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-1"
                            className="form-label text-xs"
                          >
                            From
                          </label>
                          <input
                            id="input-filter-1"
                            type="text"
                            className="form-control flex-1"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-2"
                            className="form-label text-xs"
                          >
                            To
                          </label>
                          <input
                            id="input-filter-2"
                            type="text"
                            className="form-control flex-1"
                            placeholder="example@gmail.com"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-3"
                            className="form-label text-xs"
                          >
                            Subject
                          </label>
                          <input
                            id="input-filter-3"
                            type="text"
                            className="form-control flex-1"
                            placeholder="Important Meeting"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-4"
                            className="form-label text-xs"
                          >
                            Has the Words
                          </label>
                          <input
                            id="input-filter-4"
                            type="text"
                            className="form-control flex-1"
                            placeholder="Job, Work, Documentation"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-5"
                            className="form-label text-xs"
                          >
                            Doesn't Have
                          </label>
                          <input
                            id="input-filter-5"
                            type="text"
                            className="form-control flex-1"
                            placeholder="Job, Work, Documentation"
                          />
                        </div>
                        <div className="col-span-6">
                          <label
                            htmlFor="input-filter-6"
                            className="form-label text-xs"
                          >
                            Size
                          </label>
                          <select
                            id="input-filter-6"
                            className="form-select flex-1"
                          >
                            <option>10</option>
                            <option>25</option>
                            <option>35</option>
                            <option>50</option>
                          </select>
                        </div>
                        <div className="col-span-12 flex items-center mt-3">
                          <button className="btn btn-secondary w-32 ml-auto">
                            Create Filter
                          </button>
                          <button className="btn btn-primary w-32 ml-2">
                            Search
                          </button>
                        </div>
                      </div>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="w-full sm:w-auto flex">
                
                <Dropdown>
                  <DropdownToggle className="btn px-2 box">
                    <span className="w-5 h-5 flex items-center justify-center">
                      <Lucide icon="Plus" className="w-4 h-4" />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu className="w-40">
                    <DropdownContent>
                      <DropdownItem>
                        <Lucide icon="User" className="w-4 h-4 mr-2" /> Contacts
                      </DropdownItem>
                      <DropdownItem>
                        <Lucide icon="Settings" className="w-4 h-4 mr-2" />{" "}
                        Settings
                      </DropdownItem>
                    </DropdownContent>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            {/* END: Inbox Filter */}

            {/* BEGIN: Inbox Content */}
            <div className="intro-y inbox box mt-5">
              <div className="p-5 flex flex-col-reverse sm:flex-row text-slate-500 border-b border-slate-200/60">
                <div className="flex items-center mt-3 sm:mt-0 border-t sm:border-0 border-slate-200/60 pt-5 sm:pt-0 -mx-5 sm:mx-0 px-5 sm:px-0">
                  <input className="form-check-input" type="checkbox" />
                  <Dropdown className="ml-1" placement="bottom-start">
                    <DropdownToggle className="w-5 h-5 block" href="#">
                      <Lucide icon="ChevronDown" className="w-5 h-5" />
                    </DropdownToggle>
                    <DropdownMenu className="w-32">
                      <DropdownContent>
                        <DropdownItem>All</DropdownItem>
                        <DropdownItem>None</DropdownItem>
                        <DropdownItem>Read</DropdownItem>
                        <DropdownItem>Unread</DropdownItem>
                        <DropdownItem>Starred</DropdownItem>
                        <DropdownItem>Unstarred</DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                  <a
                    href="#"
                    className="w-5 h-5 ml-5 flex items-center justify-center"
                  >
                    <Lucide icon="RefreshCw" className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-5 h-5 ml-5 flex items-center justify-center"
                  >
                    <Lucide icon="MoreHorizontal" className="w-4 h-4" />
                  </a>
                </div>
                <div className="flex items-center sm:ml-auto">
                  <div className="">1 - 50 of 5,238</div>
                  <a
                    href="#"
                    className="w-5 h-5 ml-5 flex items-center justify-center"
                  >
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-5 h-5 ml-5 flex items-center justify-center"
                  >
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    className="w-5 h-5 ml-5 flex items-center justify-center"
                  >
                    <Lucide icon="Settings" className="w-4 h-4" />
                  </a>
                </div>
              </div>
              
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Message Title '
                value={messageTitle}
                onChange={(e) => setMessageTitle(e.target.value)}
              />

              <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />

              <button className="btn btn-primary shadow-md mr-2"
                onClick={onSendMessage}
                type='button'
              >
                  Send Message
                </button>
            </div>
            {/* END: Inbox Content */}
          </div>
        </div>
      </>
    );
  }
  
  export default Main;
  