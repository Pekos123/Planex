'use client'
import { useState } from "react";

const SelectBadgeDropdown = () => {
  const [badge, setBadge] = useState<'success' | 'warning' | 'error'>('success');
  const [isOpen, setIsOpen] = useState(false);

  const badgeTexts: Record<string, string> = {
    success: 'Completed',
    warning: 'In work',
    error: 'Not started'
  };

  const handleSelect = (newBadge: 'success' | 'warning' | 'error') => {
    setBadge(newBadge);
    setIsOpen(false);
  };

  return (
    <div className="relative">
       <div role="button" className={`badge badge-${badge} w-28 hover:shadow-md hover:shadow-white duration-200`} onClick={() => setIsOpen(!isOpen)}>{badgeTexts[badge]}</div>

       {isOpen && (
         <div className="absolute top-full right-0 bg-black/20 flex flex-col gap-1 rounded-lg py-2 z-10 w-28 shadow-md/70 shadow-white/10 border-white p-1">
           <div className="badge badge-success w-full hover:shadow-md hover:shadow-green-600 duration-200" onClick={() => handleSelect('success')}>Completed</div>
           <div className="badge badge-warning w-full hover:shadow-md hover:shadow-yellow-600 duration-200" onClick={() => handleSelect('warning')}>In work</div>
            <div className="badge badge-error w-full hover:shadow-md hover:shadow-red-600 duration-200" onClick={() => handleSelect('error')}>Not started</div>
         </div>
       )}

    </div>
  );
};

export default SelectBadgeDropdown;
