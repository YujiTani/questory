export type QuestType = {
  id: number;
  name: string;
  description: string;
  image: string | null;
  // 公開、非公開、停止中、準備中
  state: "public" | "private" | "stopped" | "coming_soon";
};

export const quests = [
  {
    id: 1,
    name: "SQL",
    description: "SQLを練習しよう！",
    image: "/image/icon_SQL.svg",
    state: "public",
  },
  {
    id: 2,
    name: "Active_Record",
    description: "Active_Recordを練習しよう!",
    image: "/image/icon_ORM.svg",
    state: "coming_soon",
  },
  {
    id: 3,
    name: "Ruby",
    description: "Rubyを練習しよう!",
    image: "/image/icon_Ruby.svg",
    state: "coming_soon",
  },
  {
    id: 4,
    name: "RubyonRails",
    description: "RubyonRails",
    image: "/image/icon_Rails.svg",
    state: "coming_soon",
  },
] as const satisfies QuestType[];
