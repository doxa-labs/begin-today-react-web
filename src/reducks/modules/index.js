import { persistCombineReducers } from "redux-persist";
import storage from "redux-persist/es/storage"; // default: localStorage if web, AsyncStorage if react-native

import rehydrate from "./rehydrate";
import auth from "./auth";

const config = {
  key: "root",
  storage
};

export default persistCombineReducers(config, {
  rehydrate,
  auth,
});
