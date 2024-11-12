import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "../../utils/axios";
import Toast from '../../utils/toast'
import { router } from "expo-router";
import { AxiosError } from "axios";
import { CurrentUser, ApiResponse } from "@/src/types";
// import AsyncStorage from '@react-native-async-storage/async-storage'

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: AxiosError;
  }
}

interface ServerError extends AxiosError {
  errors: {
    message: string
  }[],
}

export const useSignup = () => {
  
  interface SignupData {
    email: string;
    password: string;
  }

  return useMutation({
    mutationKey: ["signup"],
    mutationFn: async (data: SignupData) => {
      return await axios.post("/api/user/signup", data)
    },
    onSuccess: (data) => {
      Toast(data.data?.message)
    },
    onError: (error: ServerError) => {
      Toast((error.response?.data as { message: string })?.message || error.message)
    },
  })
}

export const useCurrentUser = () => {

  return useQuery({
    queryKey: ["user"],
    queryFn: async (): Promise<ApiResponse<CurrentUser>> => {
      return await axios.get(`/api/user/current-user`)
    },
  });
};