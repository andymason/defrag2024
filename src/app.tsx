import type { FunctionComponent } from "preact";
import { Grid } from "./components/grid/grid"

export const App: FunctionComponent = () => {
  return <div id="app">
    <header class="header">
      <h1 class="header__title">Optimize</h1>
      <div class="hedaer__shortcut">Esc=Stop Defrag</div>
    </header>

    <Grid />

    <section class="status">
      <h2 class="status__title">Status</h2>
      <div class="progress">
        <div class="progress__title">Cluster 6,345</div>
        <div class="progress__percentage">11%</div>
        <div class="progress__bar"></div>
        <div class="progress__time">Elapsed TIme: 00:23:22</div>
      </div>
      <div class="status__description">Full Optimization</div>
    </section>

    <section class="legend">
      <h2 class="legend__title">Legend</h2>
      <div class="legend__list">
        <div class="legend__item">* - Used</div>
        <div class="legend__item"># - Unused</div>
        <div class="legend__item">r - Reading</div>
        <div class="legend__item">w - Writing</div>
        <div class="legend__item">B - Bad</div>
        <div class="legend__item">x - Unmoved</div>
      </div>
      <div class="legend__description">
        Drive C: 1 block = 54 clusters
      </div>
    </section>

    <footer class="footer">
      <div class="footer__status">Writing...</div>
      <div class="footer__title">Microsoft Defrag</div>
    </footer>
  </div>
}