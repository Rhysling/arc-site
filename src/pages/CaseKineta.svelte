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
      <a href="https://kinetabio.com/" target="_blank"><img src="/img/cases/logo-kineta.jpg" alt="" class="logo" /></a>

<p>Kineta fills a void in the biopharmaceutical industry by efficiently advancing therapies
from discovery to clinical proof of concept.  Kineta actively collaborates with a broad array of private,
government and industry partners to advance innovative research in autoimmune diseases, antivirals and chronic pain,
among other areas.  The company has established and is expanding on a diverse pipeline of novel, life improving
therapies that address critical, unmet patient needs.</p>

<img src="/img/cases/kineta-1.jpg" alt="" style="margin-bottom:0.5rem;" />
<p>Kineta has earned multiple research and development contracts primarily originating via grants from the
National Institutes of Health (NIH).  These contracts have been an important source of revenue which has allowed
Kineta to advance critical aspects of its research while reducing the need for outside capital.</p>

<p>Kineta was organized with a unique structure designed to enable an innovative funding model to mitigate risk,
open channels for investment in specific opportunities, and create the potential for earlier return to investors.
This structure has allowed Kineta to attract non-traditional sources for the large amount of equity capital required
for biomedical development.  To date, Kineta has been able to avoid the extreme financial dilution frequently
associated with institutional equity investment.</p>

<p>American Research Capital's lending program fits perfectly with Kineta's strategy to maximize use of non-dilutive capital.
Because Kineta performs under multiple contracts of varying term, the company used its credit line from ARC
as an evergreen source, effectively delaying the need for additional equity until the company had achieved more milestones and
could bring in the equity at a higher, less dilutive valuation.</p>

<p>Kineta achieved a successful exit with ARC in the fall of 2017.</p>

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