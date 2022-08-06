import jwtDecode from 'jwt-decode';

export const checkJwtTokenValid = (token) => {
  const decoded = token ? jwtDecode(token) : '';
  return decoded;
};

export const checkLoggedIn = () => {
  const user = localStorage.getItem('user')
  const parsedUser = JSON.parse(user) || {}
  console.log('User=>', parsedUser)
}
