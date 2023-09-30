import "./App.css";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./home/Home";

function App() {
  return (
    <div className="app flex flex-col-reverse md:flex-row h-screen">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
