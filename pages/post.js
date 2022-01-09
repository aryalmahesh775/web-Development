import React, { useState } from "react";

const post = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { name, email, password, confirmPassword };
    console.log(blog);
  };

  return (
    <div className="container">
      <div className="my-5 w-[80vh] bg-blue-300">
        <p className="text-4xl flex justify-center Create a post text-gray-600">
          Create a post
        </p>
        <form className="py-10" onSubmit={handleSubmit}>
          <div className=" space-y-2 flex ">
            <label className="flex items-center">Name:</label>
            <input
              className="border-2 border-solid border-red-300"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex">
            <label className="flex items-center">Email:</label>
            <input
              className="border-2 border-solid border-red-300"
              type="text"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex">
            <label className="flex items-center">Password:</label>
            <input
              className="border-2 border-solid border-red-300"
              type="text"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="space-y-2 flex">
            <label className="flex items-center">confirmPassword:</label>
            <input
              className="border-2 border-solid border-red-300"
              type="text"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className=" flex justify-center items-center my-10">
            <button className=" px-5 py-3 bg-red-400 rounded-full">
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default post;
