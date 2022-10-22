import { ClassicEditor, TomSelect } from "@/base-components";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

function Main() {
  const [username, setUserName] = useState([""]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [othername, setOtherName] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [organizations, setOrganizations] = useState([""]);
  const [selectedOrganization, setSelectedOrganization] = useState(); 
  const [roles, setRoles] = useState([""]);
  const [selectedRole, setSelectedRole] = useState();
  const editorConfig = {
    toolbar: {
      items: ["bold", "italic", "link"],
    },
  };
  

  const navigate = useNavigate()

  useEffect(() => {
    const fetchRoles = async() => {
      const userData = JSON.parse(localStorage.getItem("userData")); 
      const token = userData.token; 

      const response = await axios.get(
        "https://endpoints.cervello.com.gh/users/getAllRoles",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRoles(response.data);
    }
    fetchRoles();
  }, []);

  useEffect(() => {
    const fetchOrganizations = async () => {
      const userData = JSON.parse(localStorage.getItem("userData")); 
      const token = userData.token; 

      const response = await axios.get(
        "https://endpoints.cervello.com.gh/agriews/getAllOrganizations", 
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
        setOrganizations(response.data);
    }
    fetchOrganizations();
  }, []);

  const onCreateUser = async (e) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = userData.token;
    console.log(firstName, lastName, userData.id, isActive);
    const response = await axios.post(
      "https://endpoints.cervello.com.gh/users/Register",
    
      {
        firstName: firstName,
        lastName: lastName, 
        username: username, 
        othername: othername, 
        role: selectedRole,
        phoneNumber: phoneNumber, 
        password: password,
        email: email, 
        organizationId: parseInt(selectedOrganization), 
        organizationName: "NADMO",
        createdByUserId: userData.id, 
        
      },
      
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

  console.log(response.data);
  navigate(`/superadmin/view-users`)
  };
  return (
    <>
      <div className='intro-y flex items-center mt-12'>
        <h2 className='text-lg font-medium mr-auto'>Create User</h2>
      </div>
      <div className='grid grid-cols-12 gap-8 mt-5'>
        <div className='intro-y col-span-12 lg:col-span-8'>
          {/* BEGIN: Form Layout */}
          <div className='intro-y box p-5'>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                FirstName
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input Firstname'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                Last Name
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input Lastname'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                Username
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input username'
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor='crud-form-1' className='form-label'>
                Othername
              </label>
              <input
                id='crud-form-1'
                type='text'
                className='form-control w-full'
                placeholder='Input othername'
                value={othername}
                onChange={(e) => setOtherName(e.target.value)}
              />
            </div>
            
            <div>
                  <label htmlFor='crud-form-1' className='form-label'>
                    Email
                  </label>
                  <input
                    id='crud-form-1'
                    type='email'
                    className='form-control w-full'
                    placeholder='Input User Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
            </div>

            <div>
                  <label htmlFor='crud-form-1' className='form-label'>
                    Password
                  </label>
                  <input
                    id='crud-form-1'
                    type='password'
                    className='form-control w-full'
                    placeholder='********'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
            </div>
              
              
           
          
            <div className="mt-3">
              <div className="sm:grid grid-cols-3 gap-2">
                <div className="input-group">
                  <div id="input-group-3" className="input-group-text">
                    Role
                  </div>
                  <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className='w-full'
                
              >
                {roles.map(({ id, roleName }) => (
                  <option value={roleName}>{roleName}</option>
                ))}
              </select>
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="input-group-4" className="input-group-text">
                    Organi.
                  </div>
                        <select
                      value={selectedOrganization}
                      onChange={(e) => parseInt(setSelectedOrganization(e.target.value))}
                      className='w-full'
                      
                    >
                      {organizations.map(({ id, organisationName }) => (
                        <option value={id}>{organisationName}</option>
                      ))}
                    </select>
                </div>
                <div className="input-group mt-2 sm:mt-0">
                  <div id="input-group-5" className="input-group-text">
                    Phone
                  </div>
                  <input
                id='crud-form-1'
                type='tel'
                className='form-control w-full'
                placeholder='Input Phone Number'
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
                </div>
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
                onClick={onCreateUser}
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
