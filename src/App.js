import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Header from './Components/Header/Header';
import NotFound from "./Components/NotFound/NotFound";
import AllPost from './Components/Post/AllPost';
import SinglePost from "./Components/SinglePost/SinglePost";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <AllPost />
          </Route>
          <Route path='/single_post/:postId'>
            <SinglePost />
          </Route>
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
