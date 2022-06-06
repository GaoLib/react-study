// import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import ReduxPage from "./pages/ReduxPage";
// import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHook";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  // Switch,
  // Redirect,
  // useHistory,
  // useLocation,
  // useRouteMatch,
  // useParams,
  // withRouter,
  // Prompt,
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="links">
          <Link to="/">MyRCFieldForm</Link>
          <Link to="/redux">ReduxPage</Link>
          <Link to="/reactReduxHook">ReactReduxHookPage</Link>
        </div>

        <Routes>
          <Route path="/" element={<MyRCFieldForm />}/>
          <Route path="/redux" element={<ReduxPage />}/>
          {/* <ReactReduxHookPage /> */}
          <Route path="/reactReduxHook" element={<ReactReduxHookPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
