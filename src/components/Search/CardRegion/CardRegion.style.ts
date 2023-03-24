import { RFValue } from "react-native-responsive-fontsize";
import { colors } from "./../../../assets/theme/appTheme";
import styled from "styled-components/native";

import { Image } from "react-native";

export const Container = styled.View`
  background-color: ${colors.backgroundButton};
  width: 155px;
  height: 180px;
  padding: 12px;
  border-radius: 20px;
`;

export const TempAndPictureInRow = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const Picture = styled(Image)`
  width: 38px;
  height: 25px;
`;

export const TextTemp = styled.Text`
  color: ${colors.white};
  font-size: ${RFValue(30)}px;
  font-family: Overpass;
`;

export const CloudyWeather = styled.Text`
  color: ${colors.subTitle};
  font-size: ${RFValue(18)}px;
  font-family: Overpass;
`;

export const TextDescription = styled.Text`
  color: ${colors.white};
  font-size: ${RFValue(16)}px;
  font-family: Overpass;
  line-height: 30px;
  text-align: left;
`;
