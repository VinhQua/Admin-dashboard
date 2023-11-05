"use client";
import { themeColors } from "../../../data/dummy";
import {
  closeSettings,
  setMode,
  setTheme,
} from "@/features/settings/settingSlice";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsCheck } from "react-icons/bs";

const ThemeSettings = () => {
  const { currentMode, currentTheme } = useSelector((store) => store.settings);

  const dispatch = useDispatch();
  return (
    <div className="bg-half-transparent w-screen fixed top-0 right-0 nav-item">
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
              value="light"
              className="cursor-pointer"
              onChange={(e) => dispatch(setMode(e.target.value))}
              checked={currentMode === "light"}
            />
            <label htmlFor="light" className="ml-2 text-md cursor-pointer">
              Light
            </label>
            <div className="mt-2">
              <input
                type="radio"
                name="theme"
                id="dark"
                value="dark"
                onChange={(e) => dispatch(setMode(e.target.value))}
                checked={currentMode === "dark"}
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
          <div className="p-4 border-t-1 border-color ml-4">
            <p className="font-semibold text-xl">Theme Colors</p>
            <div className="flex gap-3">
              {themeColors.map((item, index) => (
                <div key={index} className="tooltip" data-tip={item.name}>
                  <div className="relative mt-2 cursor-pointer flex gap-5 items-center">
                    <button
                      type="button"
                      className="h-10 w-10 rounded-full cursor-pointer"
                      style={{ backgroundColor: item.color }}
                      onClick={() => dispatch(setTheme(item.name))}
                    >
                      <BsCheck
                        className={`ml-2 text-2xl text-white ${
                          item.name === currentTheme ? "block" : "hidden"
                        }`}
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
