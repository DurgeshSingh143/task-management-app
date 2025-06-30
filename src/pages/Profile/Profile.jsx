import React from "react";
import "./Profile.css";
import Ellipse from "../../assets/Ellipse.png";
import Group from "../../assets/Group.svg";

const Profile = () => {
  return (
    <div className="profile_main_container">
      <div className="profile_container">
        <div className="h2_container">
          <h2>Account Settings</h2>
        </div>

        <div className="img_main_container">
          <div className="img_container">
            <img className="ellipse_img" src={Ellipse} alt="" />
            <img className="group_img" src={Group} alt="" />
          </div>
          <div className="img_details">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile_para">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>

        <div className="dooted_line_1"></div>

        <div className="dooted_line_2"></div>
      </div>
    </div>
  );
};

export default Profile;
