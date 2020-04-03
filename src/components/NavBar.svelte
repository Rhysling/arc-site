<script>
  import { routes, navTo } from '../stores/route-store.js';

  export let isFooter = false;

  let topRoutes = $routes.children || [];
  let bottomRoutes = [$routes, ...topRoutes];
  let iLast = bottomRoutes.length - 1;

  let isActive = false;

  let toggleActive = function (e) {
    isActive = !isActive;
  };

  let setActiveFalse = function (e) {
    isActive = false;
  };

</script>

{#if isFooter}
  <div class="bottom-nav">
    {#each bottomRoutes as route, i}
      <a href="/" on:click="{navTo}" data-dest="{route.slug}">{route.title}</a>{#if i < iLast}&nbsp;&nbsp;|&nbsp;&nbsp;{/if}
    {/each}
  </div>
{:else}
  <nav class="container navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a href="/" on:click="{navTo}" data-dest="/" class="navbar-item" on:click="{setActiveFalse}">
        <img src="/img/arc-logo-sm.png" width="113" height="30" alt="ARC">
      </a>

      <button role="button" class="navbar-burger burger" class:is-active={isActive} aria-label="menu" aria-expanded="false" on:click="{toggleActive}">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div class="navbar-menu" class:is-active={isActive} on:click="{setActiveFalse}">
      <div class="navbar-start">
        {#each topRoutes as r}
          {#if r.children && r.children.length}
            <div class="navbar-item has-dropdown is-hoverable">
              <a href="/" on:click="{navTo}" data-dest="{r.slug}" class="navbar-link">{r.title}</a>
              <div class="navbar-dropdown">
                {#each r.children as c}
                  <a href="/" on:click="{navTo}" data-dest="{c.slug}" class="navbar-item">{c.title}</a>
                 {/each}
              </div>
            </div>
          {:else}
            <a href="/" on:click="{navTo}" data-dest="{r.slug}" class="navbar-item">{r.title}</a>
          {/if}
        {/each}
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-primary" title="Search"><i class="fas fa-search"></i></button>
        </div>
      </div>
    </div>
  </nav>
{/if}

<style type="text/scss">
  .navbar a {
    color: #326297;

    &:hover {
      color: darken(#326297, 20%);
    }
  }

  .bottom-nav a {
    color: #eeeeee;
  }

</style>