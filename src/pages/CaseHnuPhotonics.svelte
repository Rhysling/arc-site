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
      <a href="http://www.hnuphotonics.com/" target="_blank"><img src="/img/cases/logo-hnu-photonics.jpg" alt="" class="logo" /></a>

<img src="/img/cases/hnu-1.jpg" alt="" class="img-r" />
<p>Incorporated in 2006 and based on Maui, Hawaii, HNu Photonics is a science and technology company creating cutting-edge technologies
and transforming innovative ideas into state-of-the-art products with commercial, scientific and military applications.
The focus of the company is renewable energy, defense photonics, specialized optics, and medical imaging technologies.
HNu has already introduced revolutionary advances in each of these areas, including major breakthroughs in solar energy generation
with previously unseen advances in efficiency and practicality.</p>

<img src="/img/cases/hnu-2.jpg" alt="" class="img-l" />
<p>HNu Photonics has enjoyed a long-standing relationship with the military, having placed in service a number of successful technologies.
Current projects with military applications include multi-dimensional sensor technology utilizing 3D imaging, spectrometer design and development,
laser beam control interfacing and the development of beam projectors and receivers.</p>

<img src="/img/cases/hnu-3.jpg" alt="" class="img-r" />
<p>HNu Photonics is organized as a vertically-integrated research, design, fabrication, testing and marketing operation which enables
HNu to nurture technological innovations from concept to final product.  HNu’s expertise and capabilities with broad applications
across various domains of investigation, design and fabrication are the keys to its successes.</p>

<img src="/img/cases/hnu-4.jpg" alt="" class="img-l" />
<p>HNu Photonics' Co-Founder and CEO, Daniel O'Connell, has been researching, designing, fabricating and field testing advanced optical
imaging and spectral imaging systems since 1989. He is the co-inventor of 17 patents covering a vast array of optical technologies, including
the medical imaging breakthrough, CellTray.  The CellTray technology was initially funded under an NSF SBIR grant and became the basis for Nanopoint.</p>

<div class="arc-subhead">Financial Plan</div>

<img src="/img/cases/hnu-5.jpg" alt="" class="img-r" />
<p>HNu Photonics was created and has been able to grow to date entirely without raising outside equity capital.  Leveraging the technical expertise
and proven record of success of its founders, HNu was able to win key contracts at inception.  By performing on those contracts and exercising
careful financial management, HNu built its capital base the old fashioned way – by earning it.</p>

<img src="/img/cases/hnu-6.jpg" alt="" class="img-l" />
<p>HNu's technologies address the needs of customers across scientific, military and commercial sectors, so HNu operates under a diversified portfolio
of contracts yielding predictable future revenue.  American Research Capital (ARC) is able to look to this flow of income along with HNu’s record
of success to finance the capital investment required for projects and opportunities that are not immediately self-funding.  ARC gives HNu
the flexibility to accelerate the pace of development, take on larger orders, and grow its business more quickly without the dilution and
distraction of outside investors.  ARC allows HNu’s founders to keep their focus on their customers, their markets, and their technologies,
not their &quot;exit strategy.&quot;</p>

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