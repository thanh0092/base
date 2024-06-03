export interface Quizz {
  id: number;
  quizzName: string;
  questionID: string[];
}
export interface Question {
  id: number;
  questionName: string;
  optionID: string[];
}
export interface Option {
  id: number;
  optionName: string;
  isCorrect: boolean;
}
