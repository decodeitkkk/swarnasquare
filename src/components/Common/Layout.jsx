import Footer from "./Footer";
import Navbar from "./Nav";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where Navbar and Footer should not appear
  const hideNavFooterRoutes = ["/signupsignin"];

  const shouldHideNavFooter = hideNavFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {!shouldHideNavFooter && (
        <header>
          <Navbar />
        </header>
      )}

      <main className="flex-grow">{children}</main>

      {!shouldHideNavFooter && (
        <footer>
          <Footer />
        </footer>
      )}
    </div>
  );
};

export default Layout;

