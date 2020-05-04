<script>
  import { toggleVideoDisplayed } from "../stores/general-store.js";
</script>

<style type="text/scss">
  @import "../styles/_custom-variables.scss";

  .qualifications {
    //font-size: 1.1rem;

    .q-head {
      font-family: "book antiqua", palatino, sans-serif;
      font-size: 1.3rem;
      font-weight: bold;
    }

    .q-subhead {
      font-family: "book antiqua", palatino, sans-serif;
      font-size: 1.1rem;
      font-weight: bold;
    }

    img {
      display: block;
      margin: 1rem auto;
    }

    ul {
      list-style-type: disc;
      margin-left: 0.5rem;
      padding-left: 0;

      li {
        margin: 0 0 0 10px;
        font-family: "Source Sans Pro", sans-serif;
        font-style: italic;
        font-size: 1.1rem;
      }
    }
  }

  .video {
    .video-wrapper {
      position: relative;
      margin: 0;
    }

    img {
      display: block;
      margin: 0.5rem auto;
    }

    .play-button {
      position: absolute;
      color: darken($arc-green, 20%);
      background-color: rgba(255, 255, 255, 0.85);
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
        background-color: rgba(255, 255, 255, 0.95);
        border-color: darken($arc-green, 20%);
      }
    }
  }
</style>

<div class="qualifications">
  <p class="q-head">Who qualifies for financing</p>
  <img src="/img/arc-logo-med.png" alt="ARC" />
  <p class="q-subhead">Here are the key criteria:</p>
  <ul style="font-style:italic;">
    <li>
      Are you either a direct federal research contract recipient or a
      subcontractor through a university, research institution, or major prime
      contractor?
    </li>
    <li>Have you successfully completed at least one such contract?</li>
    <li>Are you currently performing on one or more such contracts?</li>
    <li>
      Do you have (or expect to have) sufficient remaining balances on your
      contracts to support a minimum loan size of $1,000,000?
    </li>
  </ul>
  <div class="video">
    <p class="q-head" style="margin:1rem 0 0;">See ARC Overview Video</p>
    <div class="video-wrapper">
      <img src="/img/arc-head-video-side.jpg" alt="See Video" />
      <div class="play-button" on:click={toggleVideoDisplayed}>
        <i class="fas fa-play" />
        Play Video
      </div>
    </div>
  </div>
</div>
