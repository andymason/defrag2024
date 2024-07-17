import type { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { GridCell } from "./grid-cell"

export const Grid: FunctionComponent = () => {

  const [cells, setCells] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const newCell = <GridCell processed={false} status="Used" />;
      const newCells = [...cells, newCell];
      setCells(newCells);
    }, 1000)
  });

  return <div class="grid">
    {[...cells]}
  </div>
}