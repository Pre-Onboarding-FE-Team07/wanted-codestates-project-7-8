import { useCallback, useState } from 'react';
import styled from '@emotion/styled';

import DropdownList from './DropDown';

const list = ['선택', '선택'];

const SearchBar = () => {
  const onDropdownClick = useCallback((text) => {
    console.log(text);
  }, []);

  return (
    <FlexContainer>
      <DropdownList list={list} onClickEvent={onDropdownClick} />
    </FlexContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default SearchBar;
