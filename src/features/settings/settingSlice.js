const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  theme: "",
  isSettingsOpen: false,
  currentMode: global?.window?.localStorage.getItem("mode") || "light",
  currentTheme: global?.window?.localStorage.getItem("theme") || "cupcake",
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    showSettings: (state) => {
      state.isSettingsOpen = true;
    },
    closeSettings: (state) => {
      state.isSettingsOpen = false;
    },
    setMode: (state, { payload }) => {
      localStorage.setItem("mode", payload);
      state.currentMode = payload;
      document.documentElement.setAttribute("data-theme", payload);
    },
    setTheme: (state, { payload }) => {
      localStorage.setItem("theme", payload);
      state.currentTheme = payload;
      localStorage.setItem("mode", "light");
      state.currentMode = "light";
      document.documentElement.setAttribute("data-theme", payload);
    },
  },
});
export const { showSettings, closeSettings, setMode, setTheme } =
  settingSlice.actions;
export default settingSlice.reducer;
