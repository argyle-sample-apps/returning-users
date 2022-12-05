import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const postTriggerScan = async () => {
  const { data } = await axios.post(`/api/scan`);

  return data;
};

export function useTriggerScan() {
  return useMutation(["scan"], postTriggerScan);
}
