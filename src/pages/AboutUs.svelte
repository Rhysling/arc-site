<script>
  import Summary from '../components/Summary.svelte';
  import Qualifications from '../components/Qualifications.svelte';

</script>

<section class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      About American Research Capital
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent is-8">
        <div class="tile is-child box main-content">
          <p style="margin-top:1rem;">
Entrepreneurial companies working on development and commercialization of new technologies usually discover their greatest challenge
is finding the capital they need to grow.  ARC provides a source of working capital leveraging the unique strength
of these companies – their stable source of cash flow with low default risk, screening &amp; selection for initial contract qualification,
ongoing government audit supervision, and proven administrative capability from ongoing contract performance.  We created ARC because
no other fund or financial institution is serving this need for these small businesses.
          </p>

          <div class="arc-subhead">Who We Are</div>
          
<div class="staff-name">Luke Fouke</div>
<div class="staff-title">Co-Founder & Chief Executive Officer</div>

<p>Prior to forming ARC, Mr. Fouke worked for five years raising capital for a Seattle-area biopharmaceutical company. There, he learned first-hand the financing and financial management challenges facing entrepreneurial companies performing commercial research and development as their core business. ARC was created to serve the unmet needs of this community.</p>
<p>Mr. Fouke’s career in banking and finance has focused on serving mid-market clients, including leasing and long-term finance, equity analysis and institutional brokerage with boutique investment banks, and commercial lending.</p>
<p>Mr. Fouke earned his MBA from Washington University’s Olin School of Business. He is a graduate of Denison University with a major in History and Spanish.

<div class="staff-name">Robert Kummer</div>
<div class="staff-title">Co-Founder & Chief Financial Officer</div>

<p>Over the past 20 years, Mr. Kummer has developed and led innovative businesses created to serve unmet opportunities in markets dominated by large, entrenched competitors.</p>
<p>Mr. Kummer co-founded Employer Direct Healthcare, a new kind of healthcare provider network that transforms the way self-funded employers purchase planned medical services.</p>
<p>He began his career with Merrill Lynch & Co.’s Investment Banking Division. Working both in New York and Los Angeles, he helped develop and execute innovative financings for healthcare systems and other corporate clients.</p>
<p>Mr. Kummer received an MBA from The Wharton School, University of Pennsylvania. He graduated magna cum laude from Princeton University, with a Bachelor of Science and Engineering degree and Engineering Physics Certificate.</p>

<div class="arc-subhead">Board of Advisors</div>

<div class="staff-name">Malcolm Witter</div>

<p>Mr. Witter’s career has focused on helping businesses succeed by forging new relationships, developing profitable partnerships and raising capital. He has served as investment banker, CFO and advisor to many companies and private organizations.</p>
<p>In 1997, he founded Kibble & Prentice Financial and grew it into the third biggest Washington State venture investment banking firm in just six years. There he was responsible for sourcing all deals, raising over $50 million in equity capital for clients, and managing investor relationships – during extremely challenging financial markets.</p>
<p>Flexcar, Omeros and Laptop Lane were among the portfolio companies for whom KPF was the first investment banker.</p>
<p>Mr. Witter was a partner of Compass Capital, a venture capital firm which created  superior returns from a diversified group of partner funds via equity and secured debt investments in their “A-List” portfolio companies in a systematic and disciplined fashion.   He also helped found and served as initial CFO of XYPOINT, the wireless telecom company responsible for “E-911” being fully and properly implemented by US carriers.</p>
<p>Mr. Witter currently serves as a trustee of the Dean Witter Foundation and in Corporate Development for USI, a nationwide insurance brokerage as Senior Director for New Business Acquisitions. He is also on the Board of Swag'r.</p>

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
  .main-content {

    .arc-subhead {
      margin: 1.5rem 0 0.5rem;
    }

    .staff-name {
      font-weight: bold;
      font-size: 1.1rem;
    }

    .staff-title {
      font-family: 'Source Sans Pro', sans-serif;
      font-style: italic;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin: 0 0 1rem;
    }
  }
</style>