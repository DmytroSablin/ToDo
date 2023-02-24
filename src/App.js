import { useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header"

function App() {
  let [navBarStatus, setNavBarStatus] = useState(true)
  let [collections, setCollections] = useState(["School", "Personal"])
  let [modalStatus, setModalStatus] = useState(false)

  return (
    <div className="grid grid-rows-header">
      <Header setnavstatus={setNavBarStatus} navstatus={navBarStatus} />
      <Body
        navstatus={navBarStatus}
        collections={collections}
        modalStatus={modalStatus}
        setModalStatus={setModalStatus}
        setCollections={setCollections} />

    </div>
  );
}

export default App;
