const GlassButton = ({className, children} : {className?: string, children?: React.ReactNode}) => (
  <div className={`
    relative overflow-hidden
    hover:scale-110 
    transition-all duration-300
    bg-gradient-to-r from-white/20 via-gray-100/20 to-gray-200/5 
    active:bg-white/70 
    border-2 rounded-3xl p-3 px-5 border-white/60
    before:content-[''] before:absolute before:top-0 before:left-[-100%] 
    before:w-full before:h-full 
    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
    before:skew-x-[45deg]
    hover:before:left-[100%] before:transition-all before:duration-700
    ${className || ''}
  `}>
  {children}
  </div>
);

export default GlassButton;
