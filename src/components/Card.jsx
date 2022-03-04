import styled from '@emotion/styled';
import { memo, useCallback } from 'react';

const Card = ({ cardData, onClickEvent }) => {
  const cardClickHandler = useCallback(
    (e) => {
      onClickEvent(cardData);
    },
    [onClickEvent, cardData]
  );

  if (!cardData) return null;

  return (
    <Container onClick={cardClickHandler}>
      <div>{cardData.fcNm}</div>
      <div>{cardData.fcAddr}</div>
      <div>{cardData.ref1}</div>
      {cardData.memo && <div>{cardData.memo}</div>}
    </Container>
  );
};

const Container = styled.div`
  width: 90%;
  padding: 20px 24px;
  border: 2px solid #999;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
    box-shadow: 0 2px 4px 0 #acabab, 0 0 0 0.5px #e9ebee inset, 0 0 0 0.5px #e9ebee inset;
  }

  & div:nth-of-type(1) {
    font-family: sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    color: #3fc176;
  }

  & div:nth-of-type(2) {
    margin-top: 0.1rem;
    font-family: sans-serif;
    font-size: 1rem;
  }

  & div:nth-of-type(3) {
    margin-top: 0.1rem;
    font-family: sans-serif;
    font-size: 0.9rem;
    color: #e74c3c;
  }
`;

export default memo(Card);
