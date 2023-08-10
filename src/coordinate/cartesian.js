import { curry } from "../utils";
import { scale, translate } from "./transforms";

// 笛卡尔坐标系转换
function coordinate(transformOptions, canvasOptions) {
	const { x, y, width, height } = canvasOptions;
	return [scale(width, height), translate(x, y)];
}

export const cartesian = curry(coordinate);
