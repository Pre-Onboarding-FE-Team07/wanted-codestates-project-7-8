import { useCallback, useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userStoredList } from '../atoms';
import styled from '@emotion/styled';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Modal from '../components/Modal';

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
      return userList.filter(item => item.name.match(regex));
    } else if (type === '주소') {
      return userList.filter(item => item.address.match(regex));
    } else if (type === '메모') {
      return userList.filter(item => item.memo.match(regex));
    }
  }, [userList, searchFilter]);

  const queryTextHandler = useCallback((type, text) => {
    setSearchFilter({ type, text });
  }, []);

  const onCardClick = useCallback(card => {
    setCardData({ ...card });
  }, []);

  const onAddClick = useCallback(() => {
    navigate('/list');
  }, [navigate]);

  return (
    <Container>
      <SearchBar onQueryText={queryTextHandler} />
      <CardContainer>
        {filteredList?.map(user => (
          <Card key={user.id} cardData={user} onClickEvent={onCardClick} />
        ))}
      </CardContainer>
      <PlusButton onClick={onAddClick}>+</PlusButton>
      {cardData && <Modal type="edit" cardData={cardData} />}
    </Container>
  );
};

const PlusButton = styled.div`
  margin: 0 auto 3rem auto;
  width: 2rem;
  height: 2rem;
  border-radius: 10px;
  background-color: #e9ebee;
  box-shadow: 0 2px 4px 0 grey, 0 0 0 0.5px #e9ebee inset;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.3rem;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    background-color: lightgray;
  }
`;

const CardContainer = styled.div`
  max-width: 480px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  padding: 1rem;
  justify-items: center;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export default Main;
