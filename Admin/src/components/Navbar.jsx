import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#e9eb77] flex items-center justify-between px-10">
      <Link to="/">
        {" "}
        <img
          src="./logo.jpg"
          alt="EcoLite Logo"
          height="200px"
          width="200px"
        />
      </Link>
      <Link to="/">
      <button className="text-[18px] font-semibold cursor-pointer">
        Logout
      </button>
      </Link>
    </div>
  );
};

export default Navbar;
