import {
  Container,
  SearchContainer,
  Input,
  TextOps,
  HeaderView,
} from "./Search.style";
import NotFound from "../../assets/images/Search/NotFound.svg";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [country, setContries] = useState("");

  useEffect(() => {
    if (country.length > 4) {
      handleData();
    }
  }, []);

  async function handleData() {
    await axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=cc0cf36a6b994dce969194452230803&q=${country}&aqi=no&lang=pt`
      )
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err));
  }

  return (
    <HeaderView>
      <Header tittle={"Buscar"} />
      <SearchContainer>
        <Input onChangeText={setContries} />
      </SearchContainer>

      <Container>
        <NotFound />
        <TextOps>
          OPS!
          {`\n`}
          {`\n`}
          {`\n`}
          Não foi possível encontrar o local desejado!
        </TextOps>
      </Container>
    </HeaderView>
  );
}
