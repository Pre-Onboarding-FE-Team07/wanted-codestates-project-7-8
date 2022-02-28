import { useCallback, useState, useRef, memo } from 'react';
import styled from '@emotion/styled';

const DropdownList = ({ list, onClickEvent }) => {
  const [dropDownLabel, setDropDownLabel] = useState(list[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const curPos = useRef(null);

  const showDropBox = useCallback(() => {
    setIsDropdownOpen((value) => !value);
  }, []);

  const selectQuery = useCallback(
    (e) => {
      onClickEvent(e.target.textContent);
      setDropDownLabel(e.target.textContent);
      setIsDropdownOpen(false);
    },
    [onClickEvent]
  );

  return (
    <>
      <Dropdown ref={curPos} onClick={showDropBox}>
        {dropDownLabel}
        <DownBtn />
      </Dropdown>
      {isDropdownOpen && (
        <DropListContainer pos={curPos.current} onClick={selectQuery}>
          {list?.map((item, index) => (
            <div key={index}>{item}</div>
          ))}
        </DropListContainer>
      )}
    </>
  );
};

const Dropdown = styled.div`
  display: flex;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid rgba(0, 0, 0, 0.5);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  align-items: center;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  cursor: pointer;

  & svg {
    margin-left: 1.5rem;
  }

  &:hover {
    border: 1px solid rgba(0, 0, 0, 0.75);
  }
`;

const DownBtn = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="#000000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m4 9l8 8l8-8"
      />
    </svg>
  );
};

const DropListContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: ${({ pos }) => pos.offsetLeft}px;
  top: ${({ pos }) => pos.offsetTop + pos.offsetHeight + 10}px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  width: ${({ pos }) => pos.offsetWidth}px;

  & div {
    text-align: center;
    padding: 0.5rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export default memo(DropdownList);
