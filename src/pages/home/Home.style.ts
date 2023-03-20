import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./../../assets/theme/appTheme";
import { View, Image } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
  padding: 0px 5%;
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

export const ViewResume = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  border-width: 1px;
  border-color: ${colors.subTitle};
  border-radius: 18px;
  width: 100%;
`;

export const ViewContinue = styled.View`
  align-items: center;
  padding: 0px 10px;
  height: 80px;
  justify-content: space-evenly;
`;

export const Percentage = styled.Text`
  font-family: overPassRegular;
  color: ${colors.white};
  font-size: ${RFValue(16)}px;
`;

export const TittlePercentage = styled.Text`
  color: ${colors.textPercents};
  font-family: overPassRegular;
  font-size: ${RFValue(14)}px;
`;
