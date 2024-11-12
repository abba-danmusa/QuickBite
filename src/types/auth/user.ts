export type CurrentUser = {
  currentUser: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
    phoneNumber?: number;
    address?: string;
    vendor?: string
  } | null
}