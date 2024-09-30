type createGridArrayArgs = {
  itemsCount: number;
  columns: number;
  rows: number;
};

export enum BorderSide {
  TOP = "top",
  RIGHT = "right",
  BOTTOM = "bottom",
  LEFT = "left",
}

export const createGridArray = ({
  itemsCount,
  columns,
  rows,
}: createGridArrayArgs): number[][] => {
  if (rows) {
    const arrayGrid = Array.from({ length: rows }, () =>
      Array(columns).fill(0)
    );

    let remainingItems = itemsCount;
    let currentRow = 0;
    let currentCol = 0;

    while (remainingItems > 0) {
      if (currentCol === columns) {
        currentCol = 0;
        currentRow++;
      }

      if (currentRow === rows) {
        break;
      }
      arrayGrid[currentRow][currentCol] = 1;
      currentCol++;
      remainingItems--;
    }

    return arrayGrid;
  } else return [];
};

export const arrOccupiedSides = (arr: number[][]): string[] => {
  const busySides = [];
  if (arr.length) {
    const rows = arr.length;
    const cols = arr[0].length;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (arr[i][j] === 1) {
          const sides = [];

          if (j > 0 && arr[i][j - 1] === 1) {
            sides.push(BorderSide.LEFT);
          }

          if (j < cols - 1 && arr[i][j + 1] === 1) {
            sides.push(BorderSide.RIGHT);
          }

          if (i > 0 && arr[i - 1][j] === 1) {
            sides.push(BorderSide.TOP);
          }

          if (i < rows - 1 && arr[i + 1][j] === 1) {
            sides.push(BorderSide.BOTTOM);
          }

          busySides.push(sides.join(" "));
        }
      }
    }
  } else busySides[0] = "";
  return busySides;
};

export const getOccupiedSides = ({
  itemsCount,
  columns,
  rows,
}: createGridArrayArgs) => {
  return arrOccupiedSides(createGridArray({ itemsCount, columns, rows }));
};
