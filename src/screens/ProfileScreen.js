import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import {auth} from '../firebase';
import Nav from "../Nav";
import PlansScreen from "./PlansScreen";
import "./ProfileScreen.css";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreenBody">
        <h1>Edit Profile</h1>
        <div className="profileScreenInfo">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            alt=""
          />
          <div className="profileScreenDetails">
            <h2>{user.email}</h2>
            <div className="profileScreenPlans">
                <h3>Plans</h3>
                <PlansScreen/>
              <button
                onClick={() => auth.signOut()}
                className="profileScreenSignOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
