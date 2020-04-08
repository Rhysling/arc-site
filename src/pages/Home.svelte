<script>
  import Summary from '../components/Summary.svelte';
  import { navTo } from '../stores/route-store.js';

</script>

<section class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      Working capital for entrepreneurial companies performing Federally-sponsored research contracts.
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div class="tile is-child box">
          <img src="/img/sq-fed-research-projects2.png" alt="Capitol building" />
          <div class="arc-subhead">Federal research contracts</div>
          are an excellent way for entrepreneurial companies to develop exciting new technologies with outstanding commercial potential.
          <p><a href="/" on:click="{navTo}" data-dest="/how-arc-works">More &gt;&gt;</a></p>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child box">
          <img src="/img/sq-find-working-capital.png" alt="Questions" />
          <div class="arc-subhead">Finding working capital?</div>
          Winning the contract is not enough. Entrepreneurial companies need working capital – the money to get started and grow the business.
          <span style="font-style:italic;">Who can you turn to?</span>
          <p><a href="/" on:click="{navTo}" data-dest="/working-capital" >More &gt;&gt;</a></p>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child box">
          <img src="/img/sq-arc-can-help.png" alt="Bridge to success" />
          <div class="arc-subhead">We can help.</div>
          We created American Research Capital (ARC) to help fund companies performing Federally-sponsored research contracts.  We invite you to look to ARC.
          <p><a href="/" on:click="{navTo}" data-dest="/arc-solution" >More &gt;&gt;</a></p>
        </div>
      </div>

    </div>
  </div>

  <Summary />
</section>

<style type="text/scss">

  .tile img {
    display: block;
    margin: 0 auto;
  }

</style>