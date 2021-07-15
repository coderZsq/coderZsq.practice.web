// type用于定义类型别名(type alias)
type IDType = string | number | boolean;
type PointType = {
  x: number;
  y: number;
  z?: number;
};

function printId(id: IDType) {}

function printPrint(point: PointType) {}
