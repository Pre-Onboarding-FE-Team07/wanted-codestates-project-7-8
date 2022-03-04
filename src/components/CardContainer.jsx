import styled from '@emotion/styled';
import ScrollView from './ScrollView';

export const CardContainer = styled(ScrollView)`
  max-width: 480px;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 1rem;
  padding: 1.4rem;
  justify-items: center;
`;
