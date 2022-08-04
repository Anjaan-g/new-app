import NavbarComponent from 'modules/components/Navbar/Navbar';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const WithNavLayout = () => {
  return (
    <Fragment>
      <NavbarComponent />
      <Outlet />
    </Fragment>
  );
};

export default WithNavLayout;
