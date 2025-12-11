import { warn } from "console";

const LightSpot = ({className}: { className: string }) => {

  return (
    <div className={` ${className || ''} absolute w-64 h-64 rounded-full mix-blend-screen filter blur-3xl opacity-40 z-0`}>

    </div>
  );
};

export default LightSpot;
