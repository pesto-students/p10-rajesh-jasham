/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React, { useState } from "react";
import { SideBar } from "../sidebar";
import styles from "./layout.module.scss";
import { menudata } from "./sidebardata";
import { WebView } from "./web";
import { MobileView } from "./mobile";
import { UpperView } from "./upper";
import { Table } from "../table";
import { tableDummyData } from "./tableData";
import { Footer } from "./footer";
const Layout = ({ children }) => {
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [mobileStatus, setMobileStatus] = useState(false);
  // const [mShowSideBar, setMShowSideBar] = useState(false);
  const onClickMenu = (index) => {
    if (index === 0) setSideBarStatus(!sideBarStatus);
  };

  const onClickMenuMobile = () => {
    setMobileStatus(!mobileStatus);
  };
  return (
    <main className={styles.main}>
      <section>
        <header>
          <nav>
            <div>
              <WebView
                sideBarStatus={sideBarStatus}
                onClickMenu={onClickMenu}
              />
            </div>
            <div>
              <div onClick={onClickMenuMobile}>
                <img src={menudata[0].icon} alt={menudata[0].mainlabel} />
              </div>
            </div>
            <div
              className={clsx(
                mobileStatus && styles.mobileViewShow,
                !mobileStatus && styles.mobileViewHide
              )}
            >
              <MobileView mobileStatus={mobileStatus} />
            </div>
          </nav>
        </header>
        <section>
          {/* upper section */}
          <UpperView />
          <Table
            headData={[]}
            tData={tableDummyData}
            rowPerPage={10}
            shimmer={false}
          />
          {/* table */}
        </section>
      </section>
      <Footer />
    </main>
  );
};

export { Layout };
