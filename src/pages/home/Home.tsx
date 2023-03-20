import {
  Container,
  Location,
  Percentage,
  TittlePercentage,
  ViewContinue,
  ViewResume,
} from "./Home.style";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActivityIndicator, Image } from "react-native";

import Cloud from "../../assets/images/Home/Cloud.svg";
import Humidity from "../../assets/images/Home/Humidity.svg";
import Wind from "../../assets/images/Home/Wind.svg";

export default function Home() {
  async function handleData() {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=cc0cf36a6b994dce969194452230803&q=Paulista&aqi=no&lang=pt"
      );
      return response?.data;
    } catch (error) {
      throw new Error("Failed to fetch data");
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["home"],
    queryFn: handleData,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  console.log(data.current.condition.icon);

  return (
    <Container>
      <Location>{data.location.name + "," + data.location.country}</Location>
      <Location>{data.current.temp_c + `\u2022`} </Location>
      <Location>{data.current.condition.text} </Location>
      <Image
        resizeMode="contain"
        style={{ width: 300, height: 300 }}
        source={{ uri: `https:${data.current.condition.icon}` }}
      />

      <ViewResume>
        <ViewContinue>
          <Humidity />
          <Percentage>{data.current.humidity}%</Percentage>
          <TittlePercentage>Umidade</TittlePercentage>
        </ViewContinue>

        <ViewContinue>
          <Wind />
          <Percentage>{data.current.wind_kph}km/h</Percentage>
          <TittlePercentage>Veloc.Vento</TittlePercentage>
        </ViewContinue>

        <ViewContinue>
          <Cloud />
          <Percentage> {data.current.wind_mph}% </Percentage>
          <TittlePercentage>Chuva</TittlePercentage>
        </ViewContinue>
      </ViewResume>
    </Container>
  );
}
