import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';

const Main = () => {
  const [userList, setUserList] = useRecoilState(userStoredList);

  return <div>MainPage Hello World!</div>;
};

export default Main;
