import { useCallback, useState } from 'react';
import styled from '@emotion/styled';

import DropdownList from './DropDown';

const list = ['이름', '주소', '메모'];

const SearchBar = ({ onQueryText }) => {
  const [dropdownSelected, setDropdownSelected] = useState(list[0]);

  const onDropdownClick = useCallback((text) => {
    setDropdownSelected(text);
  }, []);

  const queryTextHandler = useCallback(
    (e) => {
<<<<<<< HEAD
      onQueryText(dropdownSelected, e.target.value);
=======
      const queryText = `
      ${dropdownSelected}|${e.target.value}
    `;
      onQueryText(queryText);
>>>>>>> dev
    },
    [dropdownSelected, onQueryText]
  );

  return (
    <FlexContainer>
      <DropdownList list={list} onClickEvent={onDropdownClick} />
      <InputText placeholder="검색어를 입력해주세요" onChange={queryTextHandler} />
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 480px;
  margin: 1rem auto;
`;

const InputText = styled.input`
  margin-left: 0.5rem;
  flex-grow: 1;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: 1rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
`;

export default SearchBar;
