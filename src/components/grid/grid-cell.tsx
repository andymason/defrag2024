import type { FunctionComponent } from "preact";

export const GridCell: FunctionComponent<{
  status: string;
  processed: boolean;
}> = () => {
  return <div class="grid__cell grid__cell--status-unused grid__cell--processed"></div>
}