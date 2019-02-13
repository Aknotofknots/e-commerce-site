import { keyframes } from 'styled-components';

const animateInputHeight = (heightVal = 30, marginVal = 10) => keyframes`
to {
  height: ${heightVal}px;
  margin-top: ${marginVal}px;
}
`;
const animateBackdropHeight = (heightVal = 70) => keyframes`
to {
  height: ${heightVal}vh;
}
`;
const animateInputIconOpacity = (opacityVal = 1) => keyframes`
to {
  opacity: ${opacityVal};
}
`;

export { animateInputHeight, animateBackdropHeight, animateInputIconOpacity };
