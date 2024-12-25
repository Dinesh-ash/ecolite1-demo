import {
  FaHome,
  FaUsers,
  FaUser,
  FaBox,
  FaClipboardList,
  FaElementor,
  FaCog,
  FaHdd,
  FaChartBar,
  FaClipboard,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="h-[90vh] shadow-xl">
      <ul className="flex flex-col items-center justify-center mt-[20px]">
        <Link to="/home">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaHome className="mr-[15px]" />
            Home
          </li>
        </Link>

        <Link to="/home/parcels">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaBox className="mr-[15px]" />
            Parcels
          </li>
        </Link>

        <Link to="/home/users">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaUsers className="mr-[15px]" />
            Users
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
