import "./App.css";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Home from "./container/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Contact from "./container/Contact/Contact";
import Post from "./container/Post/Post";
import About from "./container/About/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path ='/about' component={About}/>
        
        <Route exact path='/post/:postid' component={Post} />
      </div>
    </BrowserRouter>
  );
}

export default App;
