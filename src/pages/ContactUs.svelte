<script>
  import Summary from '../components/Summary.svelte';
  import { navTo } from '../stores/route-store.js';

  let msg = {
    name: "",
    email: "",
    company: "",
    phone: "",
    message: ""
  };

  let isValidName = null;    // true / false
  let isValidEmail = null;   // true / false
  let isValidCompany = null; // true / false
  let emailValidationMessage = "";
  let validationSummaryMessage = "";
  let isDone = false;

  $: isAllValid = isValidName && isValidEmail && isValidCompany;


  let validateName = function () {
    msg.name = msg.name || "";
    msg.name = msg.name.trim();

    isValidName = msg.name.length > 2;
  };

  let validateEmail = function () {
    msg.email = msg.email || "";
    emailValidationMessage = "";
    msg.email = msg.email.trim();

    if (msg.email == "") {
      emailValidationMessage = "Email required.";
      isValidEmail = false;
      return;
    }

    isValidEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(msg.email);

    if (!isValidEmail)
      emailValidationMessage = "Email address doesn't look right.";
  };

  let validateCompany = function () {
    msg.company = msg.company || "";
    msg.company = msg.company.trim();

    isValidCompany = msg.company.length > 2;
  };

  let resetValues = function () {
    msg.name = "";
    msg.email = "";
    msg.company = "";
    msg.phone = "";
    msg.message = "";
  };

  let submit = function () {
    validateName();
    validateEmail();
    validateCompany();

    if (!isAllValid) {
      validationSummaryMessage = "Please make the changes noted above.";
      return;
    }

    // Send it

    fetch("/api/sendcontact?k=812g", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msg),
    })
    //.then((response) => response.json())
    .then((response) => {
      if (response.ok) {
        console.log("Success:", response);
        validationSummaryMessage = "";
        isDone = true;
      }
      else {
        console.log("Failure:", response);
        validationSummaryMessage = "Something went wrong.  Please call or email us directly.";
        isDone = false;
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      validationSummaryMessage = "Something went wrong.  Please call or email us directly.";
      isDone = false;
    });

  };

  let cancel = function () {
    resetValues();

    isValidName = null;
    isValidEmail = null;
    isValidCompany = null;
    emailValidationMessage = "";
    validationSummaryMessage = "";

    isDone = false;
  };

</script>

<section class="section" style="padding-top:1rem;">
  <div class="container">
    <div class="arc-head">
      Contact Us
    </div>

    {#if !isDone}
    <div class="box main-content">

      <!-- Form start-->
      <div class="field">
        <label class="label">Name <span class="is-size-7 has-text-danger" title="Required">(*)</span></label>
        <div class="control has-icons-right">
          <input class="input" class:is-info={isValidName === null} class:is-success={isValidName === true} class:is-danger={isValidName === false}
            type="text" placeholder="Your name" bind:value={msg.name} on:blur={validateName} />
          <span class="icon is-small is-right">
            {#if isValidName === true}<i class="fas fa-check"></i>{/if}
            {#if isValidName === false}<i class="fas fa-exclamation-triangle"></i>{/if}
          </span>
        </div>
        {#if isValidName === false}<p class="help is-danger">Please include your name.</p>{:else}<p class="help">&nbsp;</p>{/if}
      </div>

      <div class="field">
        <label class="label">Email <span class="is-size-7 has-text-danger" title="Required">(*)</span></label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" class:is-info={isValidEmail === null} class:is-success={isValidEmail === true} class:is-danger={isValidEmail === false}
            type="email" placeholder="Your email" bind:value={msg.email} on:blur={validateEmail} />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            {#if isValidEmail === true}<i class="fas fa-check"></i>{/if}
            {#if isValidEmail === false}<i class="fas fa-exclamation-triangle"></i>{/if}
          </span>
        </div>
        {#if isValidEmail === false}<p class="help is-danger">{emailValidationMessage}</p>{:else}<p class="help">&nbsp;</p>{/if}
      </div>

      <div class="field">
        <label class="label">Company / Organization <span class="is-size-7 has-text-danger" title="Required">(*)</span></label>
        <div class="control has-icons-right">
          <input class="input" class:is-info={isValidCompany === null} class:is-success={isValidCompany === true} class:is-danger={isValidCompany === false}
            type="text" placeholder="Your company / organization" bind:value={msg.company} on:blur={validateCompany} />
          <span class="icon is-small is-right">
            {#if isValidCompany === true}<i class="fas fa-check"></i>{/if}
            {#if isValidCompany === false}<i class="fas fa-exclamation-triangle"></i>{/if}
          </span>
        </div>
        {#if isValidCompany === false}<p class="help is-danger">Please include the name of your company or organization.</p>{:else}<p class="help">&nbsp;</p>{/if}
      </div>

      <div class="field">
        <label class="label">Phone Number</label>
        <div class="control">
          <input class="input is-info" type="text" bind:value={msg.phone} placeholder="Phone">
        </div>
      </div>

      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea class="textarea is-info" bind:value={msg.message} placeholder="How can we help you?"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" on:click={submit} disabled={!isAllValid} >Submit</button>
        </div>
        <div class="control">
          <button class="button is-link is-light" on:click={cancel}>Cancel</button>
        </div>
      </div>
      <div>
        <p class="is-size-7 has-text-danger">{validationSummaryMessage}&nbsp;</p>
      </div>
      <!-- Form end-->

    </div>

    {:else}
    
      <div class="box main-content is-clearfix" style="padding-top:2rem; padding-bottom:2rem;">
        <div class="arc-subhead" style="padding-bottom:1.5rem;">Your Message is Sent</div>
      

        <div class="l-title">
          Name
        </div>
        <div class="l-content">
          {msg.name}
        </div>
        
        <div class="l-title">
          Email
        </div>
        <div class="l-content">
          {msg.email}
        </div>

        <div class="l-title">
          Company / Organization
        </div>
        <div class="l-content">
          {msg.company}
        </div>

        <div class="l-title">
          Phone
        </div>
        <div class="l-content">
          {msg.phone || "None"}
        </div>

        <div class="l-title">
          Message
        </div>
        <div class="l-content">
          {msg.message || "None"}
        </div>
        <hr style="width:100%;" />
        <div style="width:100%; text-align:center;">
          <button class="button is-link" on:click="{navTo}" on:click="{cancel}" data-dest="/">Done</button>
        </div>
      </div>

    {/if}
  </div>

  <Summary />
</section>

<style type="text/scss">
  .main-content {
    margin: 0 auto;
    max-width: 600px;
    
    .l-title {
      float: left;
      width: 200px;
      font-weight: bold;
    }

    .l-content {
      float: left;
      width: 300px;
      padding: 0 0 0.5rem 1rem;
    }

  }
</style>