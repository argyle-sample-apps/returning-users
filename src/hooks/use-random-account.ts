import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Account } from "models/account";

const fetchRandomAccount = async () => {
  const { data } = await axios.get<Account>(`/api/accounts/random`);

  return data;
};

export function useRandomAccount() {
  return useQuery(["random-account"], fetchRandomAccount);
}
