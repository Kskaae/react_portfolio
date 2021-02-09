import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Portfolio from "./pages/Portfolio"
import Home from "./pages/Home"
function App() {
  return (
    <Router>
      <div>
        {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
                <a class="nav-link" href="/portfolio">Portfolio</a>
              
              </div>
            </div>
          </div> */}
        {/* </nav> */}



        <div class="jumbotron jumbotron-fluid">

          <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/">Home</a>

              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://www.instagram.com/kristopher.kaae/?hl=en">Instagram</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/portfolio">Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link"
                  href="https://www.linkedIn.com/in/kristopher-s-kaae-m-s-d-abmdi-30526552/">linkedIn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/Kskaae?tab=repositories">GitHub Repositories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://drive.google.com/file/d/17jAviehOI1QsRJxYrwgnbWqIznRKTfrD/view?usp=sharing">My Resume</a>
              </li>

            </ul>
          </nav>


        </div>

        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
        <footer>
          <div class="text-center">
            <p>Portfolio Project 2020 </p>
          </div>
        </footer>

      </div>
    </Router>
  );
}

export default App;
