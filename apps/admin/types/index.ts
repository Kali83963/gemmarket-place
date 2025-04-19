import { UserProfile } from "./user-profile";

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null | undefined;
}

export type KeyedObject = {
  [key: string]: string | number | KeyedObject | any;
};

export type HandleFunction = (i: string, s: string) => Promise<void>;

export interface ColorProps {
  readonly [key: string]: string;
}
