import firebase from "../config/firebase-config";
const socialMediaAuth = async (provider) => {
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    return res.user;
  } catch (er) {
    return er;
  }
};

export default socialMediaAuth;
