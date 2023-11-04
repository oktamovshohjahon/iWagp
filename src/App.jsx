import "./App.css";

// react-router-dom
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"; // v6...

// pages
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Fonds from "./pages/Fonds";
import Share from "./pages/Share";
import MyFonds from "./pages/MyFonds";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddFond from "./pages/AddFond";

// layouts
import RootLayout from "./layouts/RootLayout";

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="fonds" element={<Fonds />} />
        <Route path="share" element={<Share />} />
        <Route path="myfonds" element={<MyFonds />} />
        <Route path="account" element={<Account />} />
        <Route path="addfond" element={<AddFond />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
