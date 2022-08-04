import { useEffect } from 'react';
import { toast } from 'react-toastify';
import RoutesContainer from 'routes/RoutesContainer';

const App = () => {
  useEffect(() => {
    toast.info('Check me');
  }, []);

  return (
    <div className="app-body">
      <RoutesContainer />
    </div>
  );
};

export default App;
