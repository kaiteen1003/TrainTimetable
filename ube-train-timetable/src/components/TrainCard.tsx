"use client";

import { useState, useEffect } from "react";
import { TrainSchedule } from "../data/trainData";
import { getNextTrain, getWaitingTime } from "../data/trainData";
import { updateList } from "../data/findNearestSchedule";

interface TrainCardProps {
  schedule: TrainSchedule;
}

export const TrainCard: React.FC<TrainCardProps> = ({ schedule }) => {
  const [selectedStation, setSelectedStation] = useState<string>("");
  const [selectedSchedule, setSelectedSchedule] = useState<TrainSchedule | null>(null);
  const [nextTrainInfo, setNextTrainInfo] = useState<{
    time: string;
    waitingTime: string;
  } | null>(null);

useEffect(() => {
  if (selectedStation) {
    const nearest =  updateList(
      schedule.line,
      schedule.direction,
      selectedStation
    );
      console.log("最近のスケジュール:", nearest); // ←ここで実際に16時台が選ばれてるか確認
    if (nearest) {
      setSelectedSchedule(nearest);

      const nextTrain = getNextTrain(
        nearest.line,
        nearest.direction,
        selectedStation
      );
      if (nextTrain) {
        const waitingTime = getWaitingTime(
          nearest.line,
          nearest.direction,
          selectedStation
        );
        setNextTrainInfo({
          time: nextTrain.time,
          waitingTime,
        });
      }
    }
  }
}, [selectedStation]);


  return (
    <div className="bg-white rounded-lg shadow-2xs p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        {schedule.line} {schedule.direction}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          駅を選択
        </label>
        <select
          value={selectedStation}
          onChange={(e) => setSelectedStation(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="">駅を選択してください</option>
          {schedule.times.map((time) => (
            <option key={time.station} value={time.station}>
              {time.station}
            </option>
          ))}
        </select>
      </div>

      {nextTrainInfo && (
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-medium text-blue-800 mb-2">次の電車</h3>
          <p className="text-blue-600">出発時刻: {nextTrainInfo.time}</p>
          <p className="text-blue-600">残り時間: {nextTrainInfo.waitingTime}</p>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                駅名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                時刻
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
          {(selectedSchedule ?? schedule).times.map((time, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 ${
                  selectedStation === time.station ? "bg-blue-50" : ""
                }`}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {time.station}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {time.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};