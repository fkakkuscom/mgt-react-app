import { Route } from "wouter";
import "./App.css";
import { About, Blog, Home } from "./navigation";
import { BlogPost, Topbar } from "./components";

function App() {
  return (
    <>
      <Topbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={BlogPost} />
    </>
  );
}

export default App;
