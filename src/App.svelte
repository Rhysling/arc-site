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

	import Footer from './components/Footer.svelte';

	import { currentSlug, navFromUrl } from './stores/route-store.js';



	onMount(() => {
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
<Home {slug} />
<HowArcWorks {slug} />
<WorkingCapital {slug} />
<TheArcSolution {slug} />
<CaseStudies {slug} />

<Footer />

<style type="text/scss">
	
</style>