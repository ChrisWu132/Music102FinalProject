import React from 'react';

interface DiceFaceProps {
  value: number;
}

export const DiceFace: React.FC<DiceFaceProps> = ({ value }) => {
  const renderDots = () => {
    switch (value) {
      case 1:
        return <div className="dot dot-center" />;
      case 2:
        return (
          <>
            <div className="dot dot-top-left" />
            <div className="dot dot-bottom-right" />
          </>
        );
      case 3:
        return (
          <>
            <div className="dot dot-top-left" />
            <div className="dot dot-center" />
            <div className="dot dot-bottom-right" />
          </>
        );
      case 4:
        return (
          <>
            <div className="dot dot-top-left" />
            <div className="dot dot-top-right" />
            <div className="dot dot-bottom-left" />
            <div className="dot dot-bottom-right" />
          </>
        );
      case 5:
        return (
          <>
            <div className="dot dot-top-left" />
            <div className="dot dot-top-right" />
            <div className="dot dot-center" />
            <div className="dot dot-bottom-left" />
            <div className="dot dot-bottom-right" />
          </>
        );
      case 6:
        return (
          <>
            <div className="dot dot-top-left" />
            <div className="dot dot-top-right" />
            <div className="dot dot-middle-left" />
            <div className="dot dot-middle-right" />
            <div className="dot dot-bottom-left" />
            <div className="dot dot-bottom-right" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dice-face">
      {renderDots()}
    </div>
  );
};