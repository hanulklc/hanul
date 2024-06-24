<script>
	import IconNumber1 from '@tabler/icons-svelte/IconNumber1.svelte';
	import IconNumber2 from '@tabler/icons-svelte/IconNumber2.svelte';
	import IconNumber3 from '@tabler/icons-svelte/IconNumber3.svelte';
	import IconNumber4 from '@tabler/icons-svelte/IconNumber4.svelte';
	import IconNumber5 from '@tabler/icons-svelte/IconNumber5.svelte';
	import IconNumber6 from '@tabler/icons-svelte/IconNumber6.svelte';

	const data = [
		{
			title: 'Watch K-Dramas Without Subtitles',
			description:
				'Enjoy Korean dramas in their original language, capturing the nuances, emotions, and cultural contexts that may be lost in translation',
			icon: IconNumber1
		},
		{
			title: 'Access Korean Culture More Deeply',
			description:
				'Gain a richer understanding and appreciation of Korean traditions, customs, and contemporary life by learning the language.',
			icon: IconNumber2
		},
		{
			title: 'Enhance Your Travel Experiences in Korean-Speaking Regions',
			description:
				'Navigate and connect more effectively with locals, enriching your travel adventures in Korean-speaking areas.',
			icon: IconNumber3
		},
		{
			title: 'Pursue Academic and Research Opportunities in Various Fields',
			description:
				'Expand your scholarly pursuits and research endeavors across diverse disciplines by mastering the Korean language.',
			icon: IconNumber4
		},
		{
			title: 'Facilitate Access to Scholarships, Exchange Programs, and Research Grants',
			description:
				'Open doors to funding opportunities and international educational experiences through proficiency in the Korean language.',
			icon: IconNumber5
		},
		{
			title: 'Have a Wide Range of Career Opportunities',
			description:
				'Unlock diverse career paths and professional opportunities globally by mastering the Korean language.',
			icon: IconNumber6
		}
	];
</script>

<div class="benefits-gradient bg-surface-100-800-token py-8">
	<div class="container mx-auto max-w-screen-2xl p-4">
		<div class="grid grid-cols-1 md:grid-cols-12">
			<div class="space-y-4 md:col-span-4 p-4">
				<div class="text-xl md:text-3xl font-bold">
					Benefits of <span class="text-success-500">Korean</span> Proficiency
				</div>
				<p class="max-w-xl opacity-60 mx-auto">
					Mastering Korean offers many advantages, from career growth to cultural enrichment.
					Discover the key benefits of learning this vibrant language.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-8">
				{#each data as feature}
					<div class="p-4 space-y-2">
						<div class="variant-filled-tertiary text-2xl p-2 w-fit rounded-token">
							<svelte:component this={feature.icon} class="" />
						</div>

						<div class="font-semibold">
							{feature.title}
						</div>
						<div class="text-sm opacity-60">
							{feature.description}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	.benefits-gradient {
		background-image: radial-gradient(
			at 0% 100%,
			rgba(var(--color-secondary-500) / 0.5) 0px,
			transparent 50%
		);
	}
</style>
