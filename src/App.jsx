import {
    BrowserRouter,
    createBrowserRouter,
    Route,
    RouterProvider,
    Routes,
} from "react-router-dom";
import Layout from "./components/Common/Layout";
import DashboardLayout from "./components/Admin/DashboardLayout/DashboardLayout";
import Wallet from "./components/Admin/Wallet/index";
import LoginPhone from "./components/Signupsignin/Login/LoginPhone";
import LoginEmail from "./components/Signupsignin/Login/LoginEmail";
import Otp from "./components/Signupsignin/Login/Otp";
import Signup from "./components/Signupsignin/Signup";
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import {
    Home,
    Product,
    Services,
    About,
    Meet,
    Dashboard,
    Login,
} from "./pages";

let router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Product />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/client/dashboard",
                element: (
                    <DashboardLayout>
                        <Wallet />
                    </DashboardLayout>
                ),
            },
            {
                path: "/loginphone",
                element: <LoginPhone />,
            },
            {
                path: "/loginemail",
                element: <LoginEmail />,
            },
            {
                path: "/loginphone/otp",
                element: <Otp />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ],
    },
]);
// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // cacheTime: 24 * 60 * 60 * 1000, // cacheTime globally to 1 day (in milliseconds)
            // staleTime: 24 * 60 * 60 * 1000, // staleTime globally to 1 day (optional)
            refetchOnWindowFocus: false, // refetching window
            retry: 2, // retry attempts
        },
    },
});
function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </>
    );
}

export default App;
