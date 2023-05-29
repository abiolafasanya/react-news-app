import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, Container } from "@mui/material";

const  Footer = () => {
  const styles = {
    footer: "",
    container: "",
    heading: "font-semibold text-xl text-red-500",
    description: "text-sm text-gray-500",
    socialIcons: "flex gap-4 my-5",
    socialIcon: "hover:bg-red-50 border rounded-full p-2",
    columnContainer: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14",
    columnHeading: "text-xl font-semibold",
    columnMenu: "text-sm text-gray-500 w-[120px]",
    borderSeparator: "text-center p-3 border-t",
  };

  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <div className="flex sm:flex-col md:flex-row flex-wrap gap-14">
          <div>
            <Box className="w-[350px]">
              <h2 className={styles.heading}>HeadlineHive</h2>
              <p className={styles.description}>
                Buzzing Beyond Boundaries: Unveiling the Power of HeadlineHive
              </p>
            </Box>
            <Box className={styles.socialIcons}>
              <Facebook
                color="error"
                fontSize="large"
                radius={5}
                className={styles.socialIcon}
              />
              <LinkedIn
                color="error"
                fontSize="large"
                radius={5}
                className={styles.socialIcon}
              />
              <Twitter
                color="error"
                fontSize="large"
                radius={5}
                className={styles.socialIcon}
              />
              <Instagram
                color="error"
                fontSize="large"
                radius={5}
                className={styles.socialIcon}
              />
            </Box>
          </div>
          <div className={styles.columnContainer}>
            <Box>
              <h3 className={styles.columnHeading}>Bussiness</h3>
              <menu className={styles.columnMenu}>
                <li>Startup</li>
                <li>Employee</li>
                <li>Success</li>
                <li>Vidoes</li>
                <li>Market</li>
              </menu>
            </Box>
            <Box>
              <h3 className={styles.columnHeading}>Travel</h3>
              <menu className={styles.columnMenu}>
                <li>Startup</li>
                <li>Employee</li>
                <li>Success</li>
                <li>Vidoes</li>
                <li>Market</li>
              </menu>
            </Box>
            <Box>
              <h3 className={styles.columnHeading}>Technology</h3>
              <menu className={styles.columnMenu}>
                <li>Startup</li>
                <li>Employee</li>
                <li>Success</li>
                <li>Vidoes</li>
                <li>Market</li>
              </menu>
            </Box>
            <Box>
              <h3 className={styles.columnHeading}>Sport</h3>
              <menu className={styles.columnMenu}>
                <li>Startup</li>
                <li>Employee</li>
                <li>Success</li>
                <li>Vidoes</li>
                <li>Market</li>
              </menu>
            </Box>
          </div>
        </div>
      </Container>
      <p className={styles.borderSeparator}>
        Copyright &copy; {new Date(Date.now()).getFullYear()} HeadlineHive
      </p>
    </footer>
  );
}

export default Footer;
