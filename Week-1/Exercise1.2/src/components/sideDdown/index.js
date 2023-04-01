/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import { bool, string } from "prop-types";
import style from "./style.module.scss";

const SDropDown = ({ children, lIcon, tlabel, open, sopen }) => {
  return (
    <div className={clsx(style.wrapper)}>
      <details className={clsx(style.main, sopen && style.dMargin)} open={open}>
        <summary
          className={clsx(
            sopen && style.bgWrapS,
            open && sopen && style.bgWrap
          )}
        >
          {/* <i className={`csmart-dx-${lIcon}`}></i> */}
          <img src={lIcon} alt="side-icon"></img>
          {!sopen && tlabel}
          {!sopen && <i className="csmart-dx-chevron-up"></i>}
        </summary>

        {!sopen && <div>{children}</div>}
      </details>
      {sopen && <div className={style.menu}>{children}</div>}
    </div>
  );
};

SDropDown.propTypes = {
  lIcon: string,
  tlabel: string,
  open: bool,
  sopen: bool,
};

export { SDropDown };
