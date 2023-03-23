import { TextInput, TextInputProps, KeyboardAvoidingView } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./../../assets/theme/appTheme";
import styled from "styled-components/native";
import { verticalScale } from "react-native-size-matters";

export const HeaderView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${colors.background};
  padding: 0px 5%;
`;

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${verticalScale(50)}px;
`;

export const ContainerWithCard = styled.View`
  padding-top: 20px;
`;

export const SearchContainer = styled.View`
  background-color: ${colors.circleBlacl};
  width: 100%;
  height: 50px;
  border-radius: 12px;
  padding: 15px;
`;

export const Input = styled(TextInput)`
  color: white;
  flex: 1;
`;

export const TextOps = styled.Text`
  color: ${colors.subTitle};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: ${verticalScale(50)}px;
`;
