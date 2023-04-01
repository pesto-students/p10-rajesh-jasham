import clsx from "clsx";
import { menudata } from "./sidebardata";
import styles from "./layout.module.scss";
const WebView = ({ sideBarStatus, onClickMenu }) => {
  return menudata.map((data, index) => (
    <div
      key={index.toString()}
      onClick={() => onClickMenu(index)}
      className={clsx(
        !sideBarStatus && styles.sidebarWidth,
        index === 0 && sideBarStatus && styles.onOpenSidebarWidth
      )}
    >
      <img src={data.icon} alt={data.mainlabel} />
      {sideBarStatus && <span>{data.mainlabel}</span>}
    </div>
  ));
};
export { WebView };
