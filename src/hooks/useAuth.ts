import { useMemo } from "react"
import { useAppSelector } from "../app/hooks";
import { AuthUser } from "../reducers/authSlice";

/**
 * Auth
 */
type Auth = {
  user: AuthUser | null;
};

/**
 * User Authentication Hook
 * @returns Authenticated User or null
 */
export const useAuth = () => {
  const user: AuthUser | null = useAppSelector((state) => state.auth.user);
  return useMemo<Auth>(() => ({ user }), [user]);
};