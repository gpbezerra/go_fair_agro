import React from "react";
import { Menu } from "./components/Menu/Menu";
import { Text } from "./components/Text/Text";
import bannerHome from "./images/goFairAgroHeader.jpg"
import { Video } from "./components/Video/Video";
import { Missão } from "./components/Missão/Missão";
import { Rede } from "./components/Rede/Rede";
import { Publicações } from "./components/Publicações/Publicações";

const App = () => {
  return (
    <>
      <Menu/>
      <img src={bannerHome} style={{width: "100%", marginTop: "4%"}}/>
      <Text/>
      <Video/>
      <Missão/>
      <Publicações/>
      <Rede/> 
    </>
  );
}

export default App;
