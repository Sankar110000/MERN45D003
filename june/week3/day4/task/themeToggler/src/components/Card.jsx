import React from "react";
import { useTheme } from "../providers/ThemeProvider";

function Card() {
  const { theme, setTheme } = useTheme();

  const cardStyle = {
    borderRadius: "20px",
    padding: "2rem 4rem",
    backgroundColor: theme == "light" ? "white" : "black",
    color: theme == "light" ? "black" : "white",
  };

  const handleClick = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div style={cardStyle}>
      <h1>Card</h1>
      <button onClick={handleClick}>{theme === "dark" ? "light" : "dark"}</button>
    </div>
  );
}

export default Card;
