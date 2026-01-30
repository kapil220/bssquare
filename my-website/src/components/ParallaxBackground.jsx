import { useRef } from 'react';

const ParallaxBackground = ({ 
  backgroundImage, 
  children, 
  className = '',
  darkenOverlay = true
}) => {
  const ref = useRef(null);

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Parallax background image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          zIndex: 0
        }}
      />
      
      {/* Darken overlay */}
      {darkenOverlay && (
        <div className="absolute inset-0 bg-black/50 z-0" />
      )}
      
      {/* Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
