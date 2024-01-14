import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Course from "./page/Course";
import Contact from "./page/Contact";
import Layout from "./components/layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
