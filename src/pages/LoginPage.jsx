import { useState } from "react";
import { MainFrame } from "../components/Frame";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";
import axios from "axios";
import { AlertMessage } from '../components/AlertMessage';

export default function LoginPage() {
  return (
    <>
      <MainFrame>
        <Login />
      </MainFrame>
    </>
  );
}

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPasssword] = useState("");
  const [msg, setMsg] = useState(null);

  const Login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/v1/auth/login`,
        { email, password, }
      );
      if (response.status >= 200 && response.status < 300) {
        let token = null;
        if(!response.data.data.token){
          setMsg({message: "Invalid Credentials", status: false});
          setTimeout(() => setMsg(null), 3000);
          return
        }
        token = response.data.data.token;
        const result = jwtDecode(token,"secret");
        localStorage.setItem("token", token);
        localStorage.setItem("exp",result.exp);
        localStorage.setItem("id",result.id);
        setMsg({message: "Login Successfull", status: true});
        setTimeout(() => {
          setMsg(null)
          window.location.reload();
        }, 1000);
      }
    } catch (error) {
      if (error.response) {
        setMsg({message: error.response.data.message, status: false});
        setTimeout(() => setMsg(null), 3000);
      }
    }
  };
  return (
    <>
      <div className="content">
        <div className="logo mx-16">
          <p className="text-5xl font-bold">
            <img src="/sosial-vibe.svg" alt="sosial vibe logo" className="w-full"/>
          </p>
        </div>
        <h4 className="text-2xl font-semibold my-5">Login</h4>
        {msg !== null && <AlertMessage type={msg.status} style="w-3/4">{msg.message}</AlertMessage> }
        <form onSubmit={Login} className="flex flex-col w-3/4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            placeholder="Enter Email"
            className="w-full py-4 px-6 text-lg placeholder:text-slate-900  rounded mb-4 bg-[#FEEED9]"
          />
          <input
            onChange={(e) => setPasssword(e.target.value)}
            value={password}
            type="password"
            placeholder="Enter Password"
            className="w-full py-4 px-6 text-lg placeholder:text-slate-900  rounded mb-4 bg-[#FEEED9]"
          />
          <button className="w-full text-slate-900 rounded-lg block text-center py-2 px-4 mx-auto bg-primary text-white font-bold text-3xl tracking-widest">
            LOGIN
          </button>
        </form>
        <div className="flex gap-2 items-center my-2 w-1/2">
          <hr className="w-1/2 bg-black" />
          <p className="text-2xl font-light">OR</p>
          <hr className="w-1/2 bg-black" />
        </div>
        <a
          href="/register"
          className="text-slate-900 rounded block text-center py-1 px-4 mx-auto border-4 border-[#87C4FF] w-3/4 font-semibold text-3xl tracking-widest"
        >
          FACEBOOK
        </a>
        <div className="flex flex-row gap-3 text-sm justify-center my-2">
          <a
            href="/login"
            className="hover:text-primary-dark text-slate-900 mt-5 inline-block"
          >
            Forget Password? |
          </a>

          <p>
            Need New Account?{" "}
            <a
              href="/register"
              className="hover:text-primary-dark text-slate-900 mt-5 inline-block font-bold"
            >
              Sign Up
            </a>
          </p>
        </div>
        {/* <!-- blue waves start  --> */}
        <img
          src="/assets/icons/waves-top.svg"
          alt="wave top"
          className="w-full mt-5"
        />
      </div>
    </>
  );
}
