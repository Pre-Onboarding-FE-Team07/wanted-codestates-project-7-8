import { css } from "@emotion/react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ModalContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.38);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  min-width: 300px;
  max-width: 480px;
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
  margin-bottom: 0.2rem;
`;
const Value = styled.p`
  margin: 0;
`;
const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 0 1rem;
`;

const Button = styled.button`
  border-radius: 0.28rem;
  border: 0;
  outline: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  flex: 1;
  padding: 0.6rem;
  background-color: ${(props) =>
    props.color === "red" ? "#E74C3C" : "#3FC176"};
`;

const InputRow = ({ labelName, value, allowEdit }) => (
  <Row>
    <Label>{labelName}</Label>
    <Value>{value}</Value>
  </Row>
);

InputRow.propTypes = {
  labelName: PropTypes.string,
  value: PropTypes.string,
  allowEdit: PropTypes.bool,
};

function Modal({ type }) {
  return (
    <ModalContainer>
      <ModalBox>
        <InputRow labelName="이름" value="홍길동"></InputRow>
        <InputRow labelName="이름" value="홍길동"></InputRow>
        <InputRow labelName="메모" value="홍길동" allowEdit={true}></InputRow>
        <ButtonWrap>
          {type === "edit" ? (
            <>
              <Button color="red">삭제</Button>
              <Button>수정</Button>
            </>
          ) : (
            <Button>저장</Button>
          )}
        </ButtonWrap>
      </ModalBox>
    </ModalContainer>
  );
}

export default Modal;
