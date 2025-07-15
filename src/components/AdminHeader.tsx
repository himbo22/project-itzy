import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineMegaphone, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const AdminHeader = () => {
  return (
    <div className="z-50 fixed top-0 right-0 p-4 flex items-center gap-6 bg-white shadow">
      {/* Hộp thư / Chat icon */}
      <HiOutlineChatBubbleLeftEllipsis className="text-2xl text-gray-500 cursor-pointer" />

      <div className="relative">
        <HiOutlineMegaphone className="text-3xl text-purple-600" />
        <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-red-500 text-white rounded-full text-xs">
          1
        </div>
      </div>

      <div className="flex items-center gap-2">
        <FaRegUserCircle className="text-3xl text-purple-600" />
        <div className="flex flex-col leading-tight">
          <span className="text-xs font-semibold text-gray-800">XuanDinh</span>
          <span className="text-xs font-medium text-gray-600">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
