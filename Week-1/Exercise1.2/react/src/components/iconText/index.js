import React from "react";
import styles from "./style.module.scss";
import clsx from "clsx";
import { func, string, bool, number } from "prop-types";

const IconText = ({
  label,
  lIcon,
  sopen,
  parentIndex,
  childIndex,
  onClick,
  selected,
}) => {
  return (
    <div
      className={clsx(
        styles.main,
        selected && styles.bgCColor,
        sopen && styles.jcenter
      )}
      onClick={() => onClick(parentIndex, childIndex)}
    >
      {/* <i className={`csmart-dx-${lIcon}`}></i>{' '} */}
      <img src={lIcon} alt="side-icon"></img>
      {!sopen && <label>{label}</label>}
    </div>
  );
};

IconText.propTypes = {
  label: string,
  lIcon: string,
  sopen: bool,
  parentIndex: number,
  childIndex: number,
  onClick: func,
  selected: bool,
};

export { IconText };
