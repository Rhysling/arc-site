<script>
	import { onMount } from 'svelte';

	import GlobalCss from './components/GlobalCss.svelte';
	import VideoOverlay from './components/VideoOverlay.svelte';
	import Header from './components/Header.svelte';
	import Home from './pages/Home.svelte';
	import HowArcWorks from './pages/HowArcWorks.svelte';
	import WorkingCapital from './pages/WorkingCapital.svelte';
	import TheArcSolution from './pages/TheArcSolution.svelte';

	import CaseStudies from './pages/CaseStudies.svelte';
	import CaseBase from './pages/CaseBase.svelte';

	import AboutUs from './pages/AboutUs.svelte';
	import ContactUs from './pages/ContactUs.svelte';

	import Footer from './components/Footer.svelte';

	import { currentSlug, navFromUrl } from './stores/route-store.js';



	onMount(() => {
		// googleCustomSearchScript = script: async src="https://cse.google.com/cse.js?cx=004504681668706684589:u7a9m6fztsv"
		// googleCaptchaScript = " script: src="https://www.google.com/recaptcha/api.js?render=6Lewq88UAAAAAJu_YijXIiu5PTpnvwdMekC15j04"

		let head = document.getElementsByTagName("head")[0];

		let googleCustomSearchScript = document.createElement('script');
		googleCustomSearchScript.setAttribute("type","text/javascript");
		googleCustomSearchScript.setAttribute("src", "https://cse.google.com/cse.js?cx=004504681668706684589:u7a9m6fztsv");
		head.appendChild(googleCustomSearchScript);

		let googleCaptchaScript = document.createElement('script');
		googleCaptchaScript.setAttribute("type","text/javascript");
		googleCaptchaScript.setAttribute("src", "https://www.google.com/recaptcha/api.js?render=6Lewq88UAAAAAJu_YijXIiu5PTpnvwdMekC15j04");
		head.appendChild(googleCaptchaScript);

		navFromUrl();
	});

	if (!$currentSlug)
		$currentSlug = "/";

	let slug;

	$: {
		slug = $currentSlug;
		window.scroll({
		top: 0, 
		left: 0, 
		behavior: "smooth"
		});
	}

</script>

<GlobalCss />
<VideoOverlay />
<Header {slug} />

{#if slug === "/"}
	<Home />
{:else if slug === "/how-arc-works"}
	<HowArcWorks />
{:else if slug === "/working-capital"}
	<WorkingCapital />
{:else if slug === "/arc-solution"}
	<TheArcSolution />
{:else if slug === "/case-studies"}
	<CaseStudies />
{:else if slug.startsWith("/case/")}
	<CaseBase />
{:else if slug === "/about-us"}
	<AboutUs />
{:else if slug === "/contact-us"}
	<ContactUs />
{:else}
	<div> Where's my page?</div>
{/if}

<Footer />

<style type="text/scss">
	
</style>