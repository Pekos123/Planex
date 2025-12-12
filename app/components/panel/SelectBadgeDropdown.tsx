'use client'
import { useState } from "react";

type BadgeType = 'completed' | 'inwork' | 'notstarted';

const Badge = ({className, badgeType, onClick}: {className?: string, badgeType: BadgeType, onClick: () => void}) => {
  const bg: Record<BadgeType, string>  = {
      completed: 'bg-[#33D48E] hover:shadow-[#33d48e]/50',
      inwork: 'bg-[#EEBF40] hover:shadow-[#eebf40]/50',
      notstarted: 'bg-[#F45050] hover:shadow-[#f45050]/50',
  };

  const badgeTexts: Record<BadgeType, string> = {
    completed: 'Completed',
    inwork: 'In work',
    notstarted: 'Not started'
  };

  return (
    <div className={`${className || ''} font-code rounded-2xl ${bg[badgeType]} w-30 h-8 hover:shadow-md duration-200 my-5 flex items-center justify-center`} onClick={onClick}>{badgeTexts[badgeType]}</div>
  );
};

const SelectBadgeDropdown = () => {
  const [badge, setBadge] = useState<BadgeType>('notstarted');
  const [firstDropdownBadge, setFirstBadge] = useState<BadgeType>('completed');
  const [secDropdownBadge, setSecBadge] = useState<BadgeType>('inwork');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (whichBadge: 'first' | 'sec') => {
    const prevBadge = badge;
    if(whichBadge === 'first'){
      setBadge(firstDropdownBadge);
      setFirstBadge(prevBadge);
    }else {
      setBadge(secDropdownBadge);
      setSecBadge(prevBadge);
    }
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {isOpen && <Badge badgeType={firstDropdownBadge} onClick={() => {handleSelect('first') }}/>}
      <Badge badgeType={badge} onClick={() => setIsOpen(!isOpen)} className={isOpen ? 'scale-90' : 'scale-100 hover:scale-105'}/>
      {isOpen && <Badge badgeType={secDropdownBadge} onClick={() => handleSelect('sec')}/>}
    </div>
  );
};

export default SelectBadgeDropdown;
