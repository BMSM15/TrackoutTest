import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SlArrowRightCircle } from "react-icons/sl";
import { logo, logo_google } from "../../assets/images";

const Introduction = ({ user, logout, sidebar, setSidebar }) => {
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className={styles.nav_container}>
        <span>
          PRISMA <p className={styles.p1}>PROTOCOL</p>{" "}
        </span>
        <p>BETA</p>
      </div>
      <div className={styles.intro_container}>
        <h1>
          All Music Royalties <br></br> in one Ecosystem.
        </h1>
        <p>
          There are multiple music royalties and you might be missing some of
          them.<br></br> We make sure you don’t.
        </p>
        <button className={styles.intro_button}> Waitlist is now open </button>
        <div className={styles.intro_cards}>
          <div className={styles.card}>
            <p>For Independent Artists</p>
            <span>Who own their Masters and Copyright</span>
          </div>
          <div className={styles.card}>
            <p>For Independent Songwriters</p>
            <span>Who own their Copyright</span>
          </div>
        </div>
      </div>
      <div className={styles.intro_footer}>
        Copyright © 2024 Prisma Music. By ALCI
      </div>
    </>
  );
};

export default Introduction;
