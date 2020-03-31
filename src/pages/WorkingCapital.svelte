<script>
  import Summary from '../components/Summary.svelte';
  import Qualifications from '../components/Qualifications.svelte';

  import { navTo } from '../stores/route-store.js';

	export let slug = null;
</script>

{#if slug === "/working-capital"}
  <section class="section" style="padding-top:1rem;">
    <div class="container">
      <div class="arc-head">
        Working Capital
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent is-8">
          <div class="tile is-child box">
            <img src="/img/sq-find-working-capital.png" alt="Questions" style="display:block; margin:0 auto;" />
            <div class="arc-subhead">Where can you find working capital for your research?</div>
            <div>
            One of the greatest challenges innovative and entrepreneurial companies face is access to working capital – the
            money you need to get started and grow your business.  Finding a source for these funds can be a huge distraction
            and a tremendous waste of time and energy.  And, your alternatives are not very appealing:
            <ul>
            <li>Do you finance the initial work yourself? How much can you afford? What if there are multiple owners?
              Will they all contribute?</li>
            <li>Banks, when they will lend at all, require personal guarantees from the company’s owners and executives.
              They only lend to profitable business with hard collateral.</li>
            <li>Angel investors can take a long time to find, present to, and close. You need offering documents and lawyers.
              And, now you have partners – with you forever, asking questions, needing reports.</li>
            <li>Venture capitalists can fund you – at a great cost. You work for them and they get (almost) all the upside
              if you succeed.  Is that why you started your own company?</li>
            </ul>

            </div>
            <p><a on:click="{navTo}" data-dest="/arc-solution">We understand and we can help you. Here's how. &gt;&gt;</a></p>
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
{/if}

<style type="text/scss">

 ul {
  list-style-type: disc;
  margin-left: 0.5rem;
  padding-left: 0;

  li {
    margin: 1rem 6rem 1rem 3rem;
  }
}
</style>