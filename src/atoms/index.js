import { atom } from 'recoil';
import { localStorageEffect } from '../utilities/localStorage';
import { USER_STORED_LIST } from '../constants/localStorage';

export const userStoredList = atom({
  key: 'userStoredList',
  default: [],
  effects: [localStorageEffect(USER_STORED_LIST)],
});
