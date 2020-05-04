<script>
  import Summary from "../components/Summary.svelte";
  import { currentRoute } from "../stores/route-store.js";

  import HnuPhotonics from "../cases/HnuPhotonics.svelte";
  import HawaiiBiotech from "../cases/HawaiiBiotech.svelte";
  import IqAnalog from "../cases/IqAnalog.svelte";
  import BioMarkerStrategies from "../cases/BioMarkerStrategies.svelte";
  import Kineta from "../cases/Kineta.svelte";
</script>

<style type="text/scss">
  .main-content {
    margin: 0 auto;
    max-width: 600px;

    // p {
    //   margin: 0 0 1rem;
    // }

    .logo {
      display: block;
      margin-bottom: 1rem;
    }
  }
</style>

<section class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">{$currentRoute.title}</div>

    <div class="box main-content is-clearfix">
      {#if $currentRoute.siteUrl}
        <a href={$currentRoute.siteUrl} target="_blank">
          <img src={$currentRoute.logoPath} alt="" class="logo" />
        </a>
      {:else}
        <img src={$currentRoute.logoPath} alt="" class="logo" />
      {/if}

      {#if $currentRoute.slug == '/case/hnu-photonics'}
        <HnuPhotonics />
      {:else if $currentRoute.slug === '/case/hawaii-bio'}
        <HawaiiBiotech />
      {:else if $currentRoute.slug === '/case/iq-analog'}
        <IqAnalog />
      {:else if $currentRoute.slug === '/case/biomarker-strategies'}
        <BioMarkerStrategies />
      {:else if $currentRoute.slug === '/case/kineta'}
        <Kineta />
      {:else}
        <div>Where's my page?</div>
      {/if}
    </div>
  </div>

  <Summary />
</section>
