import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center font-bold text-2xl tracking-tight select-none cursor-pointer">
      <span>SH</span>
      <div className="relative mx-[1px]">
        {/* The 'I' */}
        <span>I</span>
        {/* The yellow arrow specifically placed above the I */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-brand-yellow"></div>
      </div>
      <span>FTUP</span>
      <span className="ml-1.5 font-normal text-sm uppercase tracking-wide opacity-80 pt-1">AFRICA</span>
    </div>
  );
};

export default Logo;