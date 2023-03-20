import { Container, ImageNebli, Location } from "./Home.style";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ActivityIndicator, Image } from "react-native";

export default function Home() {
  async function handleData() {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/current.json?key=cc0cf36a6b994dce969194452230803&q=Paulista&aqi=no"
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
        style={{ width: 50, height: 50 }}
        source={{ uri: `https:${data.current.condition.icon}` }}
      />
    </Container>
  );
}
