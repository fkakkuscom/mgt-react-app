import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { Route } from "wouter";
import "./App.css";
import { About, Blog, Home, Login } from "./navigation";
import { BlogPost, Topbar } from "./components";
import "react-toastify/dist/ReactToastify.css";

const ThreeCanvas = lazy(() => import("./three/ThreeCanvas"));

function App() {
  return (
    <>
      <ToastContainer theme="dark" position="bottom-right" closeOnClick />
      <div className="app-container flex flex-col items-start">
        <Topbar />
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPost} />
        <Route path="/login" component={Login} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ThreeCanvas />
      </Suspense>
    </>
  );
}

export default App;
