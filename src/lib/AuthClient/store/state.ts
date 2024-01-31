export type User = Record<string, string> & {
  email: string;
  email_verified: boolean;
  roles: string[];
  name?: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  preferred_username?: string;
};

export interface AuthState {
  isLoading: boolean;
  user: User | null;
}

export const initialAuthState: AuthState = {
  isLoading: true,
  user: null,
};
