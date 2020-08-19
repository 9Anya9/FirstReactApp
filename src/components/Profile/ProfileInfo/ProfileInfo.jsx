import React from "react";
import s from "./ProfileInfo.module.css";
import MyPosts from "../MyPosts/MyPosts";
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }
  return (
    <div>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src = {props.profile.photos.large}/>
      </div>
    </div>
  );
};

export default ProfileInfo;
