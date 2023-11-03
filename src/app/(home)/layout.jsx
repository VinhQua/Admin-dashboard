"use client";
import { useSelector } from "react-redux";
import { SettingBtn, ThemeSettings } from "./Components";

export default function HomeLayout({ children }) {
  const { isSettingsOpen } = useSelector((store) => store.settings);
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
