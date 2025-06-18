// src/components/TrainDirectionCard.tsx
import React from 'react';

type Props = {
  direction: string;
  firstTime: string;
  firstType: string;
  firstDest: string;
  secondTime: string;
  secondType: string;
  secondDest: string;
  message?: string;
  subMessage?: string;
};

const TrainDirectionCard: React.FC<Props> = ({
  direction, firstTime, firstType, firstDest, secondTime, secondType, secondDest, message, subMessage
}) => {
  return (
    <div className="border border-white rounded-lg p-4">
      <div className="text-xl font-bold text-orange-400 mb-2">{direction} 方面</div>

      <div className="text-white text-3xl font-bold">
        先発：<span className="text-5xl">{firstTime}</span> 発
      </div>
      <div className="mt-2">
        <span className="bg-green-500 text-white px-2 py-1 rounded mr-2">{firstType}</span>
        {firstDest} 行き
      </div>

      <div className="mt-3 text-sm text-white">
        次発：{secondTime} 発　{secondType} {secondDest} 行き
      </div>

      {message && (
        <div className="mt-2 text-red-400 text-sm">
          {message}
        </div>
      )}
      {subMessage && (
        <div className="text-yellow-300 text-sm">{subMessage}</div>
      )}
    </div>
  );
};

export default TrainDirectionCard;
