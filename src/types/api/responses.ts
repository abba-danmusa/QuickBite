export type ApiResponse<T>  = {
  data: T;
  status: number;
  errors?: {
    message: string;
  }[];
};