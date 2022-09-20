import { type } from 'os';

export type JSONType = string | number | boolean | { [key: string]: JSONType } | Array<JSONType>;

/* TODO: Add type for JSON file */
export type AppContextProviderType = {
  isLoaded: boolean;
  appData: JSONType | any;
};

export type FetchFilesType = (args: { phrase: string; user: string; repo: string; fileType: string }) => void;

export type UrlStateType = {
  phrase: string;
  user: string;
  repo: string;
  fileType: string;
};
