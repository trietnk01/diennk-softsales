import "assets/admin/admin-main.scss";
import LoadingSpinner from "components/LoadingSpinner";
import Notify from "components/Notify";
import React, { Fragment } from "react";
import RoutesMain from "RoutesMain";

function App() {
  return (
    <Fragment>
      <RoutesMain></RoutesMain>
      <LoadingSpinner />
      <Notify />
    </Fragment>
  );
}

export default App;
