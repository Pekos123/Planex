import SelectBadgeDropdown from "./SelectBadgeDropdown";

const TaskElement = ({title} : {title: string}) => {
  return (
    <>
      <div className="w-[23vw] h-[10vw] bg-white/5 backdrop-filter backdrop-blur-lg relative flex items-center justify-between px-8 rounded-2xl shadow-md hover:scale-101 transition-all duration-300 ease-in-out">
        <p className="text-xl w-[10vw] font-code">{title}</p>
        <SelectBadgeDropdown />
      </div>
    </>
  );
};

export default TaskElement;
