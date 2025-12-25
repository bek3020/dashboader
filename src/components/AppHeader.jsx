import { Layout } from "antd";
import {
  SearchOutlined,
  BellOutlined,
  DownOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import Logo from "../assets/logo.png";
const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className="!bg-[#020817] !px-6 !h-auto border-b border-slate-800 flex flex-col py-3 gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={Logo} alt="" />
            </a>
          </div>
          <MenuUnfoldOutlined className="text-slate-400 text-lg cursor-pointer hover:text-white" />
        </div>
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
              <SearchOutlined />
            </span>
            <input
              type="text"
              className="w-full bg-[#0B1120] border border-slate-800 text-slate-300 text-sm rounded-full py-1.5 pl-10 pr-4 focus:outline-none focus:ring-1 focus:ring-purple-500"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-400 hover:text-white bg-[#0B1120] rounded-full border border-slate-800">
            <BellOutlined className="text-lg" />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#0B1120]"></span>
          </button>

          <div className="flex items-center gap-3 border-l border-slate-800 pl-4 cursor-pointer group">
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-xs font-bold ring-2 ring-transparent group-hover:ring-purple-500 transition-all">
              MS
            </div>
            <div className="hidden lg:block text-left">
              <p className="text-white text-xs font-medium leading-none">
                Manoj Sharma
              </p>
              <p className="text-slate-500 text-[10px] mt-1">Super Admin</p>
            </div>
            <DownOutlined className="text-[10px] text-slate-500" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">
        \
        <div className="flex items-center text-[13px] text-slate-400 gap-2">
          <span>CRM</span>
          <span>/</span>
          <span>Account</span>
          <span>/</span>
          <span className="text-slate-100 font-medium">Account Details</span>
        </div>
        <div className="bg-[#0B1120] p-1 rounded-lg flex items-center border border-slate-800 scale-90 sm:scale-100">
          <button className="px-4 py-1 rounded-md text-xs font-medium bg-[#7C3AED] text-white">
            Day
          </button>
          <button className="px-4 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-white transition">
            Week
          </button>
          <button className="px-4 py-1 rounded-md text-xs font-medium text-slate-400 hover:text-white transition">
            Year
          </button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
