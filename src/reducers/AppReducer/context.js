import React, { useReducer, useContext } from "react";
import { appReducer } from "./reducer";
import * as actions from "./actions";
import bindActionCreators from "../../utils/bindActionCreators";

const AppContext = React.createContext();

export const initialState = {
  isLoading: true,
  images: {},
};

export function AppContextProvider({ children }) {
  const reducer = useReducer(appReducer, initialState);
  return <AppContext.Provider value={reducer}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const [state] = useContext(AppContext);
  return state;
}

export function useAppActions() {
  const [, dispatch] = useContext(AppContext);
  return bindActionCreators(actions, dispatch);
}
