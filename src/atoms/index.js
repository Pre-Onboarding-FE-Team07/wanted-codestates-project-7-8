import { atom } from 'recoil';

export const userStoredList = atom({
  key: 'userStoredList',
  default: [],
});
