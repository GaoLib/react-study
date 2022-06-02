// import AntdFormPage from "./pages/AntdFormPage";
// import MyRCFieldForm from "./pages/MyRCFieldForm";
// import ReduxPage from "./pages/ReduxPage";
// import ReactReduxPage from "./pages/ReactReduxPage";
import ReactReduxHookPage from "./pages/ReactReduxHook";
import {
  BrowserRouter,
  Routes,
  Route,
  // Link,
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
        <Routes>
          {/* <MyRCFieldForm /> */}
          {/* <ReduxPage /> */}
          {/* <ReactReduxPage /> */}
          {/* <ReactReduxHookPage /> */}
          <Route path="/" element={<ReactReduxHookPage />}/>
        </Routes>
      </BrowserRouter>
      {/* <ul>
        <li><Link to="/reactReduxHook">ReactReduxHookPage</Link></li>
      </ul> */}
      
    </div>
  );
}

export default App;
