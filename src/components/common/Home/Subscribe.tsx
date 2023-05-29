import { Box, Button } from "@mui/material";

const Subscribe = () => {
  const styles = {
    wrapper: "w-  full bg-gray-100 shadow-sm sm:text-center md:text-left my-14 px-7 gap-20 rounded-sm h-36 flex sm:flex-col md:flex-row justify-between items-center",
    firstUpdate: "-tracking-[-.3rem] uppercase text-sm",
    mainHeading: "text-2xl",
    highlightText: "text-red-500",
    emailInput: "border rounded mr-2 py-2 px-5",
    subscribeButton: "text-white bg-red-500",
    size: 'w-1/2'
  };

  return (
    <div className={styles.wrapper}>
      <Box className={styles.size}>
        <h5 className={styles.firstUpdate}>Get First Update</h5>
        <h3 className={styles.mainHeading}>
          <span>Get the news in frontline </span>
          <b className={styles.highlightText}>Subscribe</b>
          <span>to get the latest Update</span>
        </h3>
      </Box>
      <Box className={styles.size}>
        <form className="flex items-center">
          <input
            type="email"
            name="email"
            id="email"
            className={styles.emailInput}
          />
          <Button color="error" className={styles.subscribeButton} variant="contained">
            Subscribe
          </Button>
        </form>
      </Box>
    </div>
  );
};

export default Subscribe;
