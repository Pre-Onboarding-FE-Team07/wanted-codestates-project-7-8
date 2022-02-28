import { atom } from 'recoil';
import { USER_STORED_LIST } from '../constants/localStorage';

export const userStoredList = atom({
  key: 'userStoredList',
  default: localStorage.getItem(USER_STORED_LIST) || [],
});
