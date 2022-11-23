import { Hub, Logger } from "aws-amplify";
const logger = new Logger("My-Logger");

const listener = (data) => {
  switch (data.payload.event) {
    case "signIn":
      logger.info("user signed in");
      console.log(data.payload);
      break;
    case "signUp":
      logger.info("user signed up");
      break;
    case "signOut":
      logger.info("user signed out");
      break;
    case "signIn_failure":
      logger.error("user sign in failed");
      break;
    case "tokenRefresh":
      logger.info("token refresh succeeded");
      break;
    case "tokenRefresh_failure":
      logger.error("token refresh failed");
      break;
    case "autoSignIn":
      logger.info("Auto Sign In after Sign Up succeeded");
      break;
    case "autoSignIn_failure":
      logger.error("Auto Sign In after Sign Up failed");
      break;
    case "configured":
      logger.info("the Auth module is configured");
  }
};

Hub.listen("auth", listener);
