import { writable, get } from 'svelte/store';


export const isVideoDisplayed = writable(false);
export const toggleVideoDisplayed = function () { isVideoDisplayed.set(!get(isVideoDisplayed)); };
