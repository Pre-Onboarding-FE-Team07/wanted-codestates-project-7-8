import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';
import styled from '@emotion/styled';

import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import dummyData from '../data-with-memo.json';

import SearchBar from '../components/SearchBar';

const Main = () => {
  const [userList, setUserList] = useRecoilState(userStoredList);

  const queryTextHandler = useCallback((type, text) => {
    console.log(type, text);
  }, []);

  const onCardClick = useCallback((cardData) => {
    console.log(cardData);
  }, []);

  return (
    <Container>
      <SearchBar onQueryText={queryTextHandler} />
      <CardContainer>
        {dummyData?.map((user) => (
          <Card key={user.id} cardData={user} onClickEvent={onCardClick} />
        ))}
      </CardContainer>
    </Container>
  );
};

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
