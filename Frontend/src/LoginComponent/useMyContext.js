import { useContext } from 'react';
import AuthContext from './AuthContext.jsx';

const useMyContext = () => {
  return useContext(AuthContext);
};

export default useMyContext;