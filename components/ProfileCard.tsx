
import React from 'react';

const ProfileCard: React.FC = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl animate-in fade-in slide-in-from-right-8 duration-1000">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-400/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      {/* Profile Image */}
      <img 
        src="https://images.unsplash.com/photo-1519085184628-6607a274581f?q=80&w=1000&auto=format&fit=crop" 
        alt="Vikas Singh"
        className="relative z-10 w-full h-auto object-contain transform scale-105 drop-shadow-2xl rounded-3xl"
      />
    </div>
  );
};

export default ProfileCard;
