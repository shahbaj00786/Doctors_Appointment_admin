import { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
import { DoctorContext } from "../context/DoctorContext";

export const Login = () => {
  const [state, setState] = useState("Admin");

  const [email, setEmail] = useState("admin@project.com");
  const [password, setPassword] = useState("qwerty@123");

  const { setAToken, backendUrl } = useContext(AdminContext);
  const { setDToken } = useContext(DoctorContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("aToken", data.token);
          setAToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/doctor/login", {
          email,
          password,
        });

        if (data.success) {
          localStorage.setItem("dToken", data.token);
          setDToken(data.token);
          //console.log(data.token)
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-700 text-sm shadow-lg">
        <p className="text-2xl font-semibold m-auto">
          <span className="text-cyan-700">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-slate-500 rounded w-full p-2 mt-1"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-slate-500 rounded w-full p-2 mt-1"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="bg-cyan-700 text-white w-full py-2 rounded-md text-base cursor-pointer hover:bg-neutral-500">
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login
            <span
              className=" text-cyan-700 underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login
            <span
              className=" text-cyan-700 underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              {" "}
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};
