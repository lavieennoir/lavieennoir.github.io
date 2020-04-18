import React, { memo } from "react";
import Routing from "./routing";
import LoadingController from "components/LoadingController";
import ImageLoader from "components/ImageLoader";
import { AppContextProvider } from "reducers/AppReducer";

function App() {
  return (
    <AppContextProvider>
      <ImageLoader />
      <LoadingController />
      <Routing />
    </AppContextProvider>
  );
}
export default memo(App);
