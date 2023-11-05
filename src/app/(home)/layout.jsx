"use client";
import { useDispatch, useSelector } from "react-redux";
import { SettingBtn, ThemeSettings } from "./Components";
import { useEffect } from "react";

export default function HomeLayout({ children }) {
  const { isSettingsOpen, currentTheme, currentMode } = useSelector(
    (store) => store.settings
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentMode !== "dark") {
      return document.documentElement.setAttribute("data-theme", currentTheme);
    }
    return document.documentElement.setAttribute("data-theme", currentMode);
  }, []);

  return (
    <div className="flex relative  dark:bg-base-300">
      <SettingBtn />
      {/* Active Menu */}
      {/* Navbar */}
      {/* Settings */}
      {isSettingsOpen && <ThemeSettings />}
      {children}
    </div>
  );
}
