import styled from 'styled-components';

export const Background = styled.div`
  /* The image used */
  background-image: url('assets/img/login.jpg');
  background-color: rgba(0, 0, 0, 0.5);
  /* Add the blur effect */
  filter: brightness(0.5);
  -webkit-filter: brightness(0.5);
  /* Full height */
  height: 100%;
  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const FrontItem = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 93%;
`;
