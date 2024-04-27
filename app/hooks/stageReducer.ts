import { selectQuestion, sortingQuestion } from "@/data/questions";

export interface State {
  snap: number | string | null;
  isOpen: boolean;
  questCount: number;
  totalCount: number;
  currentQuestion: selectQuestion | sortingQuestion | undefined;
}

export type Action =
  | { type: 'SET_SNAP'; payload: number | string | null }
  | { type: 'TOGGLE_OPEN' }
  | { type: 'SET_QUEST_COUNT'; payload: number }
  | { type: 'SET_TOTAL_COUNT'; payload: number }
  | { type: 'SET_CURRENT_QUESTION'; payload: selectQuestion | sortingQuestion };

export const initialState: State = {
  snap: "148px",
  isOpen: true,
  questCount: 1,
  totalCount: 0,
  currentQuestion: undefined,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SNAP':
      return { ...state, snap: action.payload };
    case 'TOGGLE_OPEN':
      return { ...state, isOpen: !state.isOpen };
    case 'SET_QUEST_COUNT':
      return { ...state, questCount: action.payload };
    case 'SET_TOTAL_COUNT':
      return { ...state, totalCount: action.payload };
    case 'SET_CURRENT_QUESTION':
      return { ...state, currentQuestion: action.payload };
    default:
      return state;
  }
}