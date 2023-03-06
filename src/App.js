import { useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header"

function App() {

	let [collections, setCollections] = useState([
		{ collection: "School", tasks: [{ task: "Do homework", status: true }, { task: "Do smthng", status: true }] },
		{ collection: "Personal", tasks: [{ task: "Lol kek", status: true }, { task: "Cheburek", status: true }] }])
	let [activeCollection, setActiveCollection] = useState(window.location.href.substring(window.location.href.lastIndexOf("/") + 1))
	let [collectionModalStatus, setCollectionModalStatus] = useState(false)
	let [taskModalStatus, setTaskModalStatus] = useState(false)
	let [navBarStatus, setNavBarStatus] = useState(true)
	let [modalStatus, setModalStatus] = useState(false)

	return (
		<div className="grid grid-rows-header">
			<Header setnavstatus={setNavBarStatus} navstatus={navBarStatus} />
			<Body
				navstatus={navBarStatus}
				collections={collections}
				collectionModalStatus={collectionModalStatus}
				setCollectionModalStatus={setCollectionModalStatus}
				setCollections={setCollections}
				taskModalStatus={taskModalStatus}
				setTaskModalStatus={setTaskModalStatus}
				modalStatus={modalStatus}
				setModalStatus={setModalStatus}
				setActiveCollection={setActiveCollection}
				activeCollection={activeCollection} />
		</div>
	);
}

export default App;
