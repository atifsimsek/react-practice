import './App.css';
import { useRoutes } from "react-router-dom"
import routes from './routes';



function App() {

  return (
    useRoutes(routes)
  );


}

export default App;


// <>
    //   <Routes>
    //     <Route path='/' element={<HomeLayout />}>
    //       <Route index={true} element={<Home />} />
    //       <Route path='contact' element={<Contact />} />

    //       {/* ******** Blog Layout ******** */}

    //       <Route path='blog' element={<BlogLayout />} >
    //         <Route index={true} element={<Blog />}> </Route>
    //         <Route path="categories" element={<BlogCategories />} />
    //         <Route path="post/:url" element={<BlogPosts />} />
    //       </Route>

    //       {/* ******** Profile Layout ******** */}

    //       <Route path="profile" element={<PrivateRoute> <Profile /></PrivateRoute>} />

    //     </Route>


    //     {/* ******** Auth Layout ******** */}

    //     <Route path="/auth" element={<AuthLayout />}>
    //       <Route path='login' element={<Login />} />
    //       {/* -----Register----- */}
    //     </Route>


    //     <Route path='*' element={<Page404 />} />


    //   </Routes>
    // </>
