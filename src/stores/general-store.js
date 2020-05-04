import { writable, get } from "svelte/store";

export const isVideoDisplayed = writable(false);

export const toggleVideoDisplayed = function () {
	let isVis = get(isVideoDisplayed);
	let el = document.getElementById("video-box");

	if (isVis) {
		el.innerHTML = "";
	} else {
		if (!el.innerHTML)
			el.innerHTML =
				'<iframe width="600" height="340" src="https://www.youtube.com/embed/vgpTJ-2pmto?controls=1" title="ARC Video"></iframe>';
	}

	isVideoDisplayed.set(!isVis);
};
