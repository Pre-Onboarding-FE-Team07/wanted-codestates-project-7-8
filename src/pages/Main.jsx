import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';

import SearchBar from '../components/SearchBar';

const Main = () => {
  const [userList, setUserList] = useRecoilState(userStoredList);

  const queryTextHandler = useCallback((queryText) => {
    const [key, value] = queryText.split('|');
    console.log(key, value);
  }, []);

  return <SearchBar onQueryText={queryTextHandler} />;
};

export default Main;
