import { lazy, Suspense } from "react";
import { Route } from "wouter";
import "./App.css";
import { About, Blog, Home } from "./navigation";
import { BlogPost, Topbar } from "./components";

const ThreeCanvas = lazy(() => import("./three/ThreeCanvas"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeCanvas />
      </Suspense>
      <div className="overlay">
        <Topbar />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
      </div>{" "}
    </>
  );
}

export default App;
