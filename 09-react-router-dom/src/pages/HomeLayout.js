import { Outlet } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import { url } from '../utils';
const HomeLayout = () => {
    return (
        <>
            <nav>
                <NavLink to={url("home")} end>Anasayfa</NavLink>
                <NavLink to={url("home.contact")} style={({ isActive }) => ({
                    backgroundColor: isActive ? "red" : "transparent"
                })}>Contact</NavLink>
                <NavLink to={url("home.blog")}>Blog</NavLink>
                <NavLink to={url("home.profile")}>Profile</NavLink>

            </nav>
            <Outlet />
        </>
    )
}

export default HomeLayout