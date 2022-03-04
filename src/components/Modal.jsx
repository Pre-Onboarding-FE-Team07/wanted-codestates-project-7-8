import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { userStoredList } from '../atoms';
import Toast from './Toast';

const msgList = {
  save: '확인 되었습니다.',
  remove: '삭제 되었습니다.',
  write: '메모를 작성해주세요.',
};

const Modal = ({ type, cardData }) => {
  const [toastStatus, setToastStatus] = useState(false);
  const [toastMsg, setToastMsg] = useState();
  const [isOpen, setOpen] = useState(false);
  const [memo, setMemo] = useState(cardData.memo || '');
  const [userList, setUserList] = useRecoilState(userStoredList);

  const handleToast = (select) => {
    console.log('select', select);
    if (!toastStatus) {
      setToastStatus(true);
      setToastMsg(msgList[select]);
    }
  };

  useEffect(() => {
    if (toastStatus) {
      setTimeout(() => {
        setToastStatus(false);
        setToastMsg([]);
      }, 3000);
    }
  }, [toastStatus]);

  useEffect(() => {
    setOpen(true);
    setMemo(cardData.memo);
  }, [cardData]);

  const preventClose = useCallback((e) => e.stopPropagation(), []);
  const changeInput = useCallback((e) => setMemo(e.target.value), []);
  const closeModal = useCallback(() => setOpen(false), []);

  const saveData = () => {
    if (memo === '' || !memo) {
      handleToast('write');
      return;
    }
    if (type === 'add') {
      const { fcNo, fcNm, fcAddr, ref1 } = cardData;
      setUserList(userList.concat({ fcNo, fcNm, fcAddr, ref1, memo }));
    } else {
      setUserList(userList.map((data) => (data.fcNo === cardData.fcNo ? { ...data, memo } : data)));
    }
    handleToast('save');
    closeModal();
  };

  const removeData = () => {
    setUserList(userList.filter((item) => item.fcNo !== cardData.fcNo));
    handleToast('remove');
    closeModal();
  };

  return (
    <>
      {toastStatus && <Toast message={toastMsg} />}
      {isOpen && cardData && (
        <ModalContainer onClick={closeModal}>
          <ModalBox onClick={preventClose}>
            <InputRow labelName="이름" value={cardData.fcNm}></InputRow>
            <InputRow labelName="주소" value={cardData.fcAddr}></InputRow>
            <InputRow labelName="연락처" value={cardData.ref1}></InputRow>
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
      )}
    </>
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
