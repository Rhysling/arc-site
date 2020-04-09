<script>
  import Summary from '../components/Summary.svelte';
  import { currentRoute } from '../stores/route-store.js';

  //console.log($currentRoute);

</script>

<section class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      {$currentRoute.title}
    </div>

    <div class="box main-content is-clearfix">
      <a href="http://www.hibiotech.com/" target="_blank"><img src="/img/cases/logo-hawaii-bio.jpg" alt="" class="logo" /></a>

<img src="/img/cases/hbi-1.jpg" alt="" class="img-r" />
<p>Hawaii Biotech (HBI) is the oldest and largest biotech company in Hawaii, founded in 1982 by four University of Hawaii professors.</p>

<p>HBI researches and develops prophylactic vaccines for infectious diseases.  The company utilizes a vaccine platform technology
to produce recombinant subunit protein vaccines that optimizes the quality of recombinant protein and its impact on immunogenicity.
This proprietary platform develops vaccines for a variety of diseases, including Zika, West Nile, Dengue, tick borne encephalitis,
Ebola and other hemorrhagic fever viruses, and malaria.</p>

<p>HBI has a long record of winning and performing under major grants from NIAID, BARDA, DTRA, US Army, and other sources.</p>

<img src="/img/cases/hbi-2.jpg" alt="" class="img-l" />
<p>In late 2016, HBI had the opportunity to secure a new primary lab facility.  Financing for the construction was not readily available,
and the company did not want to incur the dilution from taking in additional equity investment.  ARC allowed HBI to capitalize
the stable, predictable cash flow of its large grand and contract portfolio to fund prompt completion of its new lab and office space.</p>

<p>Since then, HBI has used its credit line with ARC to buffer the chunky and intermittent disbursements associated
with large grants and contracts simplifying HBI's cash management needs.</p>

    </div>

    
  </div>

  <Summary />
</section>

<style type="text/scss">
  .main-content {
    margin: 0 auto;
    max-width: 600px;
    
    .arc-subhead {
      margin: 1.5rem 0 0.5rem;
    }

    p {
          margin: 0 0 1rem;
    }

    .logo {
      display: block;
      margin-bottom: 1rem;
    }

    .img-l {
      display: block;
      float: left;
      margin: 0 0.5rem 0.5rem 0;
    }

    .img-r {
      display: block;
      float: right;
      margin: 0 0 0.5rem 0.5rem;
    }
  }
</style>