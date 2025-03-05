import React from "react";
import "../styles/profile.css";
import profileImage from "../img/profile.jpg";

const Profile = () => {
  return (
    <section className="profile" id="profile">
      <h1>PROFILE</h1>
      <div className="profile-container">
        <img src={profileImage} alt="Profile" />
      <div className="profile-info">
        <h3>
          최도은 <span className="eng-name">CHOI DOEUN</span>
        </h3>
        <span className="role">Web FrontEnd Developer</span>
        <div className="profile-contact">
          <p>📧 choidoeun0102@gmail.com</p>
          <p>📞 010-9457-0058</p>
          {/* <p>✏️ doeun0102.com</p> */}
          <p>🌐 github.com/doeun</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Profile;
