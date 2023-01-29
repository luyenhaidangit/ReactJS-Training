import { useState } from "react";
import "./Login.scss"
import { useNavigate } from "react-router-dom";
import { postLogin } from '../../services/apiService'
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from "react-icons/im";



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async () => {
        // alert("haha")

        //Validate
        setIsLoading(true);

        //Submit API
        let res = await postLogin(email, password);

        console.log(res)
        if (res.statusLogin === true) {
            dispatch(doLogin(res));

            toast.success("Đang nhập thành công");
            setIsLoading(false);
            navigate("/")
        } else {
            toast.error("Đang nhập không thành công");
            setIsLoading(false);
            console.log("haha")
        }
    }

    return (
        <div className="login-container">
            <div className="header text-end">
                Chưa có tài khoản?
                <span className={"text-primary"} onClick={() => { navigate("/auth/register") }}> Đăng ký</span>
            </div>
            <div className="body d-flex flex-column align-items-center">
                <div className="title mt-4 mb-2">
                    luyenhaidangit
                </div>
                <div className="welcome">
                    Hello, who is this?
                </div>
                <div className="content-form">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="luyenhaidangit@gmail.com" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="form-control" id="exampleInputPassword1" placeholder="Ít nhất 8 ký tự" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={() => handleLogin()} type="button" disabled={isLoading} className="btn btn-dark login-button mt-4 mb-3 w-100">{isLoading == true && <ImSpinner10 className="me-2 loaderIcon"></ImSpinner10>}Đăng nhập</button>

                        <span onClick={() => { navigate("/") }} className="back-home text-primary cursor-pointer">Trở về trang chủ</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;