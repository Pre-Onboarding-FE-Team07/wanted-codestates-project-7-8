import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { apiDataList } from '../atoms';
import Card from '../components/Card';
import { CardContainer } from '../components/CardContainer';
import Modal from '../components/Modal';
import { getDataFromApi } from '../utilities/api';

const GoHomeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
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
  const [selectedData, setSelectedData] = useState(null);

  const refetchData = async () => {
    const nextData = await getDataFromApi(page + 1);
    console.log(nextData);
    if (nextData.length) {
      setData(data.concat(nextData));
      setPage(page + 1);
    }
  };

  return (
    <Container>
      <GoHomeButton onClick={() => navigate('/')}>⬅</GoHomeButton>
      {selectedData && (
        <Modal type="add" cardData={selectedData} onClose={() => setSelectedData(null)} />
      )}
      <CardContainer
        data={data}
        keyExtractor={(item) => item.fcNo.toString()}
        threshold={100}
        onReachScrollEnd={refetchData}
        renderItem={(data) => <Card cardData={data} onClickEvent={() => setSelectedData(data)} />}
      />
    </Container>
  );
};

export default PageList;
