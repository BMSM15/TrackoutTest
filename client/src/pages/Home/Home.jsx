import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SlArrowRightCircle } from "react-icons/sl";
import { logo, logo_google } from "../../assets/images";

const Home = (userDetails) => {
  const user = userDetails.user;

  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    artistName: "",
    birthDate: "",
    email: "",
    musicRole: "",
    labelName: "",
    profileImage: "",
    ISRCAgency: "",
    relevantLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const logout = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/logout`, "_self");
  };

  return (
    <>
      <div className={styles.nav_container}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <div className={styles.nav_avatar}>
          <a onClick={logout}>About</a>
          <img className={styles.avatar} src={user.picture} alt="Avatar" />
        </div>
      </div>
      <div className={styles.home_container}>
        <h1>Registration</h1>
        <div className={styles.home_form_container}>
          <form onSubmit={handleSubmit}>
            <h1>
              Personal Details <hr className={styles.hr}></hr>
            </h1>
            <div className={styles.home_personal}>
              <div className={styles.home_personal_details}>
                <div className={styles.home_personal_details_box}>
                  <h5>Full name</h5>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullName"
                    className={styles.input}
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.home_personal_details_box}>
                  <h5>Country</h5>
                  <input
                    type="text"
                    placeholder="Where you’re based"
                    name="country"
                    className={styles.input}
                    value={formData.country}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.home_personal_details}>
                <div className={styles.home_personal_details_box}>
                  <h5>Artist Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your artist name"
                    name="artistName"
                    className={styles.input}
                    value={formData.artistName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.home_personal_details_box}>
                  <h5>Birth Date</h5>
                  <input
                    type="date"
                    placeholder="dd/mm/aaaa"
                    name="birthDate"
                    className={styles.inputdate}
                    value={formData.birthDate}
                    onChange={handleChange}
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
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.home_personal_details_box}>
                  <h5>Music Role</h5>
                  <input
                    type="text"
                    placeholder="Label"
                    name="musicRole"
                    className={styles.input}
                    value={formData.musicRole}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <h1>
              Music Details <hr className={styles.hr}></hr>
            </h1>
            <div className={styles.home_personal}>
              <div className={styles.home_personal_details}>
                <div className={styles.home_personal_details_box}>
                  <h5>Label Name</h5>
                  <input
                    type="text"
                    placeholder="Enter your label name"
                    name="labelName"
                    className={styles.input}
                    value={formData.labelName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.home_personal_details_box}>
                  <h5>Upload Image</h5>
                  <input
                    type="file"
                    name="profileImage"
                    placeholder="Upload Image"
                    id="img"
                    accept="image/*"
                    className={styles.inputfile}
                    value={formData.profileImage}
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className={styles.home_personal_details}>
                <div className={styles.home_personal_details_box}>
                  <h5>ISRC Agency</h5>
                  <input
                    type="text"
                    placeholder="ASCAP (USA)"
                    name="ISRCAgency"
                    className={styles.input}
                    value={formData.ISRCAgency}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.home_personal_details}>
                <div className={styles.home_personal_details_box}>
                  <h5>Relevant Link</h5>
                  <input
                    type="url"
                    placeholder="Spotify, Instagram, Website"
                    name="relevantLink"
                    className={styles.input}
                    value={formData.relevantLink}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className={styles.home_personal_details2}>
              <button type="submit" className={styles.submit_btn}>
                SUBMIT <SlArrowRightCircle />
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.footer_container}>
        <span>Copyright 2023 - ALCI. All rights reserved.</span>
      </div>
    </>
  );
};

export default Home;
