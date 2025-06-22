"use client";
// src/components/ClockDisplay.tsx
type Props = {
  now: Date;
};

const ClockDisplay: React.FC<Props> = ({ now }) => {
  const timeStr = now.toLocaleTimeString("ja-JP", { hour12: false });

  return (
    <div className="text-3xl mt-2 bg-glay-200 rounded-lg p-4">{/* 背景を緑に */}
      現在時刻：<span className="font-bold text-5xl align-middle">{timeStr}</span>
    </div>
  );
};

export default ClockDisplay;
