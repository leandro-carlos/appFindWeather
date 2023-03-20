import { CircleBack, Container, Title } from "./Header.style";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Header({ tittle }) {
  return (
    <Container>
      <CircleBack>
        <MaterialIcons name="arrow-back-ios" color={"white"} />
      </CircleBack>
      <Title> {tittle} </Title>
    </Container>
  );
}
