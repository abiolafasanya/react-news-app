import UserPreferenceComponent from "../Preference";
import Featured from "./Featured";
import SearchForm from "../SearchForm";

const Hero = () => {
  const styles = {
    wrapper: "flex sm:flex-col md:flex-row",
    group: "sm:flex md:hidden my-5 w-full",
    banner:
      "bg-gray-100 shadow-sm mt-5 rounded-sm h-36 flex justify-center items-center flex-col",
    title: "-tracking-[-.3rem] uppercase text-sm",
    searchInput: "py-3 px-5 outline-none rounded-md bg-red-50 shadow-sm",
    desc: "p-2 text-xl font-semibold lg:w-1/2 text-center",
    button: "py-3 px-5 bg-red-500 rounded-md text-white sm:h-[45px] md:",
    form: "w-full gap-2 flex justify-center items-center"
  };
  return (
    <section className={styles.wrapper}>
      <div>
        {/* <div className={styles.group}>
          <form className={styles.form}>
            <input
              type="text"
              className={styles.searchInput}
              placeholder="Search category, source, author"
            />
            <Button className={styles.button} color="error" variant="contained">
              <Search />
            </Button>
          </form>
        </div> */}
        <SearchForm className={styles.group} />
        <UserPreferenceComponent />
      </div>
      <div>
        <div className={styles.banner}>
          <h5 className={styles.title}>Welcome to HeadlineHive</h5>
          <h3 className={styles.desc}>
            <span>Stay Ahead of the </span>
            <b className="text-red-500">Headlines </b>
            <span>Your Source for Breaking News and In-Depth Analysis</span>
          </h3>
        </div>
        <Featured />
      </div>
    </section>
  );
};

export default Hero;
