import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { SlArrowRightCircle } from "react-icons/sl";
import { logo, logo_google } from "../../assets/images";

const Home = ({ user, logout }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    country: "",
    artistName: "",
    birthDate: "",
    email: "",
    musicRole: "",
    labelName: "",
    ISRCAgency: "",
    relevantLink: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [file, setFile] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  const handleFileChange = (e) => {
    let file = e.target.files.item(0);
    var fr = new FileReader();
    if (file) {
      fr.onloadend = (e) => {
        setImageSrc(e.target.result);
        setFile(file); // set the file state
      };
      fr.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (file) {
      data.append("profileImage", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/forms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error:", error);
    }
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
                    className={styles.inputfile}
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
