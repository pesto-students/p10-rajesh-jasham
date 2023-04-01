import clsx from "clsx";
import { menudata } from "./sidebardata";
import styles from "./layout.module.scss";
const MobileView = ({ mobileStatus, onClickMenuMobile }) => {
  return menudata.map(
    (data, index) =>
      index !== 0 && (
        <div key={index.toString()}>
          <img src={data.icon} alt={data.mainlabel} />
          <span>{data.mainlabel}</span>
        </div>
      )
  );
};
export { MobileView };
