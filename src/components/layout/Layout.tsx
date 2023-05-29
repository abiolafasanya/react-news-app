import { useSelector } from 'react-redux';
import {Navigate, Outlet, useLocation} from 'react-router-dom'
import { AuthType } from '../../store/slices/authSlice';
import Navbar from './Navbar';
import Footer from './Footer';


export interface authState {
    auth: AuthType;
  }

const Layout = () => {
    const location = useLocation();
  const auth = useSelector((state: authState) => state.auth);
  return (
    <>
      {!auth?.isAuthenticated ? (
        <div className={'w-full min-h-screen max-w-[1440px] container mx-auto bg-primary-50 overflow-hidden'}>
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      ) : (
        <Navigate to={'/login'} state={{ from: location.pathname }} replace />
      )}
    </>
  )
}

export default Layout