// MobileMenuButton.js
import { IconButton } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Action } from "../../types";

const MobileMenuButton = ({ onClick }: Action) => {
  return (
    <IconButton
      edge="end"
      aria-label="menu"
      aria-haspopup="true"
      onClick={onClick}
      color="inherit"
    >
      <Menu />
    </IconButton>
  );
};

export default MobileMenuButton;
