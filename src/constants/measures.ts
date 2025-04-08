import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const CONTAINER_WIDTH = width * 0.92;
const MOVIMENT = (CONTAINER_WIDTH / 4) - 5;

export { width, height, CONTAINER_WIDTH, MOVIMENT };