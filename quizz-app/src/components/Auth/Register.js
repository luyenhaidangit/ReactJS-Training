import { useState } from "react";
import "./Register.scss"
import { useNavigate } from "react-router-dom";
import { postRegister } from '../../services/apiService'
import { toast } from 'react-toastify';


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {
        // alert("haha")

        //Validate

        //Submit API
        let res = await postRegister(email, password, username);
        console.log(res)
        if (res.message === "Đăng ký thành công!") {
            console.log("hihi")
            toast.success(res.message);
            navigate("/auth/login")
        } else {
            toast.error(res.message);
            console.log("haha")
        }
    }

    return (
        <div className="register-container">
            <div className="header text-end">
                Đã có tài khoản?
                <span className={"text-primary"} onClick={() => { navigate("/auth/login") }}> Đăng nhập</span>
            </div>
            <div className="body d-flex flex-column align-items-center">
                <div className="title mt-4 mb-2">
                    luyenhaidangit
                </div>
                <div className="welcome">
                    Đăng ký tài khoản?
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
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                            <input value={username} onChange={(event) => setUsername(event.target.value)} type="text" className="form-control" id="exampleInputUsername" placeholder="Tên người dùng" />
                        </div>

                        <button onClick={() => handleRegister()} type="button" className="btn btn-dark mt-4 mb-3 w-100">Đăng ký</button>

                        <span onClick={() => { navigate("/") }} className="back-home text-primary cursor-pointer">Trở về trang chủ</span>
                    </form>
                </div>
            </div>
        </div>
        // <>
        //     Trang dang kys
        // </>
    )
}

export default Register;