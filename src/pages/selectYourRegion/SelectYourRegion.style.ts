import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./../../assets/theme/appTheme";
import styled from "styled-components/native";

import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 80px 25px;
  align-items: center;
  justify-content: space-between;
`;

export const Tittle = styled.Text`
  color: ${colors.white};
  font-size: ${RFValue(33)}px;
  font-family: overPassMedium;
`;

export const Select = styled(TouchableOpacity)``;

export const TextSelect = styled.Text`
  color: ${colors.subTitle};
  font-size: ${RFValue(22)}px;
  font-family: overPassRegular;
  text-align: center;
  text-decoration-line: underline;
`;
