"use client"
import {useState, useRef} from 'react';

const TitleInput = ({dataTitle} : {dataTitle?: string}) => {
  const [title, setTitle] = useState(dataTitle || '');
  const divRef = useRef<HTMLDivElement>(null);

  const ensureCursorVisible = () => {
    if (divRef.current && divRef.current.innerText.trim() === '') {
      divRef.current.innerHTML = '<br />';
      
      const range = document.createRange();
      const sel = window.getSelection();
      range.selectNodeContents(divRef.current);
      range.collapse(false);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  };

  const handleInput = () => {
    if (divRef.current) {
      const text = divRef.current.innerText.trim();
      
      // If empty after deletion, ensure cursor stays visible
      if (text === '') {
        ensureCursorVisible();
      }
    }
  };

  return(
    <div className='flex items-center justify-center w-[18rem]'>
      <div
        ref={divRef}
        className='flex justify-center items-center text-2xl max-sm:text-sm min-h-[12rem] max-md:min-h-[8rem] w-full font-code outline-none text-center overflow-hidden wrap-break-word p-4 empty:before:content-["name_your_task..."] empty:before:text-gray-400'
        contentEditable
        suppressContentEditableWarning
        onFocus={ensureCursorVisible}
        onInput={handleInput}
        onBlur={(e) => {
          const text = e.currentTarget.innerText.trim();
          setTitle(text);
          if (text === '') e.currentTarget.innerHTML = '';
        }}
        onKeyDown={(e) => {
          if (e.key.length === 1 && e.currentTarget.innerText.trim().length >= 80) {
            e.preventDefault();
          }
          if (e.key === 'Enter') e.preventDefault(); 
        }}
      >
        {title}
      </div>
    </div>
  );
};

export default TitleInput;


