import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsCotainer from "./MyPosts/Post/MyPostsContainer";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsCotainer/>
      </div>
  );
};

export default Profile;
