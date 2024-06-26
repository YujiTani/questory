/**
 * synonyms: 解答の他の選択肢として選ばれる類語, 最大3つ
 * question_id: 紐づく問題
 * index: 解答内の位置
 */
export type Word = {
  id: number;
  name: string;
  synonyms: string; 
  question_id: number;
  index: number;
}

const words1 = [
  {
    id: 1,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 1,
    index: 1,
  },
  {
    id: 2,
    name: "name",
    synonyms: "nana,mime,title",
    question_id: 1,
    index: 2,
  },
  {
    id: 3,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 1,
    index: 3,
  },
  {
    id: 4,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 1,
    index: 4,
  },
  {
    id: 5,
    name: "WHERE",
    synonyms: "WHERE,WHEREIN,WHEREINTO",
    question_id: 1,
    index: 5,
  },
  {
    id: 6,
    name: "id",
    synonyms: "ID,pid,no",
    question_id: 1,
    index: 6,
  },
  {
    id: 7,
    name: "=",
    synonyms: "==,:,&",
    question_id: 1,
    index: 7,
  },
  {
    id: 8,
    name: "1",
    synonyms: "one,2,first",
    question_id: 1,
    index: 8,
  }
] as const satisfies Word[]

const words2 = [
  {
    id: 9,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 2,
    index: 1,
  },
  {
    id: 10,
    name: "age",
    synonyms: "年齢,index,FROM",
    question_id: 2,
    index: 2,
  },
  {
    id: 11,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 2,
    index: 3,
  },
  {
    id: 12,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 2,
    index: 4,
  },
  {
    id: 13,
    name: "WHERE",
    synonyms: "WHERE,WHEREIN,WHEREINTO",
    question_id: 2,
    index: 5,
  },
  {
    id: 14,
    name: "id",
    synonyms: "ID,pid,no",
    question_id: 2,
    index: 6,
  },
  {
    id: 15,
    name: "=",
    synonyms: "==,:,&",
    question_id: 2,
    index: 7,
  },
  {
    id: 16,
    name: "3",
    synonyms: "three,num3,third",
    question_id: 2,
    index: 8,
  }
] as const satisfies Word[]

const words3 = [
  {
    id: 17,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 3,
    index: 1,
  },
  {
    id: 18,
    name: "created_at",
    synonyms: "updated_at,deleted_at,create_time",
    question_id: 3,
    index: 2,
  },
  {
    id: 19,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 3,
    index: 3,
  },
  {
    id: 20,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 3,
    index: 4,
  },
  {
    id: 21,
    name: "WHERE",
    synonyms: "WHERE,WHEREIN,WHEREINTO",
    question_id: 3,
    index: 5,
  },
  {
    id: 22,
    name: "id",
    synonyms: "ID,pid,no",
    question_id: 3,
    index: 6,
  },
  {
    id: 23,
    name: "=",
    synonyms: "==,:,&",
    question_id: 3,
    index: 7,
  },
  {
    id: 24,
    name: "1",
    synonyms: "one,2,first",
    question_id: 3,
    index: 8,
  } 
] as const satisfies Word[]

const words4 = [
  {
    id: 24,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 4,
    index: 1,
  },
  {
    id: 25,
    name: "name",
    synonyms: "nana,mime,title",
    question_id: 4,
    index: 2,
  },
  {
    id: 26,
    name: "age",
    synonyms: "year,old,birthday",
    question_id: 4,
    index: 3,
  },
  {
    id: 27,
    name: "created_at",
    synonyms: "updated_at,delete_date,create_time",
    question_id: 4,
    index: 4,
  },
  {
    id: 28,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 4,
    index: 5,
  },
  {
    id: 29,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 4,
    index: 6,
  },
  {
    id: 30,
    name: "WHERE",
    synonyms: "WHERE,WHEREIN,WHEREINTO",
    question_id: 4,
    index: 7,
  },
  {
    id: 31,
    name: "id",
    synonyms: "ID,pid,no",
    question_id: 4,
    index: 8,
  },
] as const satisfies Word[]

const words5 = [
  // "SELECT name FROM users;",
  {
    id: 32,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 5,
    index: 1,
  },
  {
    id: 33,
    name: "name",
    synonyms: "nana,mime,title",
    question_id: 5,
    index: 2,
  },
  {
    id: 34,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 5,
    index: 3,
  },
  {
    id: 35,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 5,
    index: 4,
  }
] as const satisfies Word[]

const words6 = [
  // "SELECT * FROM users;
  {
    id: 36,
    name: "SELECT",
    synonyms: "INSERT,GET,FETCH",
    question_id: 6,
    index: 1,
  },
  {
    id: 37,
    name: "*",
    synonyms: "ALL,#,TO_ALL",
    question_id: 6,
    index: 2,
  },
  {
    id: 38,
    name: "FROM",
    synonyms: " TO,INTO,SET",
    question_id: 6,
    index: 3,
  },
  {
    id: 39,
    name: "users",
    synonyms: "humans,user,mens",
    question_id: 6,
    index: 4,
  }
] as const satisfies Word[]

export const wordsList = [...words1, ...words2, ...words3, ...words4, ...words5, ...words6]
