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
        <a>BETA</a>
      </div>
      <div
        className={
          sidebar ? styles.intro_container : styles.intro_containeractive
        }
      >
        <h1>
          All Music Royalties <br></br> in one Ecosystem.
        </h1>
        <p>
          There are multiple music royalties and you might be missing some of
          them.<br></br> We make sure you don’t.
        </p>
        <button className={styles.intro_button} onClick={showSidebar}>
          {" "}
          Waitlist is now open{" "}
        </button>
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
      <div
        className={
          sidebar ? styles.form_containeractive : styles.form_container
        }
      >
        <div className={sidebar ? styles.formactive : styles.form}>
          <p>Join the Waitlist by filling the following information:</p>
          <div className={styles.input_text_section}>
            <div className={styles.input_text}>
              <label>
                What’s your name?<span>*</span>
              </label>
              <input type="text" placeholder="Write your real or artist name" />
            </div>
            <div className={styles.input_text}>
              <label>
                What’s your e-mail?<span>*</span>
              </label>
              <input type="text" placeholder="Write your e-mail address" />
            </div>
            <div className={styles.input_text}>
              <label>
                Link<span>*</span>
              </label>
              <input
                type="text"
                placeholder="Paste a Link (Spotify, Instagram or Website)"
              />
            </div>
            <div className={styles.input_checkboxgroup}>
              <p>What type of Royalties do you collect?</p>
              <div className={styles.input_checkboxdivision}>
                <div className={styles.input_checkbox_minigroup}>
                  <div className={styles.input_checkbox}>
                    <input type="checkbox" />
                    <label>Master Rights</label>
                  </div>
                  <div className={styles.input_checkbox}>
                    <input type="checkbox" />
                    <label>Mechanical Rights</label>
                  </div>
                </div>
                <div className={styles.input_checkbox_minigroup}>
                  <div className={styles.input_checkbox}>
                    <input type="checkbox" />
                    <label>Performance Rights</label>
                  </div>
                  <div className={styles.input_checkbox}>
                    <input type="checkbox" />
                    <label>Neighboring Rights</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <button onClick={showSidebar} className={styles.submit_button}>
                Submit
              </button>
            </div>
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
