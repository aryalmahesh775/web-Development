import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { MenuIcon, GlobeIcon } from "@heroicons/react/solid";
import { GoogleLogin } from "react-google-login";
import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";
import FacebookLogin from "react-facebook-login";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState([""]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({ name, email, password, confirmPassword });
    try {
      const res = await axios.post(
        "http://localhost:3001/api/users",
        body,
        config
      );
      const data = res.data;
      console.log(data);
      if (data.errors) {
        setError(data.errors);

        // --------------
        // const Toast = Swal.mixin({
        //   toast: true,
        //   position: "top-end",
        //   showConfirmButton: false,
        //   timer: 3000,
        //   timerProgressBar: false,
        //   didOpen: (toast) => {
        //     toast.addEventListener("mouseenter", Swal.stopTimer);
        //     toast.addEventListener("mouseleave", Swal.resumeTimer);
        //   },
        // });

        // Toast.fire({
        //   icon: "error",
        //   title: data.errors[0].message,
        //   title: error[0].message,
        // });

        setTimeout((error) => {
          setError("");
        }, 5000);
        // --------------
      }
      // else
      if (data.message) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: false,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: data.message,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  // --------------------------Google--------------------------------------------------------

  const responseSuccessGoogle = (response) => {
    console.log("this is the response", response);

    axios({
      method: "POST",
      url: "http://localhost:3001/api/googleLogin",
      data: { tokenId: response.tokenId },
    })
      .then((response) => {
        console.log("Google login success", response);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        // const { pathname } = Router;
        // if (pathname == "/") {
        //   Router.push("/test");
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const responseErrorGoogle = (response) => {
    console.log(response);
  };

  // ------------fACEBOOK
  const responseFacebook = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:3001/api/facebookLogin",
      data: { accessToken: response.accessToken, userID: response.userID },
    }).then((response) => {
      console.log("Facebook login success client side", response);
    });
  };

  return (
    <div className="container">
      {/* {error && (
        <div className="flex flex-col justify-center bg-gray-200 w-[40vw] py-5 absolute right-2 "> */}
      {error &&
        // error.map((err) => <p className="text-red-600">{err.message}</p>)}
        error.map((err, index) => {
          return (
            <p key={index} className="text-red-600">
              {err.message}
            </p>
          );
        })}
      {/* </div>
      )} */}
      <div className="mb-20 mx-auto flex flex-col justify-center bg-blue-100 items-center shadow-2xl h-[full]">
        <div className="flex justify-center items-center">
          <div className="my-5 bg-blue-300">
            <p className="text-4xl flex justify-center Create a post text-gray-600">
              Create a post
            </p>
            <form className="py-10" onSubmit={handleSubmit}>
              <div className=" space-y-2 flex ">
                <label htmlFor="name" className="flex items-center">
                  Name:
                </label>
                <input
                  className="border-2 border-solid border-red-300"
                  type="text"
                  id={name}
                  // required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex">
                <label className="flex items-center">Email:</label>
                <input
                  className="border-2 border-solid border-red-300"
                  type="text"
                  // required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex">
                <label className="flex items-center">Password:</label>
                <input
                  className="border-2 border-solid border-red-300"
                  type="text"
                  // required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex">
                <label className="flex items-center">confirmPassword:</label>
                <input
                  className="border-2 border-solid border-red-300"
                  type="text"
                  // required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className=" flex justify-center items-center my-10">
                <button className=" px-5 py-3 bg-gray-700 text-white  rounded-full  hover:transition-all ease-linear duration-500">
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
        <GoogleLogin
          clientId="492121281414-3n2qf7pv29r5tcdtn9lnkoof1voiinsk.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <div className="my-10">
          <p className="">Login with faceBook</p>
          <FacebookLogin
            appId="446990760168767"
            autoLoad={false}
            callback={responseFacebook}
          />
        </div>
      </div>
    </div>
  );
}
