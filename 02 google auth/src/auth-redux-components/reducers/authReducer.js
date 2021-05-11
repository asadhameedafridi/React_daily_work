// Can use Object to get more information about user
// If you only chaecking the sign-in and sign_out then use just values
// const INIT_STATE = {
//   isSignedIn: null,
// };

const authReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return true;
    case "SIGN_OUT":
      return false;
    default:
      return null;
  }
};

export default authReducer;
