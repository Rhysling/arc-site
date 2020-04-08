<script>
  import { fade } from 'svelte/transition';
  import Summary from '../components/Summary.svelte';
  import Qualifications from '../components/Qualifications.svelte';
  import { navTo } from '../stores/route-store.js';

</script>

<section transition:fade class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      The ARC Solution
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <div class="tile is-child box">
          <img src="/img/sq-arc-can-help.png" alt="Bridge to success" style="display:block; margin:0 auto;" />
          <div>
          
            <p>We created American Research Capital to provide working capital to entrepreneurial companies performing
              Federally-sponsored research contracts.  Our financing can reduce or eliminate the need to raise outside
              equity - making your life much easier and allowing you to focus on your work instead of trying to raise money.</p>

            <p>ARC helps companies &quot;bridge the gap&quot; between expenditures on research activities and reimbursements
              from the contracting agency.  By accelerating access to committed contract funding, ARC gives you the ability
            to get started immediately, hit milestones faster, focus on the research now, and avoid the distractions of fundraising.</p>

            <p>For companies winning multiple contracts over time, ARC can serve as an efficient part of the company's long-term capital structure.</p>

            <p>If you decide to, you can raise equity later when your company is more mature and at a better valuation.</p>

          <div class="arc-subhead">Here are just some of the benefits:</div>
          <ul>
            <li><span class="arc-subtitle">Improved cash flow</span> – Accelerating the pace of expenditure and reimbursement generates
              improved free cash flow through faster access to contract value, including indirect cost and fee amounts.</li>
            <li><span class="arc-subtitle">Faster development timeline</span> – Speed to market is critical, particularly for
              time-limited, time-sensitive intellectual property.</li>
            <li><span class="arc-subtitle">Much less expensive than equity capital</span> – the only alternative for most commercial
              research operations. For early stage companies, raising equity can be highly dilutive.</li>
            <li><span class="arc-subtitle">Non-distracting</span> – Raising money is time consuming and distracting. Financial partners
              bring an additional, ongoing communication and administrative burden.  Scientific/technical entrepreneurs don't want to
              spend their time finding, soliciting and managing equity investors.</li>
          </ul>

<div class="arc-subhead">Complement to the SBIR program</div>

ARC is a perfect complement to the SBIR program.  We are working alongside governmental agencies such as the National Institutes of Health, the Department of Defense, and others who understand our program is important for their SBIR recipients.  We have proven to be an important source of supplemental financing for companies performing SBIR work.  It’s simple, efficient, non-dilutive, and an outstanding alternative to bringing more equity investors into the company.
ARC delivers working capital for reimbursable expenditures designed to fit the requirements of federal research.  And,  no one else – not the banks, venture capitalists, or angel investors –  is serving this need.

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
          <p style="margin: 1rem 0 0;"><a href="/" on:click="{navTo}" data-dest="/case-studies">Here are examples of companies we have helped. &gt;&gt;</a></p>
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

  p {
    margin: 0 0 1rem;
  }

  ul {
    list-style-type: disc;
    margin-left: 0.5rem;
    padding-left: 0;

    li {
      margin: 1rem 6rem 1rem 3rem;
    }
  }
</style>