import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';

import SearchBar from '../components/SearchBar';

const Main = () => {
  const [userList, setUserList] = useRecoilState(userStoredList);

  return <SearchBar />;
};

export default Main;
