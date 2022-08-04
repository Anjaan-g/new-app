import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../common/InputField';
import Logo from '../common/Logo';
import Buttons from '../Buttons/Buttons';

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email is not valid!')
    .required('Email field is required!'),
});

const ForgotPassword = ({
  handleResetPasswordClick,
  handleGoBackToLogin,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = data => handleResetPasswordClick(data);

  return (
    <div className="auth-full-body-wrapper">
      <div className="login-container">
        <Logo />
        <div className="login-form-wrapper">
          <div className="login-header">
            <h4>Reset your Password</h4>
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
              <Buttons
                text="Reset Password"
                isLoading={isLoading}
                handleBtnClick={() => handleSubmit(onSubmit)}
              />
            </form>
            <div className="new-account">
              <div className="no-account">
                <span
                  className="link"
                  onClick={handleGoBackToLogin}
                  onKeyDown={handleGoBackToLogin}
                >
                  Go to Sign in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
