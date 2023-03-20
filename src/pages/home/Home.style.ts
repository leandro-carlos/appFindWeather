import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./../../assets/theme/appTheme";
import { View, Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  justify-content: center;
`;

export const Location = styled.Text`
  color: white;
  font-size: ${RFValue(25)}px;
`;

export const ImageNebli = styled(Image)`
  width: 200px;
  height: 200px;
`;
