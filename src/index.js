import React from "react";
import ExtStyleSheet from "react-native-extended-stylesheet";
import Home from "./screens/Home";

ExtStyleSheet.build({
  $primaryBlue: "#4F6D7A"
});

export default () => <Home />;
