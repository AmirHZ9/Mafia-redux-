import "./App.css";
import { Route, Routes } from "react-router-dom";
//component
import AddPlayer from "./components/AddPlayer";
import SelectCharacter from "./components/SelectCharacter";
import ShowChracter from "./components/ShowChracter";
//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";
import God from "./components/God";
import Navbar from "./components/Navbar";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/Chracter" element={<SelectCharacter />} />
          <Route path="/ShowChracter" element={<ShowChracter />} />
          <Route path="/GOD" element={<God />} />
          <Route path="/" element={<AddPlayer />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
