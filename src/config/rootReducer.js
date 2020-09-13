import { combineReducers } from "@reduxjs/toolkit";

import { reducer as auth } from "../modules/auth/auth.redux";

export default combineReducers({
  auth,
});
