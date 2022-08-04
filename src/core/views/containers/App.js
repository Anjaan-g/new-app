import EmailSent from 'modules/components/Authentication/EmailSent';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const App = () => {
  useEffect(() => {
    toast.info('Check me');
  }, []);

  return (
    <div className='app-body'>
      <p>This is root App</p>
      <EmailSent />
    </div>
  );
};

export default App;
