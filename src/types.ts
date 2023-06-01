import { AuthType } from "./store/slices/authSlice";

export type Action = {
  onClick: () => void;
};

export interface Article {
  id: string;
  source: string;
  author?: string | undefined;
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  content: string;
}

export interface authState {
  auth: AuthType;
}

export interface DropMenu {
  menus: { id: string; name: string; link: string }[];
}

export type reqType = {
  message: string;
  color: string;
};