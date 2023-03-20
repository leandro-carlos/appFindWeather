import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { colors } from "../../assets/theme/appTheme";

import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  padding: 0px 25px;
  align-items: center;
  justify-content: center;
`;

export const TextMain = styled.Text`
  font-size: ${RFValue(33)}px;
  color: ${colors.white};
  font-family: overPassMedium;
  text-align: center;
  margin-bottom: 33px;
`;

export const TextSub = styled.Text`
  font-size: ${RFValue(22)}px;
  color: ${({ color }) => color || colors.subTitle};
  font-family: overPassRegular;
  text-align: center;
`;

export const ButtonStart = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${colors.backgroundButton};
  border-width: 1px;
  border-color: ${colors.white};
  border-radius: 18px;
  height: 54px;
  margin-top: 70px;

  align-items: center;
  justify-content: center; ;
`;
