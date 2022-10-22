import { ClassicEditor, TomSelect } from "@/base-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("Description of the form");

  const navigate = useNavigate()

  const onCreateRole = async (e) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData.token;
    console.log(roleName, roleDescription, userData.id);
    const response = await axios.post(
      "https://endpoints.cervello.com.gh/agriews/createRoles",
      {
        roleName: roleName,
        roleDescription: roleDescription,
        createdBy: userData.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  console.log(response.data);
  navigate(`/superadmin/view-roles`)
  };
  return (
    <>
      <div className='intro-y flex items-center mt-12'>
        <h2 className='text-lg font-medium mr-auto'>Add Role</h2>
      </div>
      <div className='grid grid-cols-12 gap-8 mt-5'>
        <div className='intro-y col-span-12 lg:col-span-8'>
          {/* BEGIN: Form Layout */}
          <div className='intro-y box p-5'>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                Role Name
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input text'
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
              />
            </div>
           
            <div className='mt-3'>
              <label>Description</label>
              <div className='mt-2 relative h-24'>
                <textarea
                  className='form-control w-full absolute top-0 left-0 z-10 h-full w-full p-5 border border-gray-300 rounded-md resize-none'
                  value={roleDescription}
                  onChange={(e) => setRoleDescription(e.target.value)}
                />
              </div>
            </div>
            <div className='text-right mt-5'>
              <button
                type='button'
                className='btn btn-outline-secondary w-24 mr-1'
              >
                Cancel
              </button>
              <button
                onClick={onCreateRole}
                type='button'
                className='btn btn-primary w-24'
              >
                Save
              </button>
            </div>
          </div>
          {/* END: Form Layout */}
        </div>
      </div>
    </>
  );
}

export default Main;
