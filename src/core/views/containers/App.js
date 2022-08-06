import { fetchUsers } from 'features/check/checkSlice';
import { checkLoggedIn } from 'helpers/helpers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RoutesContainer from 'routes/RoutesContainer';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    toast.info('Check me');
    dispatch(fetchUsers());
    checkLoggedIn();
  }, []);

  return (
    <div className="app-body">
      <RoutesContainer />
    </div>
  );
};

export default App;
