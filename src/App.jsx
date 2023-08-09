import './App.css'
import {Loading} from "./layouts/Loading/Loading.jsx";
import {MyTerminal} from "./components/MyTerminal/MyTerminal.jsx";

const App = () => {
    return (
        <>
            <Loading />
            <MyTerminal />
        </>
    );
};

export default App
