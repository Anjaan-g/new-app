import React from 'react';
import { SyncOutlined } from '@ant-design/icons';

const Buttons = ({
  text,
  type = 'submit',
  handleBtnClick,
  isLoading = false,
}) => (
  <button
    className="common-btn btn-success"
    type={type}
    onClick={handleBtnClick}
    disabled={isLoading}
  >
    {isLoading ? <SyncOutlined spin /> : text}
  </button>
);

Buttons.defaultProps = {
  text: 'Button Text',
};

export default Buttons;
