import {
  CloudyWeather,
  Container,
  Picture,
  TempAndPictureInRow,
  TextDescription,
  TextTemp,
} from "./CardRegion.style";

interface CardRegionProps {
  tempNumber?: string;
  picture?: string;
  cloudWeather?: string;
  textDescription?: string;
}

export default function CardRegion({
  tempNumber,
  picture,
  cloudWeather,
  textDescription,
  ...rest
}: CardRegionProps) {
  return (
    <Container>
      <TempAndPictureInRow>
        <TextTemp>{tempNumber}</TextTemp>
        <Picture source={{ uri: `https:${picture}` }} />
      </TempAndPictureInRow>
      <CloudyWeather>{cloudWeather}</CloudyWeather>
      <TextDescription>{textDescription}</TextDescription>
    </Container>
  );
}
