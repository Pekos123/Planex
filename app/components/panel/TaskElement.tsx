import SelectBadgeDropdown from "./SelectBadgeDropdown";

const TaskElement = ({title} : {title: string}) => {
  return (
    <>
      <div className="w-[35rem] h-[15rem] max-sm:w-[20rem] max-sm:h-[12rem] bg-white/5 backdrop-filter backdrop-blur-lg relative flex items-center justify-between px-8 max-sm:px-4 rounded-4xl shadow-md hover:scale-101 hover:shadow-lg transition-all duration-300 ease-in-out">
        <p className="text-2xl max-sm:text-sm w-[18rem] font-code">{title}</p>
        <SelectBadgeDropdown />
      </div>
    </>
  );
};

export default TaskElement;
