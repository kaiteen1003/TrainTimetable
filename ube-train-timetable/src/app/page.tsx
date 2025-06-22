"use client"; // クライアントサイドで実行されることを指定（Next.jsのApp Router環境）

import { useState, useEffect } from "react"; // Reactのステートと副作用フックをインポート
import { TrainCard } from "../components/TrainCard"; // 電車の情報を表示するコンポーネント
import ClockDisplay from "../components/ClockDisplay"; // 現在時刻を表示するコンポーネント
import QrReaderCard from "../components/QrReaderCard";

// データ取得用の関数や型をインポート
import {
  getLines, // 路線一覧を取得
  getDirections, // 指定路線の行き先一覧を取得
  getSchedule, // 指定路線と行き先のダイヤを取得
  TrainSchedule, // ダイヤ情報の型定義
} from "../data/trainData";

export default function Home() {
  // 選択中の路線・行き先・各種データを保持するステート
  const [selectedLine, setSelectedLine] = useState<string>(""); // 選択された路線
  const [selectedDirection, setSelectedDirection] = useState<string>(""); // 選択された行き先
  const [lines, setLines] = useState<string[]>([]); // 路線一覧
  const [directions, setDirections] = useState<string[]>([]); // 行き先一覧
  const [schedules, setSchedules] = useState<TrainSchedule[]>([]); // ダイヤ情報
  const [now, setNow] = useState<Date | null>(null); // 現在時刻（初期値はnull）

  // 初回マウント時に路線一覧を取得し、最初の路線を選択状態に設定
  useEffect(() => {
    const availableLines = getLines();
    setLines(availableLines);
    if (availableLines.length > 0) {
      setSelectedLine(availableLines[0]);
    }
  }, []);

  // 選択中の路線が変更されたときに、行き先一覧を取得し最初の行き先を選択状態に設定
  useEffect(() => {
    if (selectedLine) {
      const availableDirections = getDirections(selectedLine);
      setDirections(availableDirections);
      if (availableDirections.length > 0) {
        setSelectedDirection(availableDirections[0]);
      }
    }
  }, [selectedLine]);

  // 選択中の路線・行き先が変更されたときに、該当のダイヤ情報を取得して表示
  useEffect(() => {
    if (selectedLine && selectedDirection) {
      const schedule = getSchedule(selectedLine, selectedDirection);
      if (schedule) {
        setSchedules([schedule]); // 今は1件のみ表示だが、将来拡張しやすいように配列で保持
      }
    }
  }, [selectedLine, selectedDirection]);

  // 現在時刻を1秒ごとに更新（ClockDisplayに渡すため）
  useEffect(() => {
    setNow(new Date()); // 初回マウント時に現在時刻をセット
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer); // アンマウント時にタイマー停止
  }, []);

  // JSXの描画
  return (
    <main className="min-h-screen  bg-gray-100">
      <div className="relative w-full  ">
      {/* 背景画像 */}
      <img
        src="/images/Mainbg.png"
        alt="観光背景"
        className="w-full h-auto object-cover"
      />

      {/* キャッチコピー */}
      <div className="absolute inset-0 flex items-center justify-center">
<h1 className="text-white text-8xl md:text-6xl font-bold drop-shadow-lg text-center px-4 animate-fadeInUp">
  次の発車は、<br className="md:hidden" />
  思い出行き。
</h1>

      </div>
    </div>
      <div className="max-w-4xl mx-auto">
        <QrReaderCard />
        {/* 現在時刻表示（nowがセットされているときのみ表示） */}
        {now && <ClockDisplay now={now} />}

        {/* 選択フォーム：路線と行き先 */}
        <div className="bg-white rounded-lg shadow-2xs p-6 mb-8">
          {/* 路線選択セレクトボックス */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              路線を選択
            </label>
            <select
              value={selectedLine}
              onChange={(e) => setSelectedLine(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {lines.map((line) => (
                <option key={line} value={line}>
                  {line}
                </option>
              ))}
            </select>
          </div>

          {/* 行き先選択セレクトボックス */}
          <div className="mb-6">
            <label className="blocedck text-sm font-medium text-gray-700 mb-2">
              方面を選択
            </label>
            <select
              value={selectedDirection}
              onChange={(e) => setSelectedDirection(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              {directions.map((direction) => (
                <option key={direction} value={direction}>
                  {direction}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 電車ダイヤの一覧（カード形式） */}
        <div className="space-y-4">
          {schedules.map((schedule, index) => (
            <TrainCard key={index} schedule={schedule} />
          ))}
        </div>
      </div>
    </main>
  );
}
