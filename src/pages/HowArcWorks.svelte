<script>
  import { fade } from 'svelte/transition';
  import Summary from '../components/Summary.svelte';
  import Qualifications from '../components/Qualifications.svelte';
  import { navTo } from '../stores/route-store.js';

</script>

<section transition:fade class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      How ARC Works
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <div class="tile is-child box">
          <img src="/img/sq-fed-research-projects2.png" alt="Capitol building" style="display:block; margin:0 auto;" />
          <div class="arc-subhead">Federal Research Contracts</div>
          <div>
            Federally sponsored research contracts are an excellent way for entrepreneurial companies to develop exciting
            new technologies with outstanding commercial potential.  When you receive a Small Business Innovation Research (SBIR)
            contract with an agency of the National Institutes of Health (NIH), Department of Defense (DOD) or other government
            branch or a subcontract from a federal grant to a university or other research institution, you have earned
            the opportunity to serve one of the most demanding customers in the world.  Best of all, you are funding your
            company by earning revenue, not just raising money from investors.
          </div>
          <p style="margin: 1rem 0 0;"><a href="/" on:click="{navTo}" data-dest="/working-capital">Unfortunately, winning the contract is not enough. &gt;&gt;</a></p>
        </div>
      </div>

      <div class="tile is-parent">
        <div class="tile is-child box">
          <Qualifications />
        </div>
      </div>

    </div>
  </div>

  <Summary />
</section>

<style type="text/scss">

</style>