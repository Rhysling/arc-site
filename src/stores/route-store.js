import { writable, readable, derived } from 'svelte/store';

const r = {
  title: "Home",
  slug: "/",
  children: [
    {
      title: "How ARC Works",
      slug: "/how-arc-works",
      seq: 2,
      children: [
        {
          title: "Working Capital",
          slug: "/working-capital",
          children: []
        },
        {
          title: "The ARC Solution",
          slug: "/arc-solution",
          children: []
        },
      ]
    },
    {
      title: "Case Studies",
      slug: "/case-studies",
      children: []
    },
    {
      title: "About Us",
      slug: "/about-us",
      children: []
    },
    {
      title: "Contact Us",
      slug: "/contact-us",
      children: []
    }
  ]
};

function findRoute (routes, slug) {
  if (routes.slug === slug) return routes;
	
	if (routes.children.length) {
    for (let i = 0; i < routes.children.length; i +=1) {
			 var a = findRoute (routes.children[i], slug);
			if (a) return a;
		}
  }
	else {
		return null;
	}
};


export const routes = readable(r, function start(set) {
	// noop
	return function stop() {
		// noop
	};
});

export const currentSlug = writable("");

export const currentRoute = derived(
	[routes, currentSlug],
	($routes, $currentSlug) => findRoute($routes, $currentSlug)
);

export const navTo = function (e) {
  e.preventDefault();
  currentSlug.set(e.target.dataset.dest);
};