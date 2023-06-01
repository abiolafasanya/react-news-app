import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import MobileMenuButton from "../common/MobileMenuButton";
import MobileMenu from "../common/MobileMenu";
import { navbarMenus } from "../../data/links";
import { useSelector } from "react-redux";
import ProfileMenu from "../common/ProfileMenu";
import SearchForm from "../common/SearchForm";
import { authState } from "../../types";
import { Login } from "@mui/icons-material";
import { Button } from "@mui/material";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const auth = useSelector((state: authState) => state.auth);
  const navigate = useNavigate()

  const toLogin = () => navigate('/login');

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen((val) => !val);
  };

  const styles = {
    navbar:
      "flex capitalize justify-between items-center bg-white border-b sm:px-5 md:px-7 lg:px-28 h-20 w-full",
    title: "text-2xl font-semibold text-red-500",
    menu: "sm:hidden md:flex space-x-5 items-center",
    menu2: "flex space-x-5 items-center",
    searchInput: "py-3 px-5 outline-none rounded-md bg-red-50",
    mobileMenu: "md:hidden",
    button: "py-3 px-5 bg-red-500 rounded-md text-white",
  };

  return (
    <nav className={styles.navbar}>
      <div className="flex gap-x-10 items-center">
        <Link to="/" className={styles.title}>HeadlineHive</Link>
        <menu className={styles.menu}>
          {navbarMenus.map((menu) => (
            <Link key={menu.name} to={menu.url}>
              {menu.name}
            </Link>
          ))}
        </menu>
      </div>
      <SearchForm />
      <div>
        <menu className={styles.menu2}>
      {!auth.isAuthenticated && 
      <Button onClick={toLogin} color="error" endIcon={<Login />}>
        Login 
      </Button>
      }

          {auth.isAuthenticated && (
            <div className="sm:hidden md:flex relative">
              <Avatar
                alt={auth.user?.name}
                src="/static/images/avatar/1.jpg"
                onClick={() => setIsProfile((pro) => !pro)}
              />
              {isProfile && (
                <ProfileMenu />
              )}
            </div>
          )}
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
