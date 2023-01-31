import { Route, Routes } from "react-router-dom";
// import User from './components/user/user';
import Admin from './components/admin/admin';
import Home from './components/home/home';
import DashBoard from './components/admin/Content/DashBoard';
import ManageUser from './components/admin/Content/ManageUser';
import Login from './components/Auth/Login';
import App from './App';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Auth/Register";
import ListQuizz from "./components/user/ListQuizz";
import DetailQuizz from "./components/user/DetailQuizz";
import NotFound from "./components/NotFound/NotFound";
//Luyenhaidang

const Layout = (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />}></Route>
                    <Route path="user" element={<ListQuizz />}></Route>
                </Route>
                {/* <Route path="/admin" element={<Admin />}></Route> */}
                <Route path="/quizz/:id" element={<DetailQuizz />}></Route>
                <Route path="/admin" element={<Admin />}>
                    <Route index element={<DashBoard />}></Route>
                    <Route path="manage-user" element={<ManageUser />}></Route>
                </Route>

                {/* <Route path="/login" element={<Login></Login>}></Route> */}
                <Route path="/auth">
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                </Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <ToastContainer />
        </>
    );
}

export default Layout;
