// MobileMenu.js
import { Link } from "react-router-dom";
import { navbarMenus } from "../../data/links";
import { Action, authState } from "../../types";
import { Close } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { Avatar, Button } from "@mui/material";
import { authActions } from "../../store/slices/authSlice";
import { useLogoutMutation } from "../../store/slices/userSlice";

const MobileMenu = ({ onClick }: Action) => {
  const auth = useSelector((state:authState) => state.auth);
  const dispatch  = useDispatch()
  const [logout] = useLogoutMutation()
  const handleLogout = async () => {
    try {
      const res = await logout(auth.token).unwrap();
      if (res) return dispatch(authActions.logout());
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };
  const styles  = {
    menuContainer : 'fixed top-0 left-0 z-50 h-screen w-[300px] bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm'
  }
  return (
    <div className={styles.menuContainer}>
     <div className="flex gap-x-7 items-center border-b py-[3px]">
      <h2 className="text-red-500 my-5 ml-4 font-semibold text-2xl">HeadlineHive</h2>
      {auth.isAuthenticated && (
            <div className="sm:flex md:hidden">
              <Avatar alt={auth.user?.name} src="/static/images/avatar/1.jpg" />
            </div>
          )}
     </div>
      <Close
        color="error"
        className="absolute right-3 top-6 w-full h-full"
        onClick={onClick}
      />
      {navbarMenus.map((menu) => (
        <Link
          key={menu.name}
          to={"/"}
          className="block px-4 py-2"
          onClick={onClick}
        >
          {menu.name}
        </Link>
      ))}
      <div className="px-3 pt-5">
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
