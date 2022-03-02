import { atom, selector } from 'recoil';
import { USER_STORED_LIST } from '../constants/localStorage';
import { getDataFromApi } from '../utilities/api';
import { localStorageEffect } from '../utilities/localStorage';

export const userStoredList = atom({
  key: 'userStoredList',
  default: [],
  effects: [localStorageEffect(USER_STORED_LIST)],
});

export const apiDataList = selector({
  key: 'apiDataList',
  get: async () => getDataFromApi(1),
});
