import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/blog/Blog';
import BlogLayout from './pages/blog';
import BlogCategories from './pages/blog/BlogCategories';
import BlogPosts from "./pages/blog/BlogPosts";
import Profile from "./pages/Profile"
import PrivateRoute from './components/PrivateRoute';
import AuthLayout from './pages/auth/AuthLayout';
import Login from './pages/auth/Login';
import Page404 from "./pages/Page404";
import HomeLayout from './pages/HomeLayout';



const routes = [
    {
        name:"home",
        path: "/",
        element: <HomeLayout />,
        children: [

            // ***** Home *****
            {
                name:"index",
                index: true,
                element: <Home />

            },
            // ***** Contact *****
            {
                name:"contact",
                path: "contact",
                element: <Contact />,
            },
            // ***** Blog *****
            {
                name:"blog",
                path: "blog",
                element: <BlogLayout />,
                auth: true,
                children:
                    [
                        {
                            name:"index",
                            index: true,
                            element: <Blog />,

                        },
                        {
                            name:"categories",
                            path: "categories",
                            element: <BlogCategories />,

                        },
                        {
                            name:"post",
                            path: "post/:url",
                            element: <BlogPosts />
                        }

                    ]

            },
            // ***** Profile *****
            {
                name:"profile",
                path: "profile",
                element: <Profile />,
                auth: true,

            }

        ]

    },
    // ***** Auth *****
    {
        name:"auth",
        path: "/auth",
        element: <AuthLayout />,
        children:
            [
                // ***** Login *****
                {
                    name:"login",
                    path: "login",
                    element: <Login />
                },
                // ***** Register *****
                {

                }

            ]
    },
    // ***** Page404 *****
    {
        name:"notFound",
        path: "*",
        element: <Page404 />
    }



]

const authMap = routes => routes.map(route => {

    if (route?.auth) {
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if (route?.children) {
        route.children = authMap(route.children)
    }

    return route
})


export default authMap(routes);
