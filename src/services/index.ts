import { instance } from "@/api/instance";
import { Quizz } from "@/interface";

export const addQuizz = (payload: Quizz) => {
  return instance.post("/api/quizzes", payload);
};
