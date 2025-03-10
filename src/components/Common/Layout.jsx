import Footer from "./Footer";
import Navbar from "./Nav";

import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
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
                className=" -z-10 fixed inset-0 bg-cover bg-center bg-fixed    "
                style={{ backgroundImage: `url(./quote-bg.png)` }}
            />

            {!shouldHideNavFooter && (
                <header className="sticky top-0 overflow-hidden z-40">
                    <Navbar isFixed={true} />
                </header>
            )}

            {/* Main content 
        <main className="flex-grow">{children}</main>
        */}
            <div className="flex flex-col min-h-screen backdrop-blur-lg ">
                <Outlet />
            </div>

            {!shouldHideNavFooter && <Footer />}
        </div>
    );
};

export default Layout;
