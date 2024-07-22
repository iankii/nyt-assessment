import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <div className="min-h-screen flex-wrap content-between bg-light">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
