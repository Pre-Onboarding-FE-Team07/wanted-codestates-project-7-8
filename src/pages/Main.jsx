import styled from '@emotion/styled';
import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStoredList } from '../atoms';
import Card from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import Modal from '../components/Modal';
import SearchBar from '../components/SearchBar';

const Main = () => {
  const userList = useRecoilValue(userStoredList);
  const [searchFilter, setSearchFilter] = useState({ type: '', text: '' });
  const [cardData, setCardData] = useState(null);
  const navigate = useNavigate();

  const filteredList = useMemo(() => {
    const { type, text } = searchFilter;
    if (type === '' || text === '') return userList;

    const regex = new RegExp(text, 'gi');

    if (type === '이름') {
      return userList.filter((item) => item.fcNm.match(regex));
    } else if (type === '주소') {
      return userList.filter((item) => item.fcAddr.match(regex));
    } else if (type === '메모') {
      return userList.filter((item) => item.memo.match(regex));
    }
  }, [userList, searchFilter]);

  const queryTextHandler = useCallback((type, text) => {
    setSearchFilter({ type, text });
  }, []);

  const onCardClick = useCallback((card) => {
    setCardData({ ...card });
  }, []);

  const onAddClick = useCallback(() => {
    navigate('/list');
  }, [navigate]);

  return (
    <Container>
      <SearchBar onQueryText={queryTextHandler} />
      <CardContainer
        data={filteredList}
        keyExtractor={(item) => item.fcNo.toString()}
        renderItem={(data) => <Card cardData={data} onClickEvent={onCardClick} />}
      />
      {cardData && <Modal type="edit" cardData={cardData} />}
      <PlusButton onClick={onAddClick}>+</PlusButton>
    </Container>
  );
};

const PlusButton = styled.div`
  margin: 0 auto 3rem auto;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #e74c3c;
  color: #fff;
  box-shadow: 0 2px 4px 0 grey, 0 0 0 0.5px #e9ebee inset;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    background-color: #c73929;
  }
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default Main;
