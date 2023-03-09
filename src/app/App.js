import React from "react";
import Navbar from "../features/components/Navbar";
import Footer from "../features/components/Footer";
import AppRoutes from "./AppRoutes";

/**
 * Component for the main page structure
 * @component shows the skeleton of the page - navbar, footer and makes all routes available
 */
const App = () => {
  return (
    <div>
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
