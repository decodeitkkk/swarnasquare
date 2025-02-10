import Navbar from "./Nav";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  const hideNavFooterRoutes = [
    "/loginphone",
    "/signup",
    "/loginphone/otp",
    "/loginemail",
  ];

  const shouldHideNavFooter = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="fixed inset-0 bg-cover bg-center bg-fixed blur-md -z-10"
        style={{ backgroundImage: `url(./quote-bg.png)` }}
      />

      {!shouldHideNavFooter && (
        <header className="sticky top-0 overflow-hidden">
          <Navbar isFixed={false} />
        </header>
      )}

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      {/* {!shouldHideNavFooter && (
        <footer>
          <Footer />
        </footer>
      )} */}
    </div>
  );
};

export default Layout;
