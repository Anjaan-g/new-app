import axios from 'axios';
import { backendRoutes } from 'core/constants/consts';
import { checkJwtTokenValid } from 'helpers/helpers';

const LOGIN_API_URL = backendRoutes.urlLogin;
const API_URL = '';

//Register User
const register = async userData => {
  const response = await axios.post(API_URL, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }
  return response.data;
};

//Login User
const login = async userData => {
  console.log('UserData=>', userData);
  const response = await axios.post(LOGIN_API_URL, { user_uuid: userData.user_uuid });
  let user = {};
  if (response.data) {
    const token = response?.data?.token;
    const decoded = checkJwtTokenValid(token);
    user = { ...decoded, token, userInfo: userData.userInfo };
    localStorage.setItem('user', JSON.stringify(user));
  }
  return user;
};

//Logout Useer
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
