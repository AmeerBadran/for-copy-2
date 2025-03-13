/* eslint-disable react/prop-types */
import { TfiMenu } from "react-icons/tfi";

export default function AdminNavbar({
  sidebarSize,
  setSidebarSize,
  isHalfScreen,
}) {
  const changeSize = () => {
    setSidebarSize(sidebarSize === "big" ? "small" : "big");
  };

  return (
    <nav
      className={`bg-[#191c24] z-10 h-[70px] w-full flex items-center justify-between fixed shadow-lg shadow-[#22222277] pl-[16px] ${
        sidebarSize === "big"
          ? "w-calc-100-244"
          : sidebarSize === "small"
          ? "w-calc-100-70"
          : ""
      } transition-all ease-in-out duration-200`}
    >
      <div className="flex md:w-[100%] w-8">
        {isHalfScreen && (
          <h1
            className={`mr-3 text-gray-100 font-bold px-1 py-1 tracking-wide text-2xl`}
          >
            HR
          </h1>
        )}
        <button
          type="button"
          className="text-slate-600 ml-0.5 "
          onClick={changeSize}
        >
          <TfiMenu />
        </button>
      </div>
    </nav>
  );
}
