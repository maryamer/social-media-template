import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Rightbar from "./components/Rightbar/Rightbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./home/Home";

function App() {
  return (
    <div className="app flex flex-col-reverse md:flex-row h-screen">
      <Sidebar />
      <Posts />
      <Rightbar />
    </div>
  );
}

export default App;
