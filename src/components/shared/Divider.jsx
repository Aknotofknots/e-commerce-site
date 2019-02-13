import styled from 'styled-components';

const styles = (type, marginVal) => {
  if (type !== 'both') return `margin-${type}: ${marginVal}px`;
  else return `margin: ${marginVal}px 0`;
};

const Divider = styled.div`
  background-color: lightgrey;
  padding: 0.6px;
  width: 100%;
  opacity: 0.3;
  ${({ type, margin }) => type && margin && styles(type, margin)}
`;

export default Divider;
