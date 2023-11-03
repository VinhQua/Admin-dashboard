"use client";
import { closeSettings } from "@/features/settings/settingSlice";
import React from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";

const ThemeSettings = () => {
  const dispatch = useDispatch();
  return (
    <div
      className="bg-half-transparent w-screen fixed top-0 right-0 nav-item"
      style={{ background: "rgba(0,0,0,0.1)" }}
    >
      <div className="float-right h-screen dark:text-base-300 bg-base-200 dark:bg-[#484B52] w-400">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-lg ">Settings</p>
          <button
            type="button"
            style={{ color: "rgb(153,171,180)", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-base-200"
            onClick={() => dispatch(closeSettings())}
          >
            <MdOutlineCancel />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p className="font-semibold text-xl ">Theme Option</p>
          <div className="mt-4">
            <input
              type="radio"
              name="theme"
              id="light"
              value="Light"
              className="cursor-pointer"
              // set mode
              // check
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
            <div className="mt-2">
              <input
                type="radio"
                name="theme"
                id="dark"
                value="Dark"
                className="cursor-pointer"
                // set mode
                // check
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
