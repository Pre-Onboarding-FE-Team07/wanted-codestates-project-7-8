import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { apiDataList } from '../atoms';
import Card from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import Modal from '../components/Modal';
import { getDataFromApi } from '../utilities/api';

const GoHomeButton = styled.button`
  /* background-color: transparent; */
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 50%;
  background-color: #e74c3c;
  color: #fff;
  width: 5rem;
  height: 5rem;
  position: absolute;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const PageList = () => {
  const navigate = useNavigate();
  const userList = useRecoilValue(apiDataList);
  const [page, setPage] = useState(1);
  const [data, setData] = useState(userList);
  const [cardData, setCardData] = useState(null);

  const refetchData = useCallback(async () => {
    const nextData = await getDataFromApi(page + 1);
    if (nextData.length) {
      setData(data.concat(nextData));
      setPage(page + 1);
    }
  }, [data, page]);

  const onCardClick = useCallback((card) => {
    setCardData({ ...card });
  }, []);

  return (
    <Container>
      <GoHomeButton onClick={() => navigate('/')}>⬅</GoHomeButton>
      {cardData && <Modal type="add" cardData={cardData} />}
      <CardContainer
        data={data}
        keyExtractor={(item) => item.fcNo.toString()}
        threshold={100}
        onReachScrollEnd={refetchData}
        renderItem={(data) => <Card cardData={data} onClickEvent={() => onCardClick(data)} />}
      />
    </Container>
  );
};

export default PageList;
