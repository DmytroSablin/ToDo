import { useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header"
import Collection from "./components/Collection/Collection";
import { Route, Routes } from "react-router-dom";

function App() {
  let [navBarStatus, setNavBarStatus] = useState(true)
  let [collections, setCollections] = useState(["School", "Personal"])

  return (
    <div className="grid grid-rows-header">
      <Header setnavstatus={setNavBarStatus} navstatus={navBarStatus} />
      <Body navstatus={navBarStatus} collections={collections} />
    </div>
  );
}

export default App;
