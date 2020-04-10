<script>
import NavBar from './NavBar.svelte';

	let yr = (new Date()).getFullYear() - 2000;

</script>

<section class="section arc-footer">
    <div class="container">

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="arc-subhead">SEARCH SITE</div>
            <div class="field">
              <div class="control">
                <div class="gcse-search"></div>
                <!--
                <input class="input is-small" type="text" placeholder="Search">
                <button class="button is-small"><i class="fas fa-search"></i></button>
                -->
              </div>
            </div>
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="arc-subhead">CONTACT US</div>
            <div class="arc-title">American Research Capital, LLC</div>
            500 Yale Avenue North<br />
            Seattle, WA 98109
          </div>
        </div>

        <div class="tile is-parent">
          <div class="tile is-child">
            <div class="arc-subhead">PHONE &amp; EMAIL</div>
            <span class="arc-title">Main Phone:</span> (206) 494-0288<br />
            <span class="arc-title">Luke Fouke:</span> (206) 853-1652<br />
            <span class="arc-title">Robert Kummer:</span> (206) 818-2855<br />
            <br />
            <a href="mailto:info@american-research-capital.com?subject=Web Inquiry" class="arc-title">info@american-research-capital.com</a>
          </div>
        </div>
      </div>

    </div>
  </section>

  <section class="section arc-footer-bottom">
    <div class="container">
      <div class="left">
        &copy;2015-{yr} - American Research Capital, LLC
      </div>
      <div class="right">
        <NavBar isFooter="{true}" />
      </div>
    </div>
  </section>

<style type="text/scss">
  @import "../../node_modules/bulma/sass/utilities/_all.sass";

  .arc-footer {
    color: #dddddd;
    background-color: #222222;
    padding: 1rem;
    font-size: 13px;

    input {
      width: 200px;
    }
  }

  .arc-footer-bottom {
    color: #eeeeee;
    background-color: #333333;
    padding: 1rem 1rem 2rem;
    font-size: 12px;

    .left {
      float: left;

      @media screen and (max-width: $tablet) {
        float: none;
      }
    }

    .right {
      float: right;

      @media screen and (max-width: $tablet) {
        float: none;
      }
    }
  }

  .arc-subhead {
    color: #919191;
    margin: 0 0 0.25rem;
  }

  .arc-title {
    color: #ffffff;
    font-weight: bold;
    margin: 0;
  }

</style>