// import AntdFormPage from "./pages/AntdFormPage";
import MyRCFieldForm from "./pages/MyRCFieldForm";
import ReduxPage from "./pages/ReduxPage";
import ReactReduxPage from "./pages/ReactReduxPage";
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
  useParams,
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
          <Link to="/foo/123">Foo</Link>
        </div>

        <Routes>
          <Route path="/" element={<MyRCFieldForm />}/>
          <Route path="/redux" element={<ReduxPage />}/>
          {/* <ReactReduxHookPage /> */}
          <Route path="/reactReduxHook" element={<ReactReduxHookPage />}/>
          <Route path='/foo/*' element={<Foo />} />
          <Route path="*" element={<ReactReduxPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Foo() {
  return (
    <div>
      <Link to="me">ME</Link>
      <Routes>
        <Route path="me" element={<FooChild />}></Route>
        <Route path=":id" element={<FooOtherChild />}></Route>
      </Routes>
    </div>
  )
}

function FooChild() {
  return (
    <div>
      Meeeeee
    </div>
  )
}

function FooOtherChild() {
  const params = useParams()
  return (
    <div>
      FooOtherChild {params.id}
    </div>
  )
}

export default App;
