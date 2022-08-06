import { responseErrorCode } from 'core/firebase/config';
import { auth, signIn } from 'core/firebase/firebaseIndex';
import { loginUser } from 'features/auth/authSlice';
import LoginComponent from 'modules/components/Authentication/Login';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()

  const handleLogin = values => {
    console.log(values);
    const { email, password } = values;
    setIsLoading(true);
    signIn(auth, email, password)
      .then(userCredential => {
        setIsLoading(false);
        const { user } = userCredential;
        const { currentUser } = auth;
        if (currentUser.emailVerified) {
          dispatch(loginUser({ user_uuid: user.uid, userInfo: currentUser.reloadUserInfo }));
        } else {
          toast.error(`Please verify your account in email : ${email} or you can recover account from forgot password`);
        }
      })
      .catch(error => {
        const errorCode = error.code;
        toast.error(responseErrorCode(errorCode));
        setIsLoading(false);
      });
  };

  return (
    <div>
      <LoginComponent handleLogin={handleLogin} isLoading={isLoading} />
    </div>
  );
};

export default Login;
