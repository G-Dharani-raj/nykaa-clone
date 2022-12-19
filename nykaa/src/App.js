import "./App.css";
import AllRoutes from "./Components/AllRoutes";
import LargeWithLogoCentered from "./Components/Footer";
import Navbar from "./Components/Navbar";

function App() {
	return (
		<div>
			<Navbar />
			<AllRoutes />
			<LargeWithLogoCentered />
		</div>
	);
}

export default App;
