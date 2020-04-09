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
      <a href="https://www.iqanalog.com/" target="_blank"><img src="/img/cases/logo-iq-analog.jpg" alt="" class="logo" /></a>

<img src="/img/cases/xxx-1.jpg" alt="" class="img-r" />
<p>Todo.</p>

<img src="/img/cases/xxx-2.jpg" alt="" class="img-l" />
<p>Todo.</p>



<div class="arc-subhead">Financial Plan</div>

<p>Todo</p>

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