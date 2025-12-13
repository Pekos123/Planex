import SelectBadgeDropdown from "../SelectBadgeDropdown";
import TitleInput from "./TitleInput";

const TaskElement = ({title} : {title: string}) => {
  return (
    <>
      <div className="relative w-[35rem] h-[15rem] max-sm:w-[20rem] max-sm:h-[12rem] group">
        {/* Background layer that scales on hover */}
        <div className="absolute inset-0 bg-white/5 backdrop-filter backdrop-blur-lg rounded-4xl shadow-md group-hover:scale-102 group-hover:bg-white/7 group-hover:shadow-lg transition-all duration-300 ease-in-out" />
        
        {/* Interactive content layer (doesn't scale) */}
        <div className="relative flex items-center justify-between px-8 max-sm:px-4 h-full">
          <TitleInput dataTitle={title}/>
          <SelectBadgeDropdown />
        </div>
      </div>
    </>
  );
};



export default TaskElement;
