import { RootStackParamList } from "../utils/RootParamList";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
