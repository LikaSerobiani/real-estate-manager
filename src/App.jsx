import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/layout/Header";

import EstateListing from "./pages/estates/EstateListing";
import EstateView from "./pages/estates/EstateView";
import EstateCreate from "./pages/estates/EstateCreate";

import Layout from "./components/layout/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="estates">
        <Route index element={<EstateListing />} />
        <Route path=":id" element={<EstateView />} />
        <Route path="create" element={<EstateCreate />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <Header />
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
