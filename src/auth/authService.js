import axios from 'axios'

const API_URL = 'https://endpoints.cervello.com.gh/users/'




const getAll = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + 'getAllUsers', config)

  return response.data
}
const deleteUser = async (userData) => {


  const response = await axios.delete(API_URL + 'delete', userData)

  return response.data
}



// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'Register', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

 // Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
} 

// Logout user
const logout = () => {
  localStorage.removeItem('user')
} 

const authService = {
  register,
  logout,
  login,
  deleteUser,
  getAll
}

export default authService