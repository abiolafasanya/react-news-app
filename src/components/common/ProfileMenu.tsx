import { PersonOutlined, Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/slices/authSlice";

const ProfileMenu = () => {
  const [logout] = useLoginMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const handleLogout = async () => {
    dispatch(authActions.logout())
    await logout({}).unwrap();
    navigate('/')
  }
  return (
    <div className="absolute top-16 -left-14 py-3 flex flex-col px-5 gap-y-4 bg-white w-48 border rounded-md">
      <menu className="flex flex-col gap-y-3">
        <Link to="/"> <PersonOutlined /> <span>Profile</span></Link>
        <Link to="/"><Settings /> <span>Preference</span></Link>
      </menu>
      <Button variant="contained" color="error" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default ProfileMenu;
