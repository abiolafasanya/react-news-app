import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AuthType {
  isAuthenticated: boolean;
  user: AuthenticatedUser;
  token: string | null;
}
export type AuthenticatedUser = {
  id: string;
  email: string;
  name?: string;
} | null;

const authData = (): AuthType => {
  const auth = localStorage.getItem("auth");
  if (auth === null || auth === undefined) {
    return {
      isAuthenticated: false,
      user: { email: "", id: "", name: "" },
      token: null,
    };
  }
  return JSON.parse(auth) as AuthType;
};

const storedAuth = authData();

const initialState: AuthType = {
  isAuthenticated: storedAuth.isAuthenticated,
  user: storedAuth.user,
  token: storedAuth.token,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<AuthType>) {
      localStorage.removeItem("auth");
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      // Store to localStorage
      const dataToStore = JSON.stringify(state);
      localStorage.setItem("auth", dataToStore);
    },
    logout(state) {
      state.isAuthenticated = false;
      state.token = "";
      state.user = null;
      // Remove from localStorage
      localStorage.removeItem("auth");
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
