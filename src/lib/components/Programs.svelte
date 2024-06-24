<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import IconInnerShadowTopLeft from '@tabler/icons-svelte/IconInnerShadowTopLeft.svelte';
	import IconInnerShadowBottomRight from '@tabler/icons-svelte/IconInnerShadowBottomRight.svelte';

	const data1 = [
		'Preparatory Course: Reading and Writing Korean Alphabet, Hangul (10h)',
		'Basic Korean 1a (25h)',
		'Basic Korean 1b (25h)',
		'Basic Korean 2 (50h)',
		'Advanced Korean 1 (50h)',
		'Advanced Korean 2 (50h)'
	];
	const item1 = [
		'Get started with the fundamentals of the Korean language by learning to read and write Hangul.',
		'Begin your journey with essential vocabulary and grammar.',
		'Continue building on foundational skills with additional practice.',
		'Strengthen your language abilities with more complex structures and conversations.',
		'Enhance your proficiency with advanced grammar and conversation techniques.',
		'Achieve fluency and master high-level Korean for various contexts.'
	];

	const data2 = ['Preparatory Course (10h)', 'EPS-TOPIK (25h)'];
	const item2 = [
		'Introductory course for preparing for the EPS-TOPIK exam and getting a basic overview.',
		'Intensive course aimed at helping you pass the EPS-TOPIK exam for employment opportunities in Korea.'
	];
</script>

<div class="">
	<div class="container mx-auto py-8 px-4">
		<div class="text-center mb-10 text-2xl sm:text-3xl md:text-4xl font-bold">
			Programs offered...
		</div>

		<div class="mt-10 mb-4 text-xl font-semibold sm:text-2xl md:text-3xl">
			1. Korean Proficiency Program
		</div>
		<Accordion spacing="space-y-3" hover="">
			{#each data1 as item, index}
				<AccordionItem class="bg-surface-600 rounded-container-token p-2 border border-surface-700">
					<svelte:fragment slot="lead"
						><svelte:component
							this={IconInnerShadowTopLeft}
							class="text-primary-600-300-token"
						/></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><span class="font-semibold text-sm sm:text-base">{item}</span></svelte:fragment
					>
					<svelte:fragment slot="content">{item1[index]}</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>

		<div class="mt-10 mb-4 font-semibold text-3xl">2. EPS-TOPIK</div>
		<Accordion spacing="space-y-3" hover="">
			{#each data2 as item, index}
				<AccordionItem class="bg-surface-600 rounded-container-token p-2 border border-surface-700">
					<svelte:fragment slot="lead"
						><svelte:component
							this={IconInnerShadowBottomRight}
							class="text-primary-600-300-token"
						/></svelte:fragment
					>
					<svelte:fragment slot="summary"
						><span class="font-semibold text-sm sm:text-base">{item}</span></svelte:fragment
					>
					<svelte:fragment slot="content">{item2[index]}</svelte:fragment>
				</AccordionItem>
			{/each}
		</Accordion>
	</div>
</div>

<style>
	/* .programs-gradient {
		background-image: radial-gradient(
			at 100% 0%,
			rgba(var(--color-primary-500) / 0.24) 0px,
			transparent 50%
		);
	} */
</style>
