import { NavLink } from "react-router-dom";

const FooterText = ({ data }: { data: any }) => {
  return (
    <div className="w-1/4 flex flex-col space-y-4">
      {data.map((item: any) => (
        <div className="cursor-pointer hover:border-b w-fit transition dutation-800 ease-in-out">
          <NavLink to={item.path}>{item.title}</NavLink>
        </div>
      ))}
    </div>
  );
};

export default FooterText;
