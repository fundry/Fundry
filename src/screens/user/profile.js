import React from "react";
import { Header } from "../../components/";
import useWindowWidth from "../../hook_style";

const Profile = () => {
  const hooks = useWindowWidth();
  return (
    <div>
      <Header />

      <h1> PROFILE SCREEN </h1>
    </div>
  );
};

export default Profile;
