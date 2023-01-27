import { useState } from "react";
import "./Login.scss"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        // alert("haha")
    }

    return (
        <div className="login-container">
            <div className="header text-end">
                Chưa có tài khoản?
                <span className={"text-primary"}> Đăng ký</span>
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
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(event) => setEmail(event.target.email)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="luyenhaidangit@gmail.com" />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(event) => setEmail(event.target.password)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Ít nhất 8 ký tự" />
                        </div>
                        <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={() => handleLogin()} type="button" class="btn btn-dark mt-4 w-100">Đăng nhập</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;