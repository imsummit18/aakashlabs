const FooterText = ({ data }: { data: any }) => {
  return (
    <div className="w-1/4 flex flex-col space-y-3">
      {data.map((item: any) => (
        <div className="cursor-pointer">{item.title}</div>
      ))}
    </div>
  );
};

export default FooterText;
