import React, { forwardRef, useState } from 'react';
import cn from 'classnames';

const InputField = forwardRef(
  (
    {
      title,
      disabled,
      type = 'text',
      name,
      hint,
      warning_message,
      reservePlaceForInfo = false,
      className,
      errors,
      ...rest
    },
    ref,
  ) => {
    const [togglePasswordShow, setTogglePasswordShow] = useState(false);
    const error = !!errors && !!errors[name] && errors[name].message;

    return (
      <label
        htmlFor={name}
        className={cn('sb-input', className, {
          'sb-input-disabled': disabled,
          'sb-input-invalid': !!error,
        })}
      >
        {!!title && <div className="title">{title}</div>}
        <div className="sb-input-container">
          <input
            className="input"
            id={name}
            name={name}
            type={type === 'password' ? !togglePasswordShow && 'password' : type}
            disabled={disabled}
            ref={ref}
            {...rest}
          />
        </div>
        <div
          className={cn('info', {
            'info-error': error || warning_message,
            'info-hint': hint,
            'info-show': reservePlaceForInfo || hint || error || warning_message,
          })}
        >
          {error || hint || warning_message}
        </div>
      </label>
    );
  },
);

InputField.defaultProps = {
  title: 'Email',
  text: 'Button Text',
  disabled: false,
  name: 'email',
};

export default InputField;
