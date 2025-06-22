"use client";

import { useState, useEffect } from "react";

// Mock data structures (you'll replace these with your actual imports)
interface TrainTime {
  station: string;
  time: string;
}

interface TrainSchedule {
  line: string;
  direction: string;
  times: TrainTime[];
}

// Mock functions (replace with your actual functions)
const mockUpdateList = (line: string, direction: string, station: string): TrainSchedule | null => {
  return null;
};

const mockGetNextTrain = (line: string, direction: string, station: string) => {
  return { time: "14:30" };
};

const mockGetWaitingTime = (line: string, direction: string, station: string) => {
  return "5分";
};

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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedStation) {
      setIsLoading(true);
      
      try {
        const nearest = mockUpdateList(
          schedule.line,
          schedule.direction,
          selectedStation
        );
        
        console.log("最近のスケジュール:", nearest);
        
        if (nearest) {
          setSelectedSchedule(nearest);

          const nextTrain = mockGetNextTrain(
            nearest.line,
            nearest.direction,
            selectedStation
          );
          
          if (nextTrain) {
            const waitingTime = mockGetWaitingTime(
              nearest.line,
              nearest.direction,
              selectedStation
            );
            
            setNextTrainInfo({
              time: nextTrain.time,
              waitingTime,
            });
          } else {
            setNextTrainInfo(null);
          }
        } else {
          setSelectedSchedule(null);
          setNextTrainInfo(null);
        }
      } catch (error) {
        console.error("Error fetching train information:", error);
        setSelectedSchedule(null);
        setNextTrainInfo(null);
      } finally {
        setIsLoading(false);
      }
    } else {
      setSelectedSchedule(null);
      setNextTrainInfo(null);
    }
  }, [selectedStation, schedule.line, schedule.direction]);

  const handleStationChange = (station: string) => {
    if (!isLoading) {
      setSelectedStation(station);
    }
  };

  const displaySchedule = selectedSchedule || schedule;

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black backdrop-blur-lg rounded-3xl shadow-2xl border border-slate-700/50 p-8 mb-8 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
      {/* Glassmorphism overlay with dark theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 via-slate-700/10 to-black/30 backdrop-blur-sm rounded-3xl"></div>
      
      {/* Complex animated background patterns */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/30 to-blue-600/40 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-600/25 to-indigo-700/35 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-20 left-1/2 w-60 h-60 bg-gradient-to-r from-teal-400/20 to-emerald-500/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 right-20 w-4 h-4 bg-cyan-400/40 rounded-full animate-bounce delay-300"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-purple-400/40 rounded-full animate-bounce delay-700"></div>
      <div className="absolute top-1/2 right-10 w-2 h-2 bg-teal-400/40 rounded-full animate-ping delay-1000"></div>
      
      <div className="relative z-10">
        {/* Header with modern typography */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent leading-tight drop-shadow-lg">
              {schedule.line}
            </h2>
            <p className="text-lg font-semibold text-slate-300 flex items-center mt-1">
              <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-2 animate-pulse shadow-lg shadow-cyan-400/50"></span>
              {schedule.direction}
            </p>
          </div>
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-cyan-500/30 border border-cyan-400/20">
            <svg className="w-8 h-8 text-white drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>

        {/* Ultra-modern station selector with cards */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-cyan-300 uppercase tracking-wider drop-shadow-sm flex items-center">
              <svg className="w-5 h-5 mr-2 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Select Station
            </h3>
            {selectedStation && (
              <button
                onClick={() => setSelectedStation("")}
                className="px-4 py-2 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 hover:text-white text-sm font-medium rounded-xl transition-all duration-300 border border-slate-600/30"
              >
                Clear Selection
              </button>
            )}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-96 overflow-y-auto custom-scrollbar">
            {schedule.times.map((time, index) => (
              <div
                key={time.station}
                onClick={() => !isLoading && setSelectedStation(time.station)}
                className={`group relative p-4 rounded-2xl border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  selectedStation === time.station
                    ? "bg-gradient-to-br from-cyan-900/60 to-blue-900/60 border-cyan-400/60 shadow-2xl shadow-cyan-500/25"
                    : "bg-slate-800/40 border-slate-600/30 hover:border-cyan-500/50 hover:bg-slate-700/50 hover:shadow-xl hover:shadow-cyan-500/10"
                } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                {/* Station card background effects */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Selection indicator */}
                {selectedStation === time.station && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50 animate-pulse">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                
                <div className="relative z-10">
                  {/* Station icon */}
                  <div className={`w-12 h-12 rounded-xl mb-3 flex items-center justify-center transition-all duration-300 ${
                    selectedStation === time.station
                      ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30"
                      : "bg-slate-700/50 group-hover:bg-slate-600/70"
                  }`}>
                    <svg className={`w-6 h-6 transition-colors duration-300 ${
                      selectedStation === time.station ? "text-white" : "text-slate-400 group-hover:text-cyan-400"
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-14 0H3m2 0h2m0 0h7m-7 0v-9a2 2 0 012-2h2m2 0V7a2 2 0 012-2h2a2 2 0 012 2v2m0 0v10" />
                    </svg>
                  </div>
                  
                  {/* Station name */}
                  <h4 className={`text-lg font-bold mb-2 transition-colors duration-300 ${
                    selectedStation === time.station
                      ? "text-cyan-200"
                      : "text-slate-200 group-hover:text-cyan-300"
                  }`}>
                    {time.station}
                  </h4>
                  
                  {/* Time display */}
                  <div className="flex items-end justify-between">
                    <span className={`text-2xl font-black transition-all duration-300 ${
                      selectedStation === time.station
                        ? "bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
                        : "text-slate-300 group-hover:text-cyan-400"
                    }`}>
                      {time.time}
                    </span>
                    
                    {/* Position indicator */}
                    <span className={`text-xs font-medium px-2 py-1 rounded-full transition-all duration-300 ${
                      selectedStation === time.station
                        ? "bg-cyan-500/20 text-cyan-300"
                        : "bg-slate-700/50 text-slate-400 group-hover:bg-slate-600/50 group-hover:text-slate-300"
                    }`}>
                      #{index + 1}
                    </span>
                  </div>
                </div>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(51, 65, 85, 0.3);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: linear-gradient(to bottom, #06b6d4, #3b82f6);
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(to bottom, #0891b2, #2563eb);
          }
        `}</style>

        {/* Loading state with modern animation */}
        {isLoading && (
          <div className="mb-8 p-6 bg-slate-800/60 backdrop-blur-lg rounded-3xl border border-slate-600/30 shadow-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 border-4 border-slate-600 border-t-cyan-400 rounded-full animate-spin shadow-lg"></div>
              <p className="text-slate-300 font-medium">データを読み込み中...</p>
            </div>
          </div>
        )}

        {/* Next train info with dramatic styling */}
        {nextTrainInfo && !isLoading && (
          <div className="mb-8 p-8 bg-gradient-to-r from-cyan-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl border border-cyan-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-indigo-800/90 backdrop-blur-sm"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 animate-pulse shadow-lg shadow-cyan-400/50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-black text-white mb-6 flex items-center drop-shadow-lg">
                <span className="w-3 h-3 bg-emerald-400 rounded-full mr-3 animate-pulse shadow-lg shadow-emerald-400/50"></span>
                Next Train
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center md:text-left">
                  <p className="text-cyan-100 text-sm font-semibold uppercase tracking-wider mb-2 drop-shadow-sm">Departure Time</p>
                  <p className="text-white font-black text-5xl md:text-6xl leading-none tracking-tight drop-shadow-2xl">
                    {nextTrainInfo.time}
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-cyan-100 text-sm font-semibold uppercase tracking-wider mb-2 drop-shadow-sm">Time Remaining</p>
                  <p className="text-yellow-300 font-black text-3xl md:text-4xl leading-none drop-shadow-lg">
                    {nextTrainInfo.waitingTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modern timetable */}
        <div className="overflow-hidden rounded-3xl bg-slate-800/70 backdrop-blur-lg border border-slate-600/40 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-600/50">
                  <th className="px-8 py-6 text-left text-xs font-black text-cyan-300 uppercase tracking-widest drop-shadow-sm">
                    Station
                  </th>
                  <th className="px-8 py-6 text-left text-xs font-black text-cyan-300 uppercase tracking-widest drop-shadow-sm">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-600/30">
                {displaySchedule.times.map((time, index) => (
                  <tr
                    key={`${time.station}-${index}`}
                    className={`group hover:bg-slate-700/50 transition-all duration-300 ${
                      selectedStation === time.station 
                        ? "bg-gradient-to-r from-cyan-900/40 to-blue-900/40 shadow-lg border-l-4 border-cyan-400" 
                        : "hover:shadow-md"
                    }`}
                  >
                    <td className="px-8 py-6 whitespace-nowrap">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          selectedStation === time.station 
                            ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50" 
                            : "bg-slate-500 group-hover:bg-cyan-400"
                        }`}></div>
                        <div>
                          <span className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-sm">
                            {time.station}
                          </span>
                          {selectedStation === time.station && (
                            <div className="inline-flex items-center ml-4 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg animate-pulse">
                              Selected
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 whitespace-nowrap">
                      <span className="text-3xl font-black bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                        {time.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};