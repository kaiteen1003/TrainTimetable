export interface TrainTime {
  station: string;
  time: string;
}

export interface TrainSchedule {
  line: string;
  direction: string;
  times: TrainTime[];
}

export const trainSchedules: TrainSchedule[] = [
  // 新山口方面（宇部発）
  //この書き方に従って埋めていきたいです。
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "05:22" },
      { station: "岩鼻", time: "05:28" },
      { station: "居能", time: "05:31" },
      { station: "宇部新川", time: "05:37" },
      { station: "琴芝", time: "05:40" },
      { station: "東新川", time: "05:42" },
      { station: "宇部岬", time: "05:45" },
      { station: "草江", time: "05:48" },
      { station: "常盤", time: "05:51" },
      { station: "床波", time: "05:57" },
      { station: "丸尾", time: "06:01" },
      { station: "岐波", time: "06:05" },
      { station: "阿知須", time: "06:09" },
      { station: "岩倉", time: "06:12" },
      { station: "周防佐山", time: "06:15" },
      { station: "深溝", time: "06:18" },
      { station: "上嘉川", time: "06:23" },
      { station: "新山口", time: "06:27" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "06:22" },
      { station: "岩鼻", time: "06:28" },
      { station: "居能", time: "06:31" },
      { station: "宇部新川", time: "06:37" },
      { station: "琴芝", time: "06:40" },
      { station: "東新川", time: "06:42" },
      { station: "宇部岬", time: "06:45" },
      { station: "草江", time: "06:48" },
      { station: "常盤", time: "06:51" },
      { station: "床波", time: "06:57" },
      { station: "丸尾", time: "07:01" },
      { station: "岐波", time: "07:05" },
      { station: "阿知須", time: "07:09" },
      { station: "岩倉", time: "07:12" },
      { station: "周防佐山", time: "07:15" },
      { station: "深溝", time: "07:18" },
      { station: "上嘉川", time: "07:23" },
      { station: "新山口", time: "07:27" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "07:22" },
      { station: "岩鼻", time: "07:28" },
      { station: "居能", time: "07:31" },
      { station: "宇部新川", time: "07:37" },
      { station: "琴芝", time: "07:40" },
      { station: "東新川", time: "07:42" },
      { station: "宇部岬", time: "07:45" },
      { station: "草江", time: "07:48" },
      { station: "常盤", time: "07:51" },
      { station: "床波", time: "07:57" },
      { station: "丸尾", time: "08:01" },
      { station: "岐波", time: "08:05" },
      { station: "阿知須", time: "08:09" },
      { station: "岩倉", time: "08:12" },
      { station: "周防佐山", time: "08:15" },
      { station: "深溝", time: "08:18" },
      { station: "上嘉川", time: "08:23" },
      { station: "新山口", time: "08:27" },
    ],
  },
  // 宇部方面（新山口発）
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "05:55" },
      { station: "上嘉川", time: "05:59" },
      { station: "深溝", time: "06:04" },
      { station: "周防佐山", time: "06:07" },
      { station: "岩倉", time: "06:10" },
      { station: "阿知須", time: "06:13" },
      { station: "岐波", time: "06:17" },
      { station: "丸尾", time: "06:21" },
      { station: "床波", time: "06:27" },
      { station: "常盤", time: "06:31" },
      { station: "草江", time: "06:34" },
      { station: "宇部岬", time: "06:37" },
      { station: "東新川", time: "06:40" },
      { station: "琴芝", time: "06:42" },
      { station: "宇部新川", time: "06:45" },
      { station: "居能", time: "06:51" },
      { station: "岩鼻", time: "06:54" },
      { station: "宇部", time: "07:00" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "06:55" },
      { station: "上嘉川", time: "06:59" },
      { station: "深溝", time: "07:04" },
      { station: "周防佐山", time: "07:07" },
      { station: "岩倉", time: "07:10" },
      { station: "阿知須", time: "07:13" },
      { station: "岐波", time: "07:17" },
      { station: "丸尾", time: "07:21" },
      { station: "床波", time: "07:27" },
      { station: "常盤", time: "07:31" },
      { station: "草江", time: "07:34" },
      { station: "宇部岬", time: "07:37" },
      { station: "東新川", time: "07:40" },
      { station: "琴芝", time: "07:42" },
      { station: "宇部新川", time: "07:45" },
      { station: "居能", time: "07:51" },
      { station: "岩鼻", time: "07:54" },
      { station: "宇部", time: "08:00" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "07:55" },
      { station: "上嘉川", time: "07:59" },
      { station: "深溝", time: "08:04" },
      { station: "周防佐山", time: "08:07" },
      { station: "岩倉", time: "08:10" },
      { station: "阿知須", time: "08:13" },
      { station: "岐波", time: "08:17" },
      { station: "丸尾", time: "08:21" },
      { station: "床波", time: "08:27" },
      { station: "常盤", time: "08:31" },
      { station: "草江", time: "08:34" },
      { station: "宇部岬", time: "08:37" },
      { station: "東新川", time: "08:40" },
      { station: "琴芝", time: "08:42" },
      { station: "宇部新川", time: "08:45" },
      { station: "居能", time: "08:51" },
      { station: "岩鼻", time: "08:54" },
      { station: "宇部", time: "09:00" },
    ],
  },
  // 宇部方面の時刻表（逆方向）
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "05:45" },
      { station: "厚狭", time: "06:15" },
      { station: "小野田", time: "06:25" },
      { station: "宇部", time: "06:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "06:45" },
      { station: "厚狭", time: "07:15" },
      { station: "小野田", time: "07:25" },
      { station: "宇部", time: "07:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "07:45" },
      { station: "厚狭", time: "08:15" },
      { station: "小野田", time: "08:25" },
      { station: "宇部", time: "08:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "08:45" },
      { station: "厚狭", time: "09:15" },
      { station: "小野田", time: "09:25" },
      { station: "宇部", time: "09:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "09:45" },
      { station: "厚狭", time: "10:15" },
      { station: "小野田", time: "10:25" },
      { station: "宇部", time: "10:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "10:45" },
      { station: "厚狭", time: "11:15" },
      { station: "小野田", time: "11:25" },
      { station: "宇部", time: "11:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "11:45" },
      { station: "厚狭", time: "12:15" },
      { station: "小野田", time: "12:25" },
      { station: "宇部", time: "12:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "12:45" },
      { station: "厚狭", time: "13:15" },
      { station: "小野田", time: "13:25" },
      { station: "宇部", time: "13:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "13:45" },
      { station: "厚狭", time: "14:15" },
      { station: "小野田", time: "14:25" },
      { station: "宇部", time: "14:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "14:45" },
      { station: "厚狭", time: "15:15" },
      { station: "小野田", time: "15:25" },
      { station: "宇部", time: "15:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "15:45" },
      { station: "厚狭", time: "16:15" },
      { station: "小野田", time: "16:25" },
      { station: "宇部", time: "16:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "16:45" },
      { station: "厚狭", time: "17:15" },
      { station: "小野田", time: "17:25" },
      { station: "宇部", time: "17:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "17:45" },
      { station: "厚狭", time: "18:15" },
      { station: "小野田", time: "18:25" },
      { station: "宇部", time: "18:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "18:45" },
      { station: "厚狭", time: "19:15" },
      { station: "小野田", time: "19:25" },
      { station: "宇部", time: "19:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "19:45" },
      { station: "厚狭", time: "20:15" },
      { station: "小野田", time: "20:25" },
      { station: "宇部", time: "20:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "20:45" },
      { station: "厚狭", time: "21:15" },
      { station: "小野田", time: "21:25" },
      { station: "宇部", time: "21:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "21:45" },
      { station: "厚狭", time: "22:15" },
      { station: "小野田", time: "22:25" },
      { station: "宇部", time: "22:38" },
    ],
  },
];

// 路線一覧を取得する関数
export const getLines = (): string[] => {
  const lines = new Set(trainSchedules.map((schedule) => schedule.line));
  return Array.from(lines);
};

// 指定された路線の行き先一覧を取得する関数
export const getDirections = (line: string): string[] => {
  const directions = new Set(
    trainSchedules
      .filter((schedule) => schedule.line === line)
      .map((schedule) => schedule.direction)
  );
  return Array.from(directions);
};

// 指定された路線と行き先の時刻表を取得する関数
export const getSchedule = (
  line: string,
  direction: string
): TrainSchedule | undefined => {
  return trainSchedules.find(
    (schedule) => schedule.line === line && schedule.direction === direction
  );
};

// 時刻を分に変換する関数
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

// 現在時刻から最も近い電車の時刻を取得する関数
export const getNextTrain = (
  line: string,
  direction: string,
  station: string
): TrainTime | null => {
  const schedule = getSchedule(line, direction);
  if (!schedule) return null;

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 指定された駅の時刻を取得
  const stationTime = schedule.times.find((time) => time.station === station);
  if (!stationTime) return null;

  const trainMinutes = timeToMinutes(stationTime.time);

  // 現在時刻より後の電車を探す
  if (trainMinutes > currentMinutes) {
    return stationTime;
  }

  // 翌日の電車を探す
  const nextDaySchedule = trainSchedules.find(
    (s) => s.line === line && s.direction === direction
  );
  if (nextDaySchedule) {
    const nextDayTime = nextDaySchedule.times.find(
      (time) => time.station === station
    );
    if (nextDayTime) {
      return nextDayTime;
    }
  }

  return null;
};

// 指定された駅の次の電車までの待ち時間を計算する関数
export function getWaitingTime(
  line: string,
  direction: string,
  station: string
): string {
  const nextTrain = getNextTrain(line, direction, station);
  if (!nextTrain) return "本日の運行は終了しました";

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const trainMinutes = timeToMinutes(nextTrain.time);

  let waitingMinutes = trainMinutes - currentMinutes;

  // 夜中の時間帯の場合（現在時刻が最終便より後）
  if (waitingMinutes < 0) {
    // 次の日の始発時刻を取得
    const firstTrain = trainSchedules
      .filter(
        (schedule) => schedule.line === line && schedule.direction === direction
      )
      .sort(
        (a, b) =>
          timeToMinutes(a.times[0].time) - timeToMinutes(b.times[0].time)
      )[0];

    if (firstTrain) {
      const firstTrainTime = firstTrain.times.find(
        (t) => t.station === station
      );
      if (firstTrainTime) {
        // 24時間（1440分）を加算して次の日の始発までの時間を計算
        waitingMinutes =
          timeToMinutes(firstTrainTime.time) + 1440 - currentMinutes;
      }
    }
  }

  if (waitingMinutes <= 0) return "まもなく到着";
  if (waitingMinutes < 60) return `${waitingMinutes}分後`;

  const hours = Math.floor(waitingMinutes / 60);
  const minutes = waitingMinutes % 60;
  return `${hours}時間${minutes}分後`;
}
