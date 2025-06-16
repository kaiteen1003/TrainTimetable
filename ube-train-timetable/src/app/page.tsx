"use client";

import { useState } from "react";

interface TrainTime {
  station: string;
  time: string;
}

interface TrainSchedule {
  line: string;
  direction: string;
  times: TrainTime[];
}

export default function Home() {
  const [selectedLine, setSelectedLine] = useState<string>("宇部線");
  const [selectedDirection, setSelectedDirection] =
    useState<string>("宇部新川行き");

  // サンプルダイヤデータ
  const trainSchedules: TrainSchedule[] = [
    {
      line: "宇部線",
      direction: "宇部新川行き",
      times: [
        { station: "新山口", time: "06:00" },
        { station: "嘉川", time: "06:15" },
        { station: "宇部", time: "06:30" },
        { station: "宇部新川", time: "06:45" },
      ],
    },
    {
      line: "宇部線",
      direction: "新山口行き",
      times: [
        { station: "宇部新川", time: "06:30" },
        { station: "宇部", time: "06:45" },
        { station: "嘉川", time: "07:00" },
        { station: "新山口", time: "07:15" },
      ],
    },
  ];

  const filteredSchedule = trainSchedules.find(
    (schedule) =>
      schedule.line === selectedLine && schedule.direction === selectedDirection
  );

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          宇部市電車ダイヤ
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              路線を選択
            </label>
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="宇部線">宇部線</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              行き先を選択
            </label>
            <select
              value={selectedDirection}
              onChange={(e) => setSelectedDirection(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="宇部新川行き">宇部新川行き</option>
              <option value="新山口行き">新山口行き</option>
            </select>
          </div>

          {filteredSchedule && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">
                {filteredSchedule.line} {filteredSchedule.direction}
              </h2>
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
                    {filteredSchedule.times.map((time, index) => (
                      <tr key={index}>
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
          )}
        </div>
      </div>
    </main>
  );
}
