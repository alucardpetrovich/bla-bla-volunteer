export interface RootState {
  auth: AuthState;
}

interface AuthState {
  isAuthenticated: boolean;
  error: string[];
}
