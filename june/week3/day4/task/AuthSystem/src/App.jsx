import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useAuth } from "./Providers/AuthProvider";

function App() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isErr, setIsErr] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const credentials = {
    username: "demo",
    pasword: "demo",
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h3>Yu are logged in</h3>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div class="login-container">
          <h2>Login</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <div class="input-group">
              <label for="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div class="input-group">
              <label for="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" onClick={() => setIsLoggedIn(true)}>
              Login
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
