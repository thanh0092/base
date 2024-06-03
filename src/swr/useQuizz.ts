import { fetcher } from "@/constain/fetcher";
import useSWR from "swr";

export function useQuizz() {
  const { data, mutate } = useSWR("/api/quizzes", fetcher);
  return {
    data,
    mutate,
  };
}
