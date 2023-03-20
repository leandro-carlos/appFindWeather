import { useNavigation } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

import Trovoadas from "../../assets/images/Home/Trovoadas.svg";

import { ButtonStart, Container, TextMain, TextSub } from "./Welcome.styles";

export default function Welcome() {
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate("TabStack");
  }

  return (
    <Container>
      <Trovoadas />
      <TextMain>Descubra o Clima {`\n`} na sua Cidade</TextMain>
      <TextSub>
        Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma
        da sua mão
      </TextSub>
      <ButtonStart onPress={navigateToHome}>
        <TextSub color={"white"}>Iniciar</TextSub>
      </ButtonStart>
    </Container>
  );
}
