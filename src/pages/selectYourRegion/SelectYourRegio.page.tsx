import {
  Container,
  Select,
  TextSelect,
  Tittle,
} from "./SelectYourRegion.style";
import SelectYourRegionSVG from "../../assets/images/Home/SelectYourRegion.svg";

export default function SelectYourRegion() {
  return (
    <Container>
      <Tittle>FindWeather</Tittle>
      <SelectYourRegionSVG />
      <Select>
        <TextSelect>
          Selecione aqui um local e encontre o clima em tempo real
        </TextSelect>
      </Select>
    </Container>
  );
}
