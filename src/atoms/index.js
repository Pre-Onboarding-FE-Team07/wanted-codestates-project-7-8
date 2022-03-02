import { atom, selector } from 'recoil';
import { localStorageEffect } from '../utilities/localStorage';
import { USER_STORED_LIST } from '../constants/localStorage';
import axios from 'axios';
import { API_URL } from '../constants/api';

import dummyData from '../data-with-memo.json';

export const userStoredList = atom({
  key: 'userStoredList',
  default: dummyData,
  effects: [localStorageEffect(USER_STORED_LIST)]
});
export const apiDataList = selector({
  key: 'apiDataList',
  get: async ({ get }) => {
    const response = await axios
      .get(API_URL)
      .then(res => JSON.parse(res.data).response)
      .catch(err => console.log(err));

    return response;
  }
});
