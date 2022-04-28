import { combineReducers } from "redux";
import authSlice from "./authSlice";
import { kamakNeApi } from "../services/kamakNeApi";
import searchBarSlice from "./searchBarSlice";
import toasterSlice from "./toasterSlice";
import modelSlice from "./modelSlice";
import themeModeSlice from "./themeModeSlice";
import drawerSlice from "./drawerSlice";
import commentSlice from "./commentSlice";

export const reducer = combineReducers({
  auth: authSlice,
  searchBar: searchBarSlice,
  toaster: toasterSlice,
  model: modelSlice,
  themeMode: themeModeSlice,
  drawer: drawerSlice,
  comments: commentSlice,
  [kamakNeApi.reducerPath]: kamakNeApi.reducer,
});
