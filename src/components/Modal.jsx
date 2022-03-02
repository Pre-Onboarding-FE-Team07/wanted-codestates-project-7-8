import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useEffect, useState, useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';

const Modal = ({ type, cardData }) => {
  const [isOpen, setOpen] = useState(false);
  const [memo, setMemo] = useState(cardData.memo || '');
  const [userList, setUserList] = useRecoilState(userStoredList);

  useEffect(() => {
    setOpen(true);
    setMemo(cardData.memo);
  }, [cardData]);

  const preventClose = useCallback((e) => e.stopPropagation(), []);
  const changeInput = useCallback((e) => setMemo(e.target.value), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const saveData = useCallback(() => {
    if (memo === '') return; // toast: "메모를 입력해 주세요."
    const list = userList.map((item) => (item.id === cardData.id ? { ...item, memo: memo } : item));
    setUserList(list);
    closeModal();
    // toast: "저장이 완료되었습니다."
  }, [cardData.id, closeModal, memo, setUserList, userList]);

  const removeData = useCallback(() => {
    const list = userList.filter((item) => item.id !== cardData.id);
    setUserList(list);
    closeModal();
    // toast: "삭제가 완료되었습니다."
  }, [cardData.id, closeModal, setUserList, userList]);

  return (
    isOpen &&
    cardData && (
      <ModalContainer onClick={closeModal}>
        <ModalBox onClick={preventClose}>
          <InputRow labelName="이름" value={cardData.name}></InputRow>
          <InputRow labelName="주소" value={cardData.address}></InputRow>
          <InputRow labelName="연락처" value={cardData.phone}></InputRow>
          <InputRow
            labelName="메모"
            value={memo}
            allowEdit={true}
            onChange={changeInput}
          ></InputRow>
          <ButtonWrap>
            {type === 'edit' ? (
              <>
                <Button color="red" onClick={removeData}>
                  삭제
                </Button>
                <Button onClick={saveData}>수정</Button>
              </>
            ) : (
              <Button onClick={saveData}>저장</Button>
            )}
          </ButtonWrap>
        </ModalBox>
      </ModalContainer>
    )
  );
};

const InputRow = ({ labelName, value, allowEdit, onChange }) => (
  <Row>
    <Label>{labelName}</Label>
    {allowEdit ? (
      <Input value={value} placeholder="내용을 입력해주세요. " onChange={onChange}></Input>
    ) : (
      <Value>{value}</Value>
    )}
  </Row>
);

InputRow.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  allowEdit: PropTypes.bool,
};

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.38);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 101;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 84vw;
  min-width: 300px;
  max-width: 400px;
  background-color: white;
  padding: 1rem;
  padding-top: 2rem;
`;
const Row = styled.div`
  margin-bottom: 1rem;
`;
const Label = styled.label`
  color: #b2b2b2;
  font-weight: 500;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  margin: 0.2rem 0 0;
  padding: 0.6rem 0.3rem;
  box-sizing: border-box;
  border: 1px solid #aaa;
  border-radius: 5px;
  outline: none;
`;
const Value = styled.p`
  margin: 0.2rem 0 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;
`;

const Button = styled.button`
  cursor: pointer;
  border-radius: 0.28rem;
  border: 0;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  flex: 1;
  padding: 0.6rem;
  ${({ color }) => {
    return css`
      background-color: ${color === 'red' ? '#E74C3C' : '#3FC176'};
      &:hover {
        background-color: ${color === 'red' ? '#df4433' : '#37b86c'};
      }
    `;
  }}
`;

export default Modal;
