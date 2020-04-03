<script>
  import { navTo } from '../stores/route-store.js';

  export let slug = null;
  

</script>

{#if slug === "/case-studies"}
  <section class="section" style="padding-top:1rem;">
    <div class="container">
      <div class="arc-head">
        Case Studies
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="/img/cases/logo-hnu-photonics.jpg" alt="" />
            <div class="arc-subhead">H Nu Photonics</div>
            We created American Research Capital (ARC) to help fund companies performing Federally-sponsored research contracts.  We invite you to look to ARC.
            <p><a href="/" on:click="{navTo}" data-dest="/case/hnu-photonics">More &gt;&gt;</a></p>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="/img/cases/logo-hawaii-bio.jpg" alt="" />
            <div class="arc-subhead">Hawaii Biotech</div>
            We created American Research Capital (ARC) to help fund companies performing Federally-sponsored research contracts.  We invite you to look to ARC.
            <p><a href="/" on:click="{navTo}" data-dest="/case/hawaii-bio" >More &gt;&gt;</a></p>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child box">
            <img src="/img/cases/logo-iq-analog.jpg" alt="" />
            <div class="arc-subhead">IQ-Analog Corporation</div>
            We created American Research Capital (ARC) to help fund companies performing Federally-sponsored research contracts.  We invite you to look to ARC.
            <p><a href="/" on:click="{navTo}" data-dest="/case/iq-analog" >More &gt;&gt;</a></p>
          </div>
        </div>

      </div>
    </div>

  </section>
{/if}

<style type="text/scss">

  .tile img {
    display: block;
    margin: 0 auto;
  }

  .arc-subhead {
    margin: 0.5rem 0;
  }

</style>