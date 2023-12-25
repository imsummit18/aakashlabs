import { NavLink } from "react-router-dom";
import { navData } from "../../../data";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full z-[10] top-0  ">
        <div className="bg-[white] h-[12vh] shadow-shadow flex justify-between item-center px-[60px]  py-5 max-w-vw">
          <div className="text-[black]">Logo</div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-12">
              {navData.map((data: any) => {
                return (
                  <>
                    <li className="flex  text-base cursor-pointer hover:text-primary-500">
                      <NavLink
                        to={data?.path}
                        className={"hover:text-primary-500"}
                        style={({ isActive }) => ({
                          color: isActive ? "#1492E6" : "",
                          fontWeight: isActive ? "medium" : "normal",
                          borderBottom: isActive ? "2px  solid  #1492E6" : "",
                          transition: "border-right 1s ease-in-out",
                        })}
                      >
                        {data?.title}
                      </NavLink>
                    </li>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
