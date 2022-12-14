import { ClassicEditor, TomSelect } from "@/base-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Main() {
  const [categories, setCategories] = useState([""]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [formName, setFormName] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [departmentId, setDepartmentId] = useState();
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(); 

  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  const [editorData, setEditorData] = useState("Description of the form");

  const navigate = useNavigate()

  useEffect(() => {
    const fetchCategories = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const token = userData.token;

      const response = await axios.get(
        `https://endpoints.cervello.com.gh/agriews/getCategoriesByDepartmentId/2`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      // console.log(localStorage.getItem("token"));
      setCategories(response.data);
    };
    fetchCategories();
  }, []);


  //get deparment id 
  useEffect(() => {
    const fetchDepartments = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      const token = userData.token;

      const response = await axios.get(
        "https://endpoints.cervello.com.gh/agriews/getAllDepartments",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = JSON.stringify(response)
      const sres = JSON.parse(responseData).data[0]['id']
      console.log(responseData);
      // console.log(localStorage.getItem("token"));
      setDepartments(response.data);
    };
    fetchDepartments();
  }, []);

  const onCreateForm = async (e) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData.token;
    console.log(formName, formDescription, userData.id, isActive);
    const response = await axios.post(
      "https://endpoints.cervello.com.gh/agriews/createForm",
      {
        formName: formName,
        formDescription: formDescription,
        categoryId: selectedCategory,
        formStatus:  1,
        createdBy: userData.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  // console.log(response.data);
  const formId = response.data.value.message
  navigate(`/superadmin/create-questionnaire/${formId}`)
  };
  return (
    <>
      <div className='intro-y flex items-center mt-12'>
        <h2 className='text-lg font-medium mr-auto'>Create Form</h2>
      </div>
      <div className='grid grid-cols-12 gap-8 mt-5'>
        <div className='intro-y col-span-12 lg:col-span-8'>
          {/* BEGIN: Form Layout */}
          <div className='intro-y box p-5'>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                Form Name
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input text'
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
              />
            </div>

            <div className='mt-3'>
              <label htmlFor='crud-form-2' className='form-label'>
                Deparments
              </label>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)} 
                className='w-full'
                
              >
                {departments.map(({ id, departmentName }) => (
                  <option value={id}>{departmentName}</option>
                ))}
              </select>
            </div>

            <div className='mt-3'>
              <label htmlFor='crud-form-2' className='form-label'>
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className='w-full'
                
              >
                {categories.map(({ id, cat_name }) => (
                  <option value={id}>{cat_name}</option>
                ))}
              </select>
            </div>

            <div className='mt-3'>
              <label>Active Status</label>
              <div className='form-switch mt-2'>
                <input
                  type='checkbox'
                  onChange={(e) => {
                    setIsActive(e.target.checked);
                  }}
                  className='form-check-input'
                />
              </div>
            </div>
            <div className='mt-3'>
              <label>Description</label>
              <div className='mt-2 relative h-24'>
                <textarea
                  className='form-control w-full absolute top-0 left-0 z-10 h-full w-full p-5 border border-gray-300 rounded-md resize-none'
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
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
                onClick={onCreateForm}
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
