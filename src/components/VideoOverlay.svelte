<script>
  import { isVideoDisplayed, toggleVideoDisplayed } from '../stores/general-store.js';

</script>

<div class="video-overlay" on:click="{toggleVideoDisplayed}" style="display:{$isVideoDisplayed ? "block" : "none"};">
  <i class="far fa-window-close fa-3x video-close"></i>
  <div class="video-box">
    <iframe width="600" height="340" src="https://www.youtube.com/embed/vgpTJ-2pmto?controls=1" title="ARC Video"></iframe>
  </div>
</div>

<style type="text/scss">
  @import "../styles/_custom-variables.scss";

  .video-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    cursor: pointer;

  }

  .video-close {
    position: fixed;
    top: 3rem;
    right: 3rem;
    color: #ffffff;
    opacity: 0.8;

    &:hover {
      opacity: 1.0;
    }
  }

  .video-box {
    position: fixed;
    border: 10px solid $arc-green;
    box-shadow: 10px;
    width: 620px;
    height: 360px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

</style>