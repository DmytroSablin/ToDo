import { useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header"

function App() {
  let [navBarStatus, setNavBarStatus] = useState(true)
  return (
    <div className="grid grid-rows-header">
      <Header setnavstatus={setNavBarStatus} navstatus={navBarStatus} />
      <Body navstatus={navBarStatus} />
    </div>
  );
}

export default App;
