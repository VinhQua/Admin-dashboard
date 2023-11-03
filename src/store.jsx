"use client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import settingSlice from "./features/settings/settingSlice";
export const store = configureStore({
  reducer: {
    settings: settingSlice,
  },
});

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
