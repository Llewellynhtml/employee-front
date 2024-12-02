import React, { useState } from "react";
import Homepage from "./Homepage";
import Signup from "./Signup";
import Signin from "./Signin";
import ForgotPassword from "./ForgotPassword";
import "../App.css";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeComponent, setActiveComponent] = useState("signup");

  const renderComponent = () => {
    if (isAuthenticated) {
      return <Homepage />;
    }

    switch (activeComponent) {
      case "signup":
        return (
          <Signup
            onNavigate={setActiveComponent}
            onAuthenticate={() => setIsAuthenticated(true)}
          />
        );
      case "signin":
        return (
          <Signin
            onNavigate={setActiveComponent}
            onAuthenticate={() => setIsAuthenticated(true)}
          />
        );
      case "forgot-password":
        return <ForgotPassword onNavigate={setActiveComponent} />;
      default:
        return <Signup onNavigate={setActiveComponent} />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Employee Data</h1>
      </header>
      <nav>
        {isAuthenticated && (
          <button onClick={() => setActiveComponent("homepage")}>Home</button>
        )}
      </nav>
      {renderComponent()}
    </div>
  );
};

export default App;
