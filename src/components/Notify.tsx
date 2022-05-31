import { CloseCircleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "hooks";
import React, { useEffect } from "react";
import { RootState } from "redux/store";
import notifySlice from "slices/notifySlice";

function Notify() {
  const dispatch = useAppDispatch();
  function handleClose(): void {
    dispatch(notifySlice.actions.hideNotify());
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(notifySlice.actions.hideNotify());
    }, 30000);
    return () => {
      clearTimeout(timeout);
    };
  });
  let alertHtml: React.ReactNode = null;
  const isShow: boolean | undefined = useAppSelector((state: RootState) => state.notifyReducer.isShow);
  const typeNotify: string | undefined | null = useAppSelector((state: RootState) => state.notifyReducer.type);
  const msgNotify: Array<string> | undefined | null = useAppSelector((state: RootState) => state.notifyReducer.msg);
  let displayNotify: string | null = "";
  if (isShow && Array.isArray(msgNotify) && msgNotify.length > 0) {
    alertHtml = msgNotify.map((item, idx) => {
      return <li key={idx}>{item}</li>;
    });
    displayNotify = "flex";
  }
  let bgColor: string | null = "";
  switch (typeNotify) {
    case "danger":
      bgColor = "#ff5d83";
      break;
    case "warning":
      bgColor = "#f0d916";
      break;
    case "success":
      bgColor = "#55d8ab";
      break;
  }
  return (
    <React.Fragment>
      {isShow && (
        <div style={{ display: displayNotify, backgroundColor: "rgba(0, 0, 0, 0.76)", position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh", justifyContent: "center", alignItems: "center" }}>
          <div style={{ width: "400px", position: "relative", padding: "10px 10px", borderRadius: "3px", backgroundColor: bgColor }}>
            <button type="button" name="btnClose" style={{ position: "absolute", top: "-20px", right: "-18px", background: "transparent", border: "0", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: "25px", cursor: "pointer" }} onClick={handleClose}>
              <CloseCircleOutlined />
            </button>
            <ul style={{ marginBottom: 0, listStyle: "none" }}>{alertHtml}</ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Notify;
