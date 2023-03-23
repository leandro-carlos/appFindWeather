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

export default function Search() {
  const [country, setContries] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    if (country.length > 4) {
      handleData();
    }
  }, [country.length > 4]);

  async function handleData() {
    await axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cc0cf36a6b994dce969194452230803&q=${country}&aqi=no&lang=pt`
      )
      .then((resp) => {
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <HeaderView>
      <Header tittle={"Buscar"} />
      <SearchContainer>
        <Input onChangeText={setContries} />
      </SearchContainer>

      {data ? (
        <ContainerWithCard>
          <CardRegion
            tempNumber={data?.current?.temp_c}
            picture={data?.current?.condition.icon}
            cloudWeather={data?.current?.condition.text}
            textDescription={
              data?.location?.name + "," + data.location?.country
            }
          />
        </ContainerWithCard>
      ) : (
        <Container>
          <NotFound />
          <TextOps>
            OPS!
            {`\n`}
            Não foi possível encontrar o local desejado!
          </TextOps>
        </Container>
      )}
    </HeaderView>
  );
}
