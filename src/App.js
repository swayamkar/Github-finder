import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen">
          <NavBar title="GitFolio" />
          <main className="container mx-auto">
            <Alert/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/:login" element={<User />} />
              <Route path="/notfound" element={<NotFound />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
