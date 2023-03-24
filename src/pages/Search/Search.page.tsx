import {
  Container,
  SearchContainer,
  Input,
  TextOps,
  HeaderView,
  ContainerWithCard,
} from "./Search.style";
import NotFound from "../../assets/images/Search/NotFound.svg";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import CardRegion from "../../components/Search/CardRegion/CardRegion";
import { useMutation } from "@tanstack/react-query";

export default function Search() {
  const [region, setRegion] = useState("");

  useEffect(() => {
    if (region.length > 3) mutation.mutate();
  }, [region]);

  const mutation = useMutation({
    mutationFn: handleData,
  });

  async function handleData() {
    const result = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=cc0cf36a6b994dce969194452230803&q=${region}&aqi=no&lang=pt`
    );
    return result.data;
  }

  return (
    <HeaderView>
      <Header tittle={"Buscar"} />
      <SearchContainer>
        <Input onChangeText={setRegion} />
      </SearchContainer>

      {!mutation.data ? (
        <Container>
          <NotFound />
          <TextOps>
            OPS!
            {`\n`}
            Não foi possível encontrar o local desejado!
          </TextOps>
        </Container>
      ) : (
        <ContainerWithCard>
          <CardRegion
            tempNumber={mutation.data?.current?.temp_c}
            picture={mutation.data?.current?.condition.icon}
            cloudWeather={mutation.data?.current?.condition.text}
            textDescription={
              mutation.data?.location.name +
              "," +
              mutation.data?.location.country
            }
          />
        </ContainerWithCard>
      )}
    </HeaderView>
  );
}
