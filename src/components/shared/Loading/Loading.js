import React from "react";
import { LoadingBg, LoadingWrapper } from "./Loading.styles";

const Loading = () => {
  return (
    <LoadingBg>
      <LoadingWrapper>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </LoadingWrapper>
    </LoadingBg>
  );
};

export default Loading;
