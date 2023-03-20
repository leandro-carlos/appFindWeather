import {
  View,
  Pressable,
  TouchableOpacityProps,
  TouchableOpacity,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { colors, STATUSBAR_HEIGHT } from "./../../assets/theme/appTheme";
import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: ${STATUSBAR_HEIGHT};
  height: 40px;
  width: 100%;
  margin-bottom: 20px;
`;

export const CircleBack = styled<TouchableOpacityProps>(TouchableOpacity)`
  width: 40px;
  height: 40px;
  background-color: ${colors.background};
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  border-width: 1px;
  border-color: ${colors.subTitle};
  position: absolute;
`;

export const Title = styled.Text`
  color: white;
  font-size: 16px;
  align-self: center;
`;
