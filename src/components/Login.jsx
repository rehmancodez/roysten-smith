import logo from "../images/logo-r.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", password);


        navigate("/dashboard");

        localStorage.setItem("email" , JSON.stringify(email));
       localStorage.setItem("pass" , JSON.stringify(password));
    }

    return (
        <>
            <div className="container-fluid login">
                <div className="logo pb-4">
                    <img src={logo} alt="logo"></img>


                </div>
                <div className="form ">
                    <div className="content">
                        <div className="texts pb-2">
                            <h1>Sign In</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the <br />industry's standard dummy text ever since the 1500s</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className="inputs">
                                <input
                                    type="email"
                                    placeholder="User name"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="sign-up">
                                <p>Forgot password?</p>
                                <button type="submit">Sign In</button>
                            </div>
                        </form>



                    </div>
                </div>




            </div>

        </>
    )
}
export default Login;