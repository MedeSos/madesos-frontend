import { MainFrame } from "../components/Frame";

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
  return (
    <>
      <div className="content">
        <div className="logo">
          <p className="text-5xl font-bold">Logo Here</p>
        </div>
        <h4 className="text-4xl font-semibold my-5">Login</h4>
        <form className="flex flex-col w-3/4">
          <input
            type="text"
            placeholder="Enter Email"
            className="w-full py-4 px-6 text-lg placeholder:text-slate-900  rounded mb-4 bg-[#FEEED9]"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full py-4 px-6 text-lg placeholder:text-slate-900  rounded mb-4 bg-[#FEEED9]"
          />
          <button className="w-full text-slate-900 rounded-lg block text-center py-2 px-4 mx-auto bg-primary text-white font-bold text-3xl tracking-widest">
            Masuk Ke akun
          </button>
        </form>
        <div className="flex gap-2 items-center my-2 w-1/2">
          <hr className="w-1/2 bg-black" />
          <p className="text-2xl font-light">OR</p>
          <hr className="w-1/2 bg-black" />
        </div>
        <a
          href="./register.html"
          className="text-slate-900 rounded block text-center py-1 px-4 mx-auto border-4 border-[#87C4FF] w-3/4 font-semibold text-3xl tracking-widest"
        >
          FACEBOOK
        </a>
        <div className="flex flex-row gap-3 text-sm justify-center my-2">
          <a
            href="./login.html"
            className="hover:text-primary-dark text-slate-900 mt-5 inline-block"
          >
            Forget Password? |
          </a>

          <p>
            Need New Account?{" "}
            <a
              href="./register.html"
              className="hover:text-primary-dark text-slate-900 mt-5 inline-block font-bold"
            >
              Daftar
            </a>
          </p>
        </div>
        {/* <!-- blue waves start  --> */}
        <img
          src="./../src/assets/icons/waves-top.svg"
          alt="wave top"
          className="w-full mt-5"
        />
      </div>
    </>
  );
}
