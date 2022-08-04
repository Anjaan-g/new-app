import { frontendUrls } from 'core/constants/consts';
import { Routes, Route } from 'react-router-dom';
//Components Import
import RequireAuth from 'routes/RequireAuth';
import WithNavLayout from 'core/layouts/WithNavLayout';
import LoginComponent from 'modules/components/Authentication/Login';
import Login from 'modules/pages/Login.page';
import NotFound from 'modules/pages/NotFound.page';
import Public from 'modules/pages/Public.page';
import Welcome from 'modules/pages/Welcome.page';

const RoutesContainer = () => {
  return (
    <Routes>
        <Route path={frontendUrls.urlHome} element={<WithNavLayout />}>
          {/* Public Routes */}
          <Route index element={<Public />} />
          <Route path={frontendUrls.urlLogin} element={<Login />} />
          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path={frontendUrls.urlWelcome} element={<Welcome />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default RoutesContainer