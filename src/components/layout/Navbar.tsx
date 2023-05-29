import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Badge, Button, MenuItem } from "@mui/material";
import { Notifications, EditNote } from "@mui/icons-material";
import MobileMenuButton from "../common/MobileMenuButton";
import MobileMenu from "../common/MobileMenu";
import { navbarMenus } from "../../data/links";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(val => !val);
  };

  const styles = {
    navbar: "flex capitalize justify-between items-center bg-white border-b sm:px-5 md:px-7 lg:px-28 h-20 w-full",
    title: "text-2xl text-red-500",
    menu: "flex space-x-5 items-center",
    mobileMenu: "md:hidden",
  };

  return (
    <nav className={styles.navbar}>
      <div className="flex gap-x-10 items-center">
        <h2 className={styles.title}>HeadlineHive</h2>
        <menu className={`${styles.menu} sm:hidden`}>
          {navbarMenus.map((menu) => (
            <Link key={menu.id} to={"#"}>
              {menu.name}
            </Link>
          ))}
        </menu>
      </div>
      <div>
        <menu className={styles.menu}>
          <Button endIcon={<EditNote />}>write</Button>
          <MenuItem >
            <Badge badgeContent={2} color="error">
              <Notifications />
            </Badge>
          </MenuItem>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          {/* Mobile Menu */}
          <div className={styles.mobileMenu}>
            <MobileMenuButton onClick={handleMobileMenuOpen} />
            {isMobileMenuOpen && <MobileMenu onClick={handleMobileMenuOpen} />}
          </div>
        </menu>
      </div>
    </nav>
  );
};

export default Navbar;
