import React from "react";
import styles from "./Layout.module.css";
import Nav from "../Nav/Nav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className={styles.main}>
      <Nav />
      {children}
    </main>
  );
};

export default Layout;
