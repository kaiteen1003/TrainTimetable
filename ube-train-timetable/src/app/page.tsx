// src/app/page.tsx
'use client';
import { useEffect, useState } from 'react';
import TrainDirectionCard from '@/components/TrainDirectionCard';
import ClockDisplay from '@/components/ClockDisplay';

export default function HomePage() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen p-4 font-mono">
      <div className="text-3xl font-bold">鶴舞 駅 列車状況</div>
      <div className="text-right text-sm mt-1">
        {now.toLocaleDateString('ja-JP', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' })}
      </div>
      <ClockDisplay now={now} />
      <div className="mt-6 space-y-6">
        <TrainDirectionCard
          direction="JR-名古屋"
          firstTime="15:08"
          firstType="区間快速"
          firstDest="名古屋"
          secondTime="15:15"
          secondType="普通"
          secondDest="名古屋"
          message="あと約3分あきらめよう。"
          subMessage="あと約10分走れば間に合う？"
        />
        <TrainDirectionCard
          direction="JR-中津川・多治見"
          firstTime="15:09"
          firstType="区間快速"
          firstDest="瑞浪"
          secondTime="15:19"
          secondType="普通"
          secondDest="多治見"
          message="あと約4分あきらめよう。"
          subMessage="あと約14分"
        />
      </div>
    </div>
  );
}
