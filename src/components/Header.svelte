<script>
  import Headroom from "svelte-headroom";
  import NavBar from './NavBar.svelte';

  import { isVideoDisplayed, toggleVideoDisplayed } from '../stores/general-store.js';

  export let slug = null;

  let hi = function () { alert("Clicked!") };
	
</script>

{#if slug}
  <Headroom offset="{50}">
    <div class="arc-nav">
      <NavBar isFooter="{false}" />
    </div>
  </Headroom>
  {#if slug === "/"}
    <div class="logo">
      <img src="/img/arc-logo4.png" alt="American Research Capital" />
    </div>
    <div class="head">
      <img src="/img/arc-head.jpg" alt="" />
      <div class="play-button" on:click="{toggleVideoDisplayed}" style="display:{$isVideoDisplayed ? "none" : "block"};">
        <i class="fas fa-play"></i> Play Video
      </div>
    </div>
    <div class="subhead">
      Financing Designed for Research
    </div>
  {:else}
    <div class="head2">
      <img src="/img/arc-head3.jpg" alt="" />
    </div>  
  {/if}
{/if}

<style type="text/scss">
  @import "../styles/_custom-variables.scss";

  .logo {
    margin: 60px 0 0;
    width: 100%;

    img {
      display: block;
      margin: 0 auto;
      height: 150px;
      width: auto;
    }
  }

  .arc-nav {
    margin: 0;
    width: 100%;
    background-color: #fff;
  }

  .head {
    position: relative;
    margin: 0;
    width: 100%;
    background-image: url("/img/arc-head-bg.jpg");

    img {
      display: block;
      margin: 0 auto;
      height: auto;
      width: auto;
    }
  }

  .play-button {
    position: absolute;
    color: darken($arc-green, 20%);
    background-color:  rgba(255, 255, 255, 0.85);
    padding: 1rem;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    border: 3px solid $arc-green;
    border-radius: 6px;
    width: 180px;
    height: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;

    &:hover {
      background-color:  rgba(255, 255, 255, 0.95);
      border-color: darken($arc-green, 20%);
    }
  }

  .head2 {
    margin: 60px 0 0;
    width: 100%;
    background-image: url("/img/arc-head3-bg.jpg");

    img {
      display: block;
      margin: 0 auto;
      height: auto;
      width: auto;
    }
  }

.subhead {
  width: 100%;
  font-family: 'Montserrat', serif;
  font-size: 30px;
  text-align: center;
  color: white;
  background-color: #0174b7;
  padding: 4px;
}

</style>