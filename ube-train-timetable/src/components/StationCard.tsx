import React from "react";

interface StationCardProps {
  station: string;
  time: string;
}

export default function StationCard({ station, time }: StationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <p className="text-lg font-semibold">{station}</p>
      <p className="text-gray-600">{time}</p>
    </div>
  );
}
