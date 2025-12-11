import SelectBadgeDropdown from "./SelectBadgeDropdown";

const TaskElement = ({title} : {title: string}) => {
  return (
    <>
      <div className="w-[90vw] h-[3vw] relative flex items-center justify-between px-12 rounded-lg border-white shadow-md/70 shadow-white/10 hover:ring-2 hover:ring-white/50 transition-all duration-300 ease-in-out">
        <p className="text-xl font-code">{title}</p>
        <SelectBadgeDropdown/>
      </div>
    </>
  );
};

export default TaskElement;
