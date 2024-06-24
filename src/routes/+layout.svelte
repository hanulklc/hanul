<script lang="ts">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Highlight JS
	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml'; // for HTML
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	import logo from '$lib/images/logo.png';
	import '@fortawesome/fontawesome-free/css/all.min.css';
</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<img class="object-fit w-10" src={logo} alt="HANUL Logo" />
				<p class="px-2 font-bold text-sm sm:text-lg">Korean Language Center</p>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<a class="btn btn-sm variant-glass-primary" href="https://facebook.com/HanulKLC">
					<div class="block !m-0"><i class="fa-brands fa-facebook"></i></div>
					<p class="hidden sm:block !m-0 pl-2">Facebook</p>
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />
</AppShell>
