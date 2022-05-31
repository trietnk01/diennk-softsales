import { Spin } from "antd";
import { useAppSelector } from "hooks";
import React from "react";

import { RootState } from "redux/store";

function LoadingSpinner() {
  const isShow: boolean | undefined = useAppSelector((state: RootState) => state.loadingReducer.isShow);
  return (
    <React.Fragment>
      {isShow && (
        <div style={{ display: "flex", position: "fixed", left: "0", top: "0", backgroundColor: "#000000db", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
          <Spin />
        </div>
      )}
    </React.Fragment>
  );
}

export default LoadingSpinner;
