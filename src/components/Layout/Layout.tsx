import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FC, Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Suspense fallback={<div>loading</div>}>
          <Outlet/>
        </Suspense>
      </main>
      <Footer/>
      <ScrollRestoration/>
    </>
  );
};

export default Layout;