import React, { memo } from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { toast } from 'react-toastify';
import Buttons from '../Buttons/Buttons';
import InputField from '../common/InputField';
import Logo from '../common/Logo';

const LoginComponent = ({
  handleLogin,
  handleForgotPassword,
  handleRegisterUser,
  isLoading,
  serverErrors,
}) => {
  const loginFieldSchema = yup.object().shape({
    email: yup
      .string()
      .email('Email is not valid!')
      .required('Email field is required!'),
    password: yup.string().required('Password field is required!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(loginFieldSchema),
  });

  const onSubmit = data => handleLogin(data);

  const onForgotPasswordClick = () => {
    handleForgotPassword();
  };

  const errorToast = message => {
    toast.error(message);
  };

  if (serverErrors?.responseError) {
    errorToast(serverErrors.responseError);
  }

  return (
    <React.Fragment>
      <div className="auth-full-body-wrapper">
        <div className="login-container">
          <Logo />
          <div className="login-form-wrapper">
            <div className="login-header">
              <h4>Sign In</h4>
            </div>

            <div className="login-body">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="login-form"
                noValidate
              >
                <InputField
                  {...register('email')}
                  type="email"
                  title="Email"
                  placeholder="example@mail.com"
                  errors={errors}
                />
                <InputField
                  {...register('password')}
                  type="password"
                  title="Password"
                  placeholder="********"
                  errors={errors}
                />
                <div className="form-action-container">
                  <p
                    className="forget-password"
                    onClick={onForgotPasswordClick}
                  >
                    Forgot Password?
                  </p>
                </div>
                <Buttons
                  text="Sign in"
                  isLoading={isLoading}
                  handleBtnClick={() => handleSubmit(onSubmit)}
                />
              </form>
              <div className="new-account">
                <div className="no-account">
                  <span className="text">Don't have an account? </span>
                  <span
                    className="link"
                    onClick={handleRegisterUser}
                    onKeyDown={handleRegisterUser}
                  >
                    Sign up
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default memo(LoginComponent);
