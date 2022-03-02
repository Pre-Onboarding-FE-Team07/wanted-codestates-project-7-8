import { atom } from "recoil";
import { localStorageEffect } from "../utilities/localStorage";

export const userStoredList = atom({
  key: 'userStoredList',
  default: [],
  effects: [localStorageEffect("user_list")],
});
