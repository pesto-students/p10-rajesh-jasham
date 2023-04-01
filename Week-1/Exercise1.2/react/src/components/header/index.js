import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles.main}>
      <img
        src="https://uploads.codesandbox.io/uploads/user/a8233562-b36b-483d-9de9-5a1ac148fb0c/2Eq--cattyboard.jpg"
        width={"10rem"}
        alt="CattyBoard"
      />
      <div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export { Header };
