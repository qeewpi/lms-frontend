import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "service/AdminService";

const AddAdmin = () => {
  let navigate = useNavigate();

  const [admin, setAdmin] = useState({
    username: "",
    name: "",
    password: "",
  });

  const { username, name, password } = admin;

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AdminService.addAdmin(admin);
      navigate("/admin/admin-list");
    } catch (error) {
      console.error("Failed to add admin");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">Add an admin</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          Fill in the details of the admin you want to add.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
        <div className="flex items-center gap-y-4">
          <label htmlFor="username" className="label w-2/4 2xl:w-1/4 text-base">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="name" className="label w-2/4 2xl:w-1/4 text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="password" className="label w-2/4 2xl:w-1/4 text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="join w-1/2">
          <button
            type="submit"
            className="btn btn-success text-white btn-block join-item"
          >
            Submit
          </button>
          <button
            onClick={() => navigate("/admin/admin-list")}
            className="btn btn-error text-white btn-block join-item"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddAdmin;