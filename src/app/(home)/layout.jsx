import { FiSettings } from "react-icons/fi";
export default function Layout({ children }) {
  return (
    <div className="flex relative  dark:bg-base-300">
      <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
        <div className="tooltip" data-tip="Settings">
          <button
            style={{ background: "black" }}
            className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-base-100 rounded-full "
            type="button"
          >
            <FiSettings />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
}
