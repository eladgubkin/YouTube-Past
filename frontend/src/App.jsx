import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    fetch("http://127.0.0.1:5000/random")
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  });

  return (
    <div>
      <h1>App</h1>
    </div>
  );
};

export default App;
