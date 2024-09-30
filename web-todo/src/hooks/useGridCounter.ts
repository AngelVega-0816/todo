import { useEffect, useState } from "react";
import { useWindowSize } from "./useWindowSize";

type GridCounterProps = {
  percent: number;
  columnWidth: number;
  gap: number;
  quantityItems: number;
  maxWidth?: number;
};

type countColumnsRowsType = {
  columns: number;
  rows: number;
};

/**
 * Hook para calcular el número de columnas en una cuadrícula.
 *
 * @param {number} props.percent - Porcentaje del ancho de la ventana que se utilizará para calcular el número de columnas.
 * @param {number} props.columnWidth - Ancho de cada columna en la cuadrícula.
 * @param {number} props.gap - Espacio entre columnas en la cuadrícula.
 * @param {number} [props.maxWidth] - Ancho máximo de la cuadrícula (opcional).
 *
 * @returns {countColumnsRowsType}
 */
export const useGridCounter = ({
  percent,
  columnWidth,
  gap,
  quantityItems,
  maxWidth,
}: GridCounterProps) => {
  const windowSize = useWindowSize();
  const [countColumnsRows, setCountColumnsRows] =
    useState<countColumnsRowsType>({
      columns: 0,
      rows: 0,
    });

  useEffect(() => {
    if (windowSize.width * percent < (maxWidth || windowSize.width)) {
      const width = windowSize.width * percent;
      const newCountColumnsAndRows = { ...countColumnsRows };
      if (Math.floor(width / columnWidth) > 1) {
        let count = width - columnWidth;
        newCountColumnsAndRows.columns =
          Math.floor(count / (columnWidth + gap)) + 1;
      } else {
        newCountColumnsAndRows.columns = Math.floor(width / columnWidth) || 1;
      }
      newCountColumnsAndRows.rows = Math.ceil(
        quantityItems / newCountColumnsAndRows.columns
      );
      if (
        newCountColumnsAndRows.columns !== countColumnsRows.columns ||
        newCountColumnsAndRows.rows !== countColumnsRows.rows
      ) {
        setCountColumnsRows(newCountColumnsAndRows);
      }
    }
  }, [windowSize, quantityItems]);

  return countColumnsRows;
};
