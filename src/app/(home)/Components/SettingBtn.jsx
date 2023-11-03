import { showSettings } from "@/features/settings/settingSlice";
import React from "react";
import { FiSettings } from "react-icons/fi";
import { useDispatch } from "react-redux";
const SettingBtn = () => {
  const dispatch = useDispatch();

  return (
    <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
      <div className="tooltip" data-tip="Settings">
        <button
          style={{ background: "black" }}
          className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-base-100 rounded-full "
          type="button"
          onClick={() => dispatch(showSettings())}
        >
          <FiSettings />
        </button>
      </div>
    </div>
  );
};

export default SettingBtn;
