
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
  //新山口方面（宇部発）、新山口駅からは出発しようがないので削除
  //この書き方に従って埋めていきたいです。
  //個人的には駅を選んで、その駅にいつ次の電車が来るかを表示したいです。
  //宇部線の宇部駅に限っては片方のみでオケマル。
  {
    // 暫定的にこのカタマリを一番上に配置する。
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "06:23" },
      { station: "岩鼻", time: "06:29" },
      { station: "居能", time: "06:32" },
      { station: "宇部新川", time: "06:47" },
      { station: "琴芝", time: "06:49" },
      { station: "東新川", time: "06:51" },
      { station: "宇部岬", time: "06:55" },
      { station: "草江", time: "06:57" },
      { station: "常盤", time: "07:00" },
      { station: "床波", time: "07:11" },
      { station: "丸尾", time: "07:01" },
      { station: "岐波", time: "07:15" },
      { station: "阿知須", time: "07:20" },
      { station: "岩倉", time: "07:23" },
      { station: "周防佐山", time: "07:25" },
      { station: "深溝", time: "07:33" },
      { station: "上嘉川", time: "07:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部新川", time: "05:22" },
      { station: "琴芝", time: "05:25" },
      { station: "東新川", time: "05:27" },
      { station: "宇部岬", time: "05:30" },
      { station: "草江", time: "05:33" },
      { station: "常盤", time: "05:36" },
      { station: "床波", time: "05:39" },
      { station: "丸尾", time: "05:45" },
      { station: "岐波", time: "05:49" },
      { station: "阿知須", time: "05:54" },
      { station: "岩倉", time: "05:57" },
      { station: "周防佐山", time: "05:59" },
      { station: "深溝", time: "06:05" },
      { station: "上嘉川", time: "06:09" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部新川", time: "06:07" },
      { station: "琴芝", time: "06:09" },
      { station: "東新川", time: "06:11" },
      { station: "宇部岬", time: "06:15" },
      { station: "草江", time: "06:17" },
      { station: "常盤", time: "06:20" },
      { station: "床波", time: "06:30" },
      { station: "丸尾", time: "06:37" },
      { station: "岐波", time: "06:41" },
      { station: "阿知須", time: "06:52" },
      { station: "岩倉", time: "06:55" },
      { station: "周防佐山", time: "06:57" },
      { station: "深溝", time: "07:04" },
      { station: "上嘉川", time: "07:08" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "06:44" },
      { station: "岩鼻", time: "06:49" },
      { station: "居能", time: "06:52" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "居能", time: "07:11" },
      { station: "宇部新川", time: "07:17" },
      { station: "琴芝", time: "07:20" },
      { station: "東新川", time: "07:22" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "07:31" },
      { station: "岩鼻", time: "07:36" },
      { station: "居能", time: "07:40" },
      { station: "宇部新川", time: "07:45" },
      { station: "琴芝", time: "07:48" },
      { station: "東新川", time: "07:50" },
      { station: "宇部岬", time: "07:53" },
      { station: "草江", time: "07:56" },
      { station: "常盤", time: "07:59" },
      { station: "床波", time: "08:03" },
      { station: "丸尾", time: "08:09" },
      { station: "岐波", time: "08:13" },
      { station: "阿知須", time: "08:18" },
      { station: "岩倉", time: "08:20" },
      { station: "周防佐山", time: "08:23" },
      { station: "深溝", time: "08:38" },
      { station: "上嘉川", time: "08:43" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "07:46" },
      { station: "岩鼻", time: "07:52" },
      { station: "居能", time: "07:54" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "08:06" },
      { station: "岩鼻", time: "08:13" },
      { station: "伊能", time: "08:16" },
      { station: "宇部新川", time: "08:22" },
      { station: "琴芝", time: "08:24" },
      { station: "東新川", time: "08:26" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "08:31" },
      { station: "岩鼻", time: "08:37" },
      { station: "居能", time: "08:40" },
      { station: "宇部新川", time: "08:46" },
      { station: "琴芝", time: "08:49" },
      { station: "東新川", time: "08:51" },
      { station: "宇部岬", time: "08:54" },
      { station: "草江", time: "08:57" },
      { station: "常盤", time: "09:00" },
      { station: "床波", time: "09:06" },
      { station: "丸尾", time: "09:12" },
      { station: "岐波", time: "09:16" },
      { station: "阿知須", time: "09:21" },
      { station: "岩倉", time: "09:24" },
      { station: "周防佐山", time: "09:26" },
      { station: "深溝", time: "09:34" },
      { station: "上嘉川", time: "09:38" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "09:00" },
      { station: "岩鼻", time: "09:05" },
      { station: "居能", time: "09:08" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "09:51" },
      { station: "岩鼻", time: "09:55" },
      { station: "居能", time: "09:58" },
      { station: "宇部新川", time: "10:03" },
      { station: "琴芝", time: "10:06" },
      { station: "東新川", time: "10:10" },
      { station: "宇部岬", time: "10:13" },
      { station: "草江", time: "10:15" },
      { station: "常盤", time: "10:18" },
      { station: "床波", time: "10:21" },
      { station: "丸尾", time: "10:28" },
      { station: "岐波", time: "10:32" },
      { station: "阿知須", time: "10:38" },
      { station: "岩倉", time: "10:41" },
      { station: "周防佐山", time: "10:43" },
      { station: "深溝", time: "10:46" },
      { station: "上嘉川", time: "10:51" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "11:19" },
      { station: "岩鼻", time: "11:25" },
      { station: "居能", time: "11:28" },
      { station: "宇部新川", time: "11:33" },
      { station: "琴芝", time: "11:36" },
      { station: "東新川", time: "11:38" },
      { station: "宇部岬", time: "11:41" },
      { station: "草江", time: "11:43" },
      { station: "常盤", time: "11:46" },
      { station: "床波", time: "11:50" },
      { station: "丸尾", time: "11:56" },
      { station: "岐波", time: "12:00" },
      { station: "阿知須", time: "12:05" },
      { station: "岩倉", time: "12:08" },
      { station: "周防佐山", time: "12:10" },
      { station: "深溝", time: "12:13" },
      { station: "上嘉川", time: "12:18" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "12:52" },
      { station: "岩鼻", time: "12:57" },
      { station: "居能", time: "13:01" },
      { station: "宇部新川", time: "13:06" },
      { station: "琴芝駅", time: "13:09" },
      { station: "東新川", time: "13:11" },
      { station: "宇部岬", time: "13:14" },
      { station: "草江", time: "13:17" },
      { station: "常盤", time: "13:20" },
      { station: "床波", time: "13:23" },
      { station: "丸尾", time: "13:29" },
      { station: "岐波", time: "13:34" },
      { station: "阿知須", time: "13:38" },
      { station: "岩倉", time: "13:41" },
      { station: "周防佐山", time: "13:44" },
      { station: "深溝", time: "13:47" },
      { station: "上嘉川", time: "13:51" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "14:13" },
      { station: "岩鼻", time: "14:19" },
      { station: "居能", time: "14:22" },
      { station: "宇部新川", time: "14:28" },
      { station: "琴芝", time: "14:31" },
      { station: "東新川", time: "14:33" },
      { station: "宇部岬", time: "14:36" },
      { station: "草江", time: "14:39" },
      { station: "常盤", time: "14:42" },
      { station: "床波", time: "14:45" },
      { station: "丸尾", time: "14:51" },
      { station: "岐波", time: "14:56" },
      { station: "阿知須", time: "15:00" },
      { station: "岩倉", time: "15:03" },
      { station: "周防佐山", time: "15:06" },
      { station: "深溝", time: "15:08" },
      { station: "上嘉川", time: "15:13" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "14:59" },
      { station: "岩鼻", time: "15:05" },
      { station: "居能", time: "15:07" },
      { station: "宇部新川", time: "15:13" },
      { station: "琴芝", time: "15:15" },
      { station: "東新川", time: "15:17" },
      { station: "宇部岬", time: "15:24" },
      { station: "草江", time: "15:26" },
      { station: "常盤", time: "15:29" },
      { station: "床波", time: "15:33" },
      { station: "丸尾", time: "15:39" },
      { station: "岐波", time: "15:43" },
      { station: "阿知須", time: "15:48" },
      { station: "岩倉", time: "15:51" },
      { station: "周防佐山", time: "15:53" },
      { station: "深溝", time: "15:56" },
      { station: "上嘉川", time: "16:00" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "15:54" },
      { station: "岩鼻", time: "16:00" },
      { station: "居能", time: "16:02" },
      { station: "宇部新川", time: "16:06" },
      { station: "琴芝", time: "16:10" },
      { station: "東新川", time: "16:14" },
      { station: "宇部岬", time: "16:17" },
      { station: "草江", time: "16:20" },
      { station: "常盤", time: "16:23" },
      { station: "床波", time: "16:26" },
      { station: "丸尾", time: "16:32" },
      { station: "岐波", time: "16:36" },
      { station: "阿知須", time: "16:42" },
      { station: "岩倉", time: "16:45" },
      { station: "周防佐山", time: "16:47" },
      { station: "深溝", time: "16:50" },
      { station: "上嘉川", time: "16:54" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "16:45" },
      { station: "岩鼻", time: "16:50" },
      { station: "居能", time: "16:53" },
      { station: "宇部新川", time: "16:59" },
      { station: "琴芝", time: "17:02" },
      { station: "東新川", time: "17:04" },
      { station: "宇部岬", time: "17:08" },
      { station: "草江", time: "17:10" },
      { station: "常盤", time: "17:13" },
      { station: "床波", time: "17:16" },
      { station: "丸尾", time: "17:23" },
      { station: "岐波", time: "17:27" },
      { station: "阿知須", time: "17:32" },
      { station: "岩倉", time: "17:35" },
      { station: "周防佐山", time: "17:38" },
      { station: "深溝", time: "17:41" },
      { station: "上嘉川", time: "17:45" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "17:14" },
      { station: "岩鼻", time: "17:20" },
      { station: "居能", time: "17:23" },
      { station: "宇部新川", time: "17:28" },
      { station: "琴芝", time: "17:31" },
      { station: "東新川", time: "17:33" },
      { station: "宇部岬", time: "17:36" },
      { station: "草江", time: "17:39" },
      { station: "常盤", time: "17:42" },
      { station: "床波", time: "17:47" },
      { station: "丸尾", time: "17:53" },
      { station: "岐波", time: "17:58" },
      { station: "阿知須", time: "18:02" },
      { station: "岩倉", time: "18:05" },
      { station: "周防佐山", time: "18:08" },
      { station: "深溝", time: "18:11" },
      { station: "上嘉川", time: "18:15" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "17:39" },
      { station: "岩鼻", time: "17:45" },
      { station: "居能", time: "17:47" },
      { station: "宇部新川", time: "17:53" },
      { station: "琴芝", time: "17:55" },
      { station: "東新川", time: "17:57" },
      { station: "宇部岬", time: "18:01" },
      { station: "草江", time: "18:04" },
      { station: "常盤", time: "18:07" },
      { station: "床波", time: "18:10" },
      { station: "丸尾", time: "18:16" },
      { station: "岐波", time: "18:20" },
      { station: "阿知須", time: "18:25" },
      { station: "岩倉", time: "18:28" },
      { station: "周防佐山", time: "18:30" },
      { station: "深溝", time: "18:36" },
      { station: "上嘉川", time: "18:41" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "18:22" },
      { station: "岩鼻", time: "18:28" },
      { station: "居能", time: "18:31" },
      { station: "宇部新川", time: "18:40" },
      { station: "琴芝", time: "18:43" },
      { station: "東新川", time: "18:45" },
      { station: "宇部岬", time: "18:49" },
      { station: "草江", time: "18:52" },
      { station: "常盤", time: "18:55" },
      { station: "床波", time: "19:02" },
      { station: "丸尾", time: "19:08" },
      { station: "岐波", time: "19:12" },
      { station: "阿知須", time: "19:25" },
      { station: "岩倉", time: "19:28" },
      { station: "周防佐山", time: "19:31" },
      { station: "深溝", time: "19:34" },
      { station: "上嘉川", time: "19:39" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "19:21" },
      { station: "岩鼻", time: "19:26" },
      { station: "居能", time: "19:29" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "居能", time: "19:36" },
      { station: "宇部新川", time: "19:42" },
      { station: "琴芝", time: "19:45" },
      { station: "東新川", time: "19:47" },
      { station: "宇部岬", time: "19:53" },
      { station: "草江", time: "19:56" },
      { station: "常盤", time: "19:59" },
      { station: "床波", time: "20:02" },
      { station: "丸尾", time: "20:08" },
      { station: "岐波", time: "20:12" },
      { station: "阿知須", time: "20:18" },
      { station: "岩倉", time: "20:20" },
      { station: "周防佐山", time: "20:23" },
      { station: "深溝", time: "20:26" },
      { station: "上嘉川", time: "20:30" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "19:59" },
      { station: "岩鼻", time: "20:04" },
      { station: "居能", time: "20:08" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "居能", time: "20:31" },
      { station: "宇部新川", time: "20:35" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "20:28" },
      { station: "岩鼻", time: "20:33" },
      { station: "居能", time: "20:36" },
      { station: "宇部新川", time: "20:42" },
      { station: "琴芝", time: "20:45" },
      { station: "東新川", time: "20:47" },
      { station: "宇部岬", time: "20:51" },
      { station: "草江", time: "20:53" },
      { station: "常盤", time: "20:56" },
      { station: "床波", time: "20:59" },
      { station: "丸尾", time: "21:05" },
      { station: "岐波", time: "21:10" },
      { station: "阿知須", time: "21:14" },
      { station: "岩倉", time: "21:17" },
      { station: "周防佐山", time: "21:20" },
      { station: "深溝", time: "21:23" },
      { station: "上嘉川", time: "21:27" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "21:14" },
      { station: "岩鼻", time: "21:19" },
      { station: "居能", time: "21:22" },
      { station: "宇部新川", time: "21:28" },
      { station: "琴芝", time: "21:31" },
      { station: "東新川", time: "21:33" },
      { station: "宇部岬", time: "21:38" },
      { station: "草江", time: "21:41" },
      { station: "常盤", time: "21:44" },
      { station: "床波", time: "21:47" },
      { station: "丸尾", time: "21:53" },
      { station: "岐波", time: "21:57" },
      { station: "阿知須", time: "22:02" },
      { station: "岩倉", time: "22:05" },
      { station: "周防佐山", time: "22:07" },
      { station: "深溝", time: "22:12" },
      { station: "上嘉川", time: "22:17" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部", time: "22:23" },
      { station: "岩鼻", time: "22:28" },
      { station: "居能", time: "22:31" },
    ],
  },
  // 宇部方面（新山口発）、宇部駅からは出発しようがないので削除
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "宇部新川", time: "05:45" },
      { station: "居能", time: "05:48" },
      { station: "岩鼻", time: "05:51" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "宇部新川", time: "06:22" },
      { station: "居能", time: "06:26" },
      { station: "岩鼻", time: "06:29" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "新山口", time: "05:55" },
      { station: "上嘉川", time: "06:00" },
      { station: "深溝", time: "06:05" },
      { station: "周防佐山", time: "06:08" },
      { station: "岩倉", time: "06:11" },
      { station: "阿知須", time: "06:14" },
      { station: "岐波", time: "06:18" },
      { station: "丸尾", time: "06:22" },
      { station: "床波", time: "06:28" },
      { station: "常盤", time: "06:32" },
      { station: "草江", time: "06:35" },
      { station: "宇部岬", time: "06:38" },
      { station: "東新川", time: "06:41" },
      { station: "琴芝", time: "06:43" },
      { station: "宇部新川", time: "06:48" },
      { station: "居能", time: "06:52" },
      { station: "岩鼻", time: "06:55" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "宇部新川", time: "07:07" },
      { station: "居能", time: "07:12" },
      { station: "岩鼻", time: "07:14" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "06:29" },
      { station: "上嘉川", time: "06:34" },
      { station: "深溝", time: "06:38" },
      { station: "周防佐山", time: "06:41" },
      { station: "岩倉", time: "06:44" },
      { station: "阿知須", time: "06:47" },
      { station: "岐波", time: "06:52" },
      { station: "丸尾", time: "06:56" },
      { station: "床波", time: "07:06" },
      { station: "常盤", time: "07:10" },
      { station: "草江", time: "07:13" },
      { station: "宇部岬", time: "07:16" },
      { station: "東新川", time: "07:23" },
      { station: "琴芝", time: "07:25" },
      { station: "宇部新川", time: "07:35" },
      { station: "居能", time: "07:40" },
      { station: "岩鼻", time: "07:43" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "宇部岬", time: "07:34" },
      { station: "東新川", time: "07:37" },
      { station: "琴芝", time: "07:39" },
      { station: "宇部新川", time: "07:45" },
      { station: "居能", time: "07:48" },
      { station: "岩鼻", time: "07:52" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "06:53" },
      { station: "上嘉川", time: "06:58" },
      { station: "深溝", time: "07:03" },
      { station: "周防佐山", time: "07:06" },
      { station: "岩倉", time: "07:09" },
      { station: "阿知須", time: "07:20" },
      { station: "岐波", time: "07:25" },
      { station: "丸尾", time: "07:29" },
      { station: "床波", time: "07:35" },
      { station: "常盤", time: "07:38" },
      { station: "草江", time: "07:42" },
      { station: "宇部岬", time: "07:45" },
      { station: "東新川", time: "07:51" },
      { station: "琴芝", time: "07:53" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "07:24" },
      { station: "上嘉川", time: "07:28" },
      { station: "深溝", time: "07:37" },
      { station: "周防佐山", time: "07:40" },
      { station: "岩倉", time: "07:43" },
      { station: "阿知須", time: "07:46" },
      { station: "岐波", time: "07:50" },
      { station: "丸尾", time: "07:54" },
      { station: "床波", time: "08:03" },
      { station: "常盤", time: "08:06" },
      { station: "草江", time: "08:09" },
      { station: "宇部岬", time: "08:12" },
      { station: "東新川", time: "08:16" },
      { station: "琴芝", time: "08:18" },
      { station: "宇部新川", time: "08:30" },
      { station: "居能", time: "08:34" },
      { station: "岩鼻", time: "08:37" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "宇部岬", time: "08:37" },
      { station: "東新川", time: "08:40" },
      { station: "琴芝", time: "08:43" },
      { station: "宇部新川", time: "08:47" },
      { station: "居能", time: "08:51" },
      { station: "岩鼻", time: "08:53" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "08:28" },
      { station: "上嘉川", time: "08:33" },
      { station: "深溝", time: "08:38" },
      { station: "周防佐山", time: "08:41" },
      { station: "岩倉", time: "08:44" },
      { station: "阿知須", time: "08:47" },
      { station: "岐波", time: "08:51" },
      { station: "丸尾", time: "08:55" },
      { station: "床波", time: "09:03" },
      { station: "常盤", time: "09:07" },
      { station: "草江", time: "09:10" },
      { station: "宇部岬", time: "09:13" },
      { station: "東新川", time: "09:16" },
      { station: "琴芝", time: "09:18" },
      { station: "宇部新川", time: "09:21" },
      { station: "居能", time: "09:25" },
      { station: "岩鼻", time: "09:27" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "09:24" },
      { station: "上嘉川", time: "09:29" },
      { station: "深溝", time: "09:34" },
      { station: "周防佐山", time: "09:37" },
      { station: "岩倉", time: "09:40" },
      { station: "阿知須", time: "09:43" },
      { station: "岐波", time: "09:47" },
      { station: "丸尾", time: "09:51" },
      { station: "床波", time: "09:57" },
      { station: "常盤", time: "10:00" },
      { station: "草江", time: "10:04" },
      { station: "宇部岬", time: "10:06" },
      { station: "東新川", time: "10:10" },
      { station: "琴芝", time: "10:12" },
      { station: "宇部新川", time: "10:16" },
      { station: "居能", time: "10:20" },
      { station: "岩鼻", time: "10:22" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "10:19" },
      { station: "上嘉川", time: "10:24" },
      { station: "深溝", time: "10:29" },
      { station: "周防佐山", time: "10:32" },
      { station: "岩倉", time: "10:35" },
      { station: "阿知須", time: "10:38" },
      { station: "岐波", time: "10:43" },
      { station: "丸尾", time: "10:47" },
      { station: "床波", time: "10:53" },
      { station: "常盤", time: "10:56" },
      { station: "草江", time: "10:59" },
      { station: "宇部岬", time: "11:02" },
      { station: "東新川", time: "11:05" },
      { station: "琴芝", time: "11:07" },
      { station: "宇部新川", time: "11:11" },
      { station: "居能", time: "11:15" },
      { station: "岩鼻", time: "11:18" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "12:02" },
      { station: "上嘉川", time: "12:07" },
      { station: "深溝", time: "12:15" },
      { station: "周防佐山", time: "12:18" },
      { station: "岩倉", time: "12:21" },
      { station: "阿知須", time: "12:24" },
      { station: "岐波", time: "12:28" },
      { station: "丸尾", time: "12:33" },
      { station: "床波", time: "12:38" },
      { station: "常盤", time: "12:42" },
      { station: "草江", time: "12:45" },
      { station: "宇部岬", time: "12:48" },
      { station: "東新川", time: "12:51" },
      { station: "琴芝", time: "12:53" },
      { station: "宇部新川", time: "12:56" },
      { station: "居能", time: "13:00" },
      { station: "岩鼻", time: "13:03" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "13:18" },
      { station: "上嘉川", time: "13:23" },
      { station: "深溝", time: "13:28" },
      { station: "周防佐山", time: "13:31" },
      { station: "岩倉", time: "13:34" },
      { station: "阿知須", time: "13:38" },
      { station: "岐波", time: "13:42" },
      { station: "丸尾", time: "13:47" },
      { station: "床波", time: "13:52" },
      { station: "常盤", time: "13:56" },
      { station: "草江", time: "13:59" },
      { station: "宇部岬", time: "14:02" },
      { station: "東新川", time: "14:05" },
      { station: "琴芝", time: "14:07" },
      { station: "宇部新川", time: "14:12" },
      { station: "居能", time: "14:16" },
      { station: "岩鼻", time: "14:18" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "14:40" },
      { station: "上嘉川", time: "14:44" },
      { station: "深溝", time: "14:49" },
      { station: "周防佐山", time: "14:52" },
      { station: "岩倉", time: "14:55" },
      { station: "阿知須", time: "15:00" },
      { station: "岐波", time: "15:04" },
      { station: "丸尾", time: "15:08" },
      { station: "床波", time: "15:14" },
      { station: "常盤", time: "15:18" },
      { station: "草江", time: "15:21" },
      { station: "宇部岬", time: "15:24" },
      { station: "東新川", time: "15:27" },
      { station: "琴芝", time: "15:29" },
      { station: "宇部新川", time: "15:33" },
      { station: "居能", time: "15:37" },
      { station: "岩鼻", time: "15:39" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "15:27" },
      { station: "上嘉川", time: "15:32" },
      { station: "深溝", time: "15:37" },
      { station: "周防佐山", time: "15:40" },
      { station: "岩倉", time: "15:43" },
      { station: "阿知須", time: "15:47" },
      { station: "岐波", time: "15:52" },
      { station: "丸尾", time: "15:56" },
      { station: "床波", time: "16:02" },
      { station: "常盤", time: "16:05" },
      { station: "草江", time: "16:09" },
      { station: "宇部岬", time: "16:11" },
      { station: "東新川", time: "16:14" },
      { station: "琴芝", time: "16:16" },
      { station: "宇部新川", time: "16:21" },
      { station: "居能", time: "16:24" },
      { station: "岩鼻", time: "16:27" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "16:21" },
      { station: "上嘉川", time: "16:26" },
      { station: "深溝", time: "16:30" },
      { station: "周防佐山", time: "16:33" },
      { station: "岩倉", time: "16:36" },
      { station: "阿知須", time: "16:41" },
      { station: "岐波", time: "16:46" },
      { station: "丸尾", time: "16:50" },
      { station: "床波", time: "16:56" },
      { station: "常盤", time: "16:59" },
      { station: "草江", time: "17:03" },
      { station: "宇部岬", time: "17:07" },
      { station: "東新川", time: "17:10" },
      { station: "琴芝", time: "17:12" },
      { station: "宇部新川", time: "17:19" },
      { station: "居能", time: "17:23" },
      { station: "岩鼻", time: "17:26" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "17:11" },
      { station: "上嘉川", time: "17:16" },
      { station: "深溝", time: "17:21" },
      { station: "周防佐山", time: "17:24" },
      { station: "岩倉", time: "17:27" },
      { station: "阿知須", time: "17:33" },
      { station: "岐波", time: "17:37" },
      { station: "丸尾", time: "17:39" },
      { station: "床波", time: "17:41" },
      { station: "常盤", time: "17:51" },
      { station: "草江", time: "17:54" },
      { station: "宇部岬", time: "18:01" },
      { station: "東新川", time: "18:04" },
      { station: "琴芝", time: "18:06" },
      { station: "宇部新川", time: "18:15" },
      { station: "居能", time: "18:19" },
      { station: "岩鼻", time: "18:22" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "18:26" },
      { station: "上嘉川", time: "18:30" },
      { station: "深溝", time: "18:35" },
      { station: "周防佐山", time: "18:39" },
      { station: "岩倉", time: "18:41" },
      { station: "阿知須", time: "18:45" },
      { station: "岐波", time: "18:50" },
      { station: "丸尾", time: "18:54" },
      { station: "床波", time: "19:00" },
      { station: "常盤", time: "19:04" },
      { station: "草江", time: "19:07" },
      { station: "宇部岬", time: "19:10" },
      { station: "東新川", time: "19:13" },
      { station: "琴芝", time: "19:15" },
    ],
  },
  {
    line: "宇部線",
    direction: "宇部方面",
    times: [
      { station: "宇部新川", time: "19:00" },
      { station: "居能", time: "19:06" },
      { station: "岩鼻", time: "19:09" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "19:07" },
      { station: "上嘉川", time: "19:12" },
      { station: "深溝", time: "19:17" },
      { station: "周防佐山", time: "19:20" },
      { station: "岩倉", time: "19:23" },
      { station: "阿知須", time: "19:28" },
      { station: "岐波", time: "19:32" },
      { station: "丸尾", time: "19:36" },
      { station: "床波", time: "19:43" },
      { station: "常盤", time: "19:46" },
      { station: "草江", time: "19:50" },
      { station: "宇部岬", time: "19:52" },
      { station: "東新川", time: "19:55" },
      { station: "琴芝", time: "19:58" },
      { station: "宇部新川", time: "20:04" },
      { station: "居能", time: "20:08" },
      { station: "岩鼻", time: "20:10" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "19:57" },
      { station: "上嘉川", time: "20:02" },
      { station: "深溝", time: "20:06" },
      { station: "周防佐山", time: "20:09" },
      { station: "岩倉", time: "20:12" },
      { station: "阿知須", time: "20:17" },
      { station: "岐波", time: "20:21" },
      { station: "丸尾", time: "20:26" },
      { station: "床波", time: "20:31" },
      { station: "常盤", time: "20:35" },
      { station: "草江", time: "20:38" },
      { station: "宇部岬", time: "20:41" },
      { station: "東新川", time: "20:47" },
      { station: "琴芝", time: "20:49" },
      { station: "宇部新川", time: "20:55" },
      { station: "居能", time: "20:58" },
      { station: "岩鼻", time: "21:01" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "20:54" },
      { station: "上嘉川", time: "20:59" },
      { station: "深溝", time: "21:06" },
      { station: "周防佐山", time: "21:07" },
      { station: "岩倉", time: "21:09" },
      { station: "阿知須", time: "21:14" },
      { station: "岐波", time: "21:18" },
      { station: "丸尾", time: "21:23" },
      { station: "床波", time: "21:28" },
      { station: "常盤", time: "21:32" },
      { station: "草江", time: "21:35" },
      { station: "宇部岬", time: "21:40" },
      { station: "東新川", time: "21:43" },
      { station: "琴芝", time: "21:45" },
      { station: "宇部新川", time: "21:50" },
      { station: "居能", time: "21:53" },
      { station: "岩鼻", time: "21:56" },
    ],
  },
  {
    line: "宇部線",
    direction: "新山口方面",
    times: [
      { station: "新山口", time: "22:02" },
      { station: "上嘉川", time: "22:07" },
      { station: "深溝", time: "22:12" },
      { station: "周防佐山", time: "22:15" },
      { station: "岩倉", time: "22:18" },
      { station: "阿知須", time: "22:21" },
      { station: "岐波", time: "22:26" },
      { station: "丸尾", time: "22:30" },
      { station: "床波", time: "22:36" },
      { station: "常盤", time: "22:39" },
      { station: "草江", time: "22:42" },
      { station: "宇部岬", time: "22:45" },
      { station: "東新川", time: "22:48" },
      { station: "琴芝", time: "22:50" },
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
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  // 同一路線・同一方向のすべての電車から、駅の時刻を収集
  const matchingTrains = trainSchedules.filter(
    (s) => s.line === line && s.direction === direction
  );

  const futureTimes: TrainTime[] = [];

  for (const train of matchingTrains) {
    const time = train.times.find((t) => t.station === station);
    if (!time) continue;

    const timeMinutes = timeToMinutes(time.time);
    if (timeMinutes >= currentMinutes) {
      futureTimes.push(time);
    }
  }

  // 最も早い電車を取得
  if (futureTimes.length === 0) return null;

  return futureTimes.reduce((a, b) =>
    timeToMinutes(a.time) < timeToMinutes(b.time) ? a : b
  );
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
