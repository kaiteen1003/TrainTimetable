"use client";
// src/components/ClockDisplay.tsx
type Props = {
  now: Date;
};

const ClockDisplay: React.FC<Props> = ({ now }) => {
  const timeStr = now.toLocaleTimeString("ja-JP", { hour12: false });

  return (
    <div className="text-lg mt-2">
      現在時刻：<span className=" font-bold">{timeStr}</span>
    </div>
  );
};

export default ClockDisplay;
