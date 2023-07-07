import { Outlet } from "react-router";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { FC, Suspense } from "react";
import { ScrollRestoration } from "react-router-dom";
import Loading from "@src/ui/Loading/Loading";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const Layout: FC = () => {
  return (
    <>
      <NavBar/>
      <main>
        <ErrorBoundary>
          <Suspense fallback={<Loading/>}>
            <Outlet/>
          </Suspense>
        </ErrorBoundary>
      </main>
      <Footer/>
      <ScrollRestoration/>
    </>
  );
};

export default Layout;