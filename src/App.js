import "./App.css";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import ChatBox from "./ChatBox";
function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}

export default App;
