import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted"
import StudentPortal from "./pages/StudentPortal"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ErrorBoundary } from "./pages/ErrorBoundary";
import Error404 from "./Error404";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className="App">
      <meta name="keywords" contents="online learning, e-learing, students, school" />
      <Helmet>
        <title> Learner </title>
      </Helmet>
      <ErrorBoundary>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/getstarted" element={<GetStarted/>} />
          <Route path="/studentportal" element={<StudentPortal/>} />
          <Route path="*" element={<ErrorBoundary/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
        <Footer />
      </Router>
      </ErrorBoundary>
    </div>
  );
}

export default App;