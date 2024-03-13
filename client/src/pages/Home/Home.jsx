import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Avatar } from "@mui/material";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link } from "react-router-dom";
import { logo, logo_google } from "../../assets/images";

const Home = (userDetails) => {
  const user = userDetails.user;

  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  return (
    <>
      <div className={styles.nav_container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.nav_avatar}>
          <a href="http://localhost:3000" onClick={logout}>
            About
          </a>
          <img className={styles.avatar} src={user.picture} alt="Avatar" />
        </div>
      </div>
      <div className={styles.home_container}>
        <h1>Registration</h1>
        <div className={styles.home_form_container}>
          <h1>Personal Details</h1>
          <hr className={styles.hr1}></hr>
          <div className={styles.home_personal}>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>Full name</h5>
                <input
                  type="name"
                  placeholder="Enter your name"
                  name="name"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
              <div className={styles.home_personal_details_box}>
                <h5>Country</h5>
                <input
                  type="country"
                  placeholder="Where you’re based"
                  name="country"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>Artist Name</h5>
                <input
                  type="name"
                  placeholder="Enter your artist name"
                  name="name"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
              <div className={styles.home_personal_details_box}>
                <h5>Birth Date</h5>
                <input
                  type="birthDate"
                  placeholder="dd/mm/aaaa"
                  name="birthDate"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>Email</h5>
                <input
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
              <div className={styles.home_personal_details_box}>
                <h5>Music Role</h5>
                <input
                  type="musicRole"
                  placeholder="Label"
                  name="musicRole"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
          <h1>
            Music Details <hr className={styles.hr2}></hr>
          </h1>
          <div className={styles.home_personal}>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>Label Name</h5>
                <input
                  type="labelName"
                  placeholder="Enter your label name"
                  name="labelName"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
              <div className={styles.home_personal_details_box}>
                <h5>Upload Image</h5>
                <input
                  type="name"
                  placeholder="Profile Image (PNG/JPG)"
                  name="name"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>ISRC Agency</h5>
                <input
                  type="ISRCAgency"
                  placeholder="ASCAP (USA)"
                  name="ISRCAgency"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
            <div className={styles.home_personal_details}>
              <div className={styles.home_personal_details_box}>
                <h5>Relevant Link</h5>
                <input
                  type="name"
                  placeholder="Spotify, Instagram, Website"
                  name="name"
                  //onChange={handleChange}
                  //value={data.email}
                  className={styles.input}
                />
              </div>
            </div>
          </div>
          <div className={styles.home_personal_details2}>
            <button type="submit" className={styles.submit_btn}>
              SUBMIT <SlArrowRightCircle />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
