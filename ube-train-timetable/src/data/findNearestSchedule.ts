import { trainSchedules, TrainSchedule } from "./trainData";

const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const updateList = (
  line: string,
  direction: string,
  station: string
): TrainSchedule | null => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  console.log("▶ 現在時刻:", now.toTimeString(), "→ currentMinutes:", currentMinutes);

  const candidates = trainSchedules.filter(
    (s) => s.line === line && s.direction === direction
  );

  console.log("▶ 対象スケジュール数:", candidates.length);

  let best: { schedule: TrainSchedule; time: number } | null = null;

  for (const schedule of candidates) {
    const t = schedule.times.find((t) => t.station === station);
    if (t) {
      const tMin = timeToMinutes(t.time);
      console.log(`⏱ 駅: ${station}, 電車時刻: ${t.time}（${tMin}分）, 現在: ${currentMinutes}分`);

      if (tMin >= currentMinutes) {
        console.log("✅ この電車は未来なので候補になります");
        if (!best || tMin < best.time) {
          console.log("➡ この電車が今のところ最適です");
          best = { schedule, time: tMin };
        }
      } else {
        console.log("❌ この電車は過去のため除外");
      }
    } else {
      console.log(`⚠ 駅 "${station}" はこのスケジュールに存在しません`);
    }
  }

  if (best) {
    console.log("🎯 最も近い電車の出発時刻:", best.time, "分");
    return best.schedule;
  } else {
    console.log("🚫 条件に合う電車が見つかりませんでした");
    return null;
  }
};
