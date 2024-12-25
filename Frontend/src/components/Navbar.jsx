import {Link} from "react-router-dom"
const Navbar = ({onRegisterClick}) => {
  return (
    <div className="h-[100px] bg-[#e9eb77] flex items-center justify-between px-10">
      <img src="./logoo.jpg" alt="" height="200px" width="200px" />
      <div>
        <button
          onClick={onRegisterClick}
          className="bg-[#1e1e1e] p-[10px] text-grey-300 cursor-pointer border-none w-[100px] mr-4 text-white"
          >Register
        </button>
      <Link to="/login">
      <button className="bg-[#1e1e1e] p-[10px] text-grey-300 cursor-pointer border-none w-[100px] text-white">
        Login
      </button>
      </Link>
      </div>
    </div>
  );
};

export default Navbar;