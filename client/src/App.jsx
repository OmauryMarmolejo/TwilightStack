import { useState } from "react";
import "./App.css";
import PostsList from "./features/posts/PostsList";

function App() {
  return (
    <>
      <div className="App">
        <h1>TwilightStack</h1>
        <PostsList />
      </div>
    </>
  );
}

export default App;
