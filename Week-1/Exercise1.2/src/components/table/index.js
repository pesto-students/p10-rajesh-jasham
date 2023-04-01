/* eslint-disable no-unused-vars */
import clsx from "clsx";
import { array, bool, func, number, string } from "prop-types";
import React, { useEffect, useRef, useState, createRef } from "react";
// import { Button } from '../button';
import styles from "./table.module.scss";

function useWindowDimensions() {
  const [width, setWidth] = React.useState(null);
  const [height, setHeight] = React.useState(null);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateWidthAndHeight);
    updateWidthAndHeight();
    return () => window.removeEventListener("resize", updateWidthAndHeight);
  });

  return {
    width,
    height,
  };
}

const minuData =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAU0lEQVR4nO3TwQmAUAwFwfTfdLx7VtwvM5ACHktmAIDX7e2OtYbEKFKjSI0iNYrUKFKTK7If32MMGUUm/VvHWkNiFKlRpEaRGkVqFKn5TREAmBNcXKbvEbAKdz4AAAAASUVORK5CYII=";
const plusData =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nO3OwQkAAAjEsNt/aZ1CUUig/yYAwFE11J8BACBbGkBRK9W9OAczAAAAAElFTkSuQmCC";
const Table = ({
  headData,
  tData,
  onEditAction,
  onViewAction,
  onClickPagginationButtonAction,
  view,
  action,
  edit,
  deleteRecord,
  onDeleteAction,
  checkbox,
  borderRadius,
  search,
  rowPerPage,
  shimmer,
}) => {
  const [tableData, setTableData] = useState(tData);
  const [tableRunnigData, setTableRunningData] = useState([]);
  const [currentSortedIndex, setCurrentSortedIndex] = useState(null);
  const [showRows, setShowRows] = useState(5);
  const [rowInitial, setRowIniial] = useState(0);
  const [tableLen, setTableLen] = useState(null);
  const [tablePages, setTablePages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [minColWidth, setMinColWidth] = useState(10);
  const [showCols, setShowCols] = useState(1);
  const [leftHeader, setLeftHeader] = useState([]);
  const [showExpand, setShowExpand] = useState(false);
  const divRef = useRef();
  const { width } = useWindowDimensions();
  const [check, setCheck] = useState(false);
  const [filterList, setFilterList] = useState([]);

  const sort = (index) => {
    if (currentSortedIndex !== index) {
      setCurrentSortedIndex(index);
      let tempVal = [...tableRunnigData];
      let labVal = index + 1;
      tempVal.sort((a, b) => {
        if (a.tdata[`label${labVal}`] < b.tdata[`label${labVal}`]) {
          return -1;
        }
        if (a.tdata[`label${labVal}`] > b.tdata[`label${labVal}`]) {
          return 1;
        }
        return 0;
      });
      setTableRunningData([...tempVal]);
    } else {
      setCurrentSortedIndex(null);
      setTableRunningData(tableData);
    }
  };

  const onClickPagginationButton = (val) => {
    setCurrentPage(val);
    setRowIniial(val);
    onClickPagginationButtonAction(val + 1);
  };

  useEffect(() => {
    setTableData([...tData]);
    setTableRunningData([...tData]);
    setTableLen(tData.length);
    let rLen = tData.length / showRows;
    if (!Number.isInteger(rLen)) {
      rLen = Math.round(rLen) + 1;
    }
    let tempArr = [];
    for (let i = 1; i < rLen; i++) {
      tempArr.push(i - 1);
    }
    setTablePages(tempArr);
  }, [tData]);

  useEffect(() => {
    setShowRows(rowPerPage);
    let rLen = tData.length / rowPerPage;

    if (!Number.isInteger(rLen)) {
      if (rLen < 1) {
        rLen = 2;
      } else {
        rLen = Math.abs(rLen) + 1;
      }
    }
    setCurrentPage(0);
    setRowIniial(0);
    let tempArr = [];
    for (let i = 1; i < rLen; i++) {
      tempArr.push(i - 1);
    }
    setTablePages(tempArr);
  }, [rowPerPage, tData]);
  useEffect(() => {
    onResize();
  }, [width]);

  const onResize = () => {
    let currWidth = divRef.current.offsetWidth;
    let pxToRem = currWidth / 16;
    let noOfCols = pxToRem / minColWidth;
    let lCols = Math.round(noOfCols) - 2;
    if (lCols > 0) {
      let splicedArray = headData.slice(lCols);
      setLeftHeader(splicedArray);
      setShowCols(lCols);
      let tempTData = tableRunnigData[0];
      if (tempTData) {
        setShowExpand(
          Object.keys(tempTData.tdata).slice(lCols).length > 0 ? true : false
        );
      }
    }
  };
  const onExtend = (index) => {
    let tempData = [...tableRunnigData];
    tempData[index].extend = !tempData[index].extend;
    setTableRunningData([...tempData]);
  };

  const onEdit = (index) => {
    onEditAction(index);
  };

  const onDelete = (index) => {
    onDeleteAction(index);
  };

  const onMultiSelect = () => {
    setCheck(!check);
  };

  const singleCheckBox = (e) => {};

  const startFilter = (fList) => {
    let filteredData = tableData.filter((data) => {
      let flag = false;
      Object.keys(data.tdata).map((rdata, index) => {
        if (fList[index] !== "")
          if (flag) {
            if (data.tdata[rdata].includes(fList[index])) {
              flag = true || flag;
            }
          } else if (data.tdata[rdata].includes(fList[index])) {
            flag = true;
          }
      });
      return flag;
    });
    let res = fList.filter((data) => data !== "");
    if (res.length < 1) {
      setTableRunningData([...tableData]);
    } else {
      setTableRunningData([...filteredData]);
    }
  };

  const onFilter = (e, index) => {
    let temp = [...filterList];
    temp[index] = e.target.value;
    setFilterList([...temp]);
    startFilter([...temp]);
  };

  const onClickPrev = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => {
        let res = prev - 1;
        setRowIniial(res);
        return res;
      });
    }
  };

  const onClickNext = () => {
    if (currentPage < tablePages.length - 1) {
      setCurrentPage((prev) => {
        let res = prev + 1;
        setRowIniial(res);
        return res;
      });
    }
  };

  return (
    <div ref={divRef} className={styles.mainWrapper}>
      <table className={borderRadius === "none" ? styles.main1 : styles.main}>
        <thead>
          <tr>
            {headData.map((hdata, index) => {
              if (showCols > index) {
                return (
                  <th
                    key={index.toString()}
                    style={{
                      minWidth: `${minColWidth}rem`,
                      textAlign: "left",
                    }}
                    className={
                      shimmer === true
                        ? styles.shim
                        : index === 0 && checkbox === "true"
                        ? styles.rowData
                        : ""
                    }
                  >
                    <div>
                      {hdata.label}
                      {shimmer === true ? (
                        ""
                      ) : (
                        <i
                          className={clsx(
                            "csmart-dx-sort",
                            currentSortedIndex === index && styles.iconColor
                          )}
                          onClick={() => sort(index)}
                        ></i>
                      )}
                    </div>
                    {search && (
                      <div className={clsx(styles.search)}>
                        <input
                          onChange={(e) => onFilter(e, index)}
                          value={filterList[index]}
                        />
                      </div>
                    )}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {tableRunnigData
            .slice(rowInitial * showRows, rowInitial * showRows + showRows)
            .map((tdata, index) => {
              return (
                <>
                  <tr key={index.toString()}>
                    {Object.keys(tdata.tdata).map((dt, ind) => {
                      if (
                        showCols > ind
                        //   &&  tdata.tdata[dt]
                      )
                        return (
                          <td
                            key={ind.toString()}
                            style={{
                              minWidth: `${minColWidth}rem`,
                            }}
                            className={
                              shimmer === true
                                ? styles.shim
                                : ind === 0 && checkbox === "true"
                                ? styles.rowData
                                : ""
                            }
                          >
                            {console.log("Test deta", ind === 0)}
                            {shimmer === false && showExpand && ind === 0 && (
                              <img
                                style={{ width: "1.5rem" }}
                                onClick={() => onExtend(tdata.index)}
                                src={
                                  tdata.extend === false ? minuData : plusData
                                }
                              />
                            )}
                            {tdata.tdata[dt]}
                          </td>
                        );
                    })}

                    <td
                      className={shimmer === true ? styles.shim : ""}
                      key={`${index.toString()}222`}
                      style={{
                        minWidth: `${minColWidth}rem`,
                        cursor: "pointer",
                        textAlign: "center",
                      }}
                    >
                      <button>CATTY CLOUD SYNC</button>
                    </td>
                  </tr>
                  {tdata.extend &&
                    Object.keys(tdata.tdata).slice(showCols).length > 0 &&
                    Object.keys(tdata.tdata)
                      .slice(showCols)
                      .map(
                        (rData, rInd) =>
                          rData !== "extend" && (
                            <tr key={`${rInd.toString()}345`}>
                              <td
                                style={{
                                  paddingLeft: "3.8rem",
                                }}
                              >
                                {leftHeader[rInd]?.label}
                              </td>
                              <td>{tdata.tdata[rData]}</td>
                            </tr>
                          )
                      )}
                </>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  headData: array,
  tData: array,
  onEditAction: func,
  onViewAction: func,
  onDeleteAction: func,
  onClickPagginationButtonAction: func,
  view: bool,
  action: bool,
  deleteRecord: bool,
  edit: bool,
  checkbox: bool,
  borderRadius: string,
  search: bool,
  rowPerPage: number,
  shimmer: bool,
};
export { Table };
