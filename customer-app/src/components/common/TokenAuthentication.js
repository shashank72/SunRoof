import setAuthToken from "../../utils/setAuthToken";
import { jwtDecode } from "jwt-decode";

const TokenAuthentication = ({ history }, roles) => {
  if (localStorage.getItem("AuthToken")) {
    let Token = localStorage.getItem("AuthToken").replace("Bearer ", "");
    try {
      let decoded = jwtDecode(Token);
      //// console.log(decoded);

      //store.dispatch(setCurrentUser(decoded));
      // check token expiry
      const currentTime = Date.now() / 1000;

      if (decoded.exp < currentTime) {
        //logout user

        return false;
      } else {
        if (roles.includes(decoded.role)) {
          setAuthToken(Token);
          localStorage.setItem("user-info", JSON.stringify(decoded));
          return true;
        } else return false;
      }
    } catch (error) {
      return false;
    }
  } else {
    history.push("/login");
    return false;
  }
};

export default TokenAuthentication;
