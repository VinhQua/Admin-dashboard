const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  theme: "",
  isSettingsOpen: false,
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
  },
});
export const { showSettings, closeSettings } = settingSlice.actions;
export default settingSlice.reducer;
