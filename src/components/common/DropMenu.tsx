import { Link } from "react-router-dom";
import { DropMenu, authState } from "../../types";
import { Button } from "@mui/material";
import { authActions } from "../../store/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLogoutMutation } from "../../store/slices/userSlice";

const DropMenu = ({ menus }: DropMenu) => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const auth = useSelector((state: authState) => state.auth);

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
  return (
    <div className="px-3 py-5 w-150">
      {menus.map((menu) => (
        <li key={menu.id}>
          <Link to={menu.link}> {menu.name}</Link>
        </li>
      ))}
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default DropMenu;
