export type Area = {
  id: number;
  lv: number;
  name: string;
  description: string;
  quest_id: number;
};

export const areas = [
  {
    id: 1,
    lv: 1,
    name: "草原",
    description: "最初は簡単なSQLから練習しよう",
    quest_id: 1,
  },
  {
    id: 2,
    lv: 2,
    name: "森林",
    description: "少しずつSQLに慣れてきたかな？毎日すこしでも練習しよう",
    quest_id: 1,
  },
] as const satisfies Area[];