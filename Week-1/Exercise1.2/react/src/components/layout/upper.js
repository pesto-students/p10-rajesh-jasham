import styles from "./layout.module.scss";
const UpperView = () => {
  return (
    <div className={styles.upperView}>
      <img
        src="https://vif1g.csb.app/src/assets/cattyboard.jpg"
        alt="CattyBoard Top 100 Single Charts"
      />
      <div>
        <div>
          <h1>CattyBoard Top 100 Sungle Charts(11.06.36)</h1>
          <h6>Unknown Artist</h6>
          <h6>2016. Charts. 100 songs</h6>
        </div>
        <div>
          <div>
            <img
              style={{ color: "white", width: "1.5rem", height: "1.5rem" }}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACw0lEQVR4nO2aPWtUQRSGHxXdjaIkEBMLxWCjP0D8BZIQUAxW+UALK5tgSGNrG2OhKIitCGJho66aXiSKtmbzgYWJiJ9FBDWuemTgCGG5e/funJm9F8kLLyzs3jPz7pw5c86ZCxv4f9EFDAHTQAWoAl+ANaX7PKffud+cADopCErAGDAD/AKkRbpnHgGjaqvt6AAmgbcek2/EFWACKLdLxCCwFFBAPReBgZgC3NJfiSignjd15YOiF3jRRhGifA70hBLRp8stOXFB52DCbg2jkjOXgD2+Iso5uZOkuJlXiL5egMlLHa/6hFgpKPuzinDLN1+ACUsDLmY9NCc9jH8DRoA3bRJzLstqrHgKQQ+w88BqZCHLzTb+mKfh73V29gK3gD8RxYykCZnxNPqjgb3DwJNIQipp9YRPKi5abzTCJuCUp8tKCmvArqQBhwxGf9Ic23X/fA0o5ljSQJeM/05W7AfuBNo/F5MGqBgMOpdsFUeAp0Yh95IMLxgM/sYPm4EzwDvPcatJRj8bhDg3sWAHcEHDeCvjfkgytmZc5hA4ANy1hv0iCDmkXRWTEItriZ4XvujSfkAthGtZM94tHgLcM2eBj55jzoUOvz5CXPh9FiP8ThuNbs0oYB9wO9CBOBU6RckiZJvWEauxU5ROQ9IoTeqDk8DrgAJE87vEpNHhcWAhB4GHgQWI8kHa8o8aDHcECKfSAodjlLr/hLjc6TTwPqIA0VLX7blUTBjaNC8jCxDlOBlQzrnXKxky3swdx4ECTFgS6M6eo7SIawWYuNTxMh4oaeNYCsLZLBu8EboLdK3QixF9xjLYynltWARBT05uNquXTVEuQ2O2QWUdb8S+e++P7GpVnxDri5Km5MsBBbgrifG83oAoaVe84pkg1jSLHbaE1tBwtcFxbWPe13r607qXatznV1qeTmlRtDP4LDZAMfAXFbij5naP28kAAAAASUVORK5CYII="
            ></img>{" "}
            Play ALL
          </div>
          <div>
            <img
              style={{ color: "white", width: "1.5rem", height: "1.5rem" }}
              src="https://img.icons8.com/ios-glyphs/30/null/plus-math.png"
            />{" "}
            Add to
          </div>
          <div>
            <img
              style={{ color: "white", width: "1.5rem", height: "1.5rem" }}
              src="https://img.icons8.com/ios-filled/50/null/ellipsis.png"
            />
            More
          </div>
        </div>
      </div>
    </div>
  );
};
export { UpperView };
