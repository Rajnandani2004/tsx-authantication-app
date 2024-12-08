import React from "react";
import SignUpForm from "./component/signupform";
import LoginForm from "./component/loginform";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Authentication App</h1>
      <div>
        <SignUpForm />
        <LoginForm />
      </div>
    </div>
  );
};

export default App;
