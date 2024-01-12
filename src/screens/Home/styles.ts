import styled from "styled-components/native";
import theme from "../../theme";

import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #000;

  background-color: ${theme.COLORS.GRAY_400};

  padding: 50px;
  padding-bottom: ${Platform.OS === 'android' ? 10 : 0}px;
`;

export const TextSignIn = styled.Text`
  color: ${theme.COLORS.YELLOW_500};
`;

export const Header = styled.View`
  margin-bottom: 36px;
  margin-top: -112px;

  align-items: center;
  
`;

export const LogoImg = styled.Image`
  width: 300px;
  height: 300px;
  object-fit: cover;
`;

