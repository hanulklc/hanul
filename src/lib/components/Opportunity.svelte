<script>
	import IconList from '@tabler/icons-svelte/IconList.svelte';

	const data = [
		{
			title: 'Aging Population and Low Birth Rate',
			description:
				"South Korea faces a rapidly aging population and one of the world's lowest birth rates. This demographic trend leads to a shrinking domestic labor force, creating a demand for foreign workers to fill the gaps, especially in sectors requiring manual labor, caregiving, and technical skills."
		},
		{
			title: 'Economic Growth and Labor Demand',
			description:
				'As South Korea continues to grow economically, there is an increasing demand for labor in various industries such as manufacturing, construction, agriculture, and services. The local workforce is often insufficient to meet this demand, necessitating the hiring of foreign workers.'
		},
		{
			title: 'Government Policies and Programs',
			description:
				'The South Korean government has implemented various policies and programs to attract foreign workers. These include the Employment Permit System (EPS) for low-skilled workers and the issuance of E-7 visas for professionals and skilled workers. These initiatives are designed to streamline the hiring process and make it easier for employers to recruit foreign talent.'
		},
		{
			title: 'Globalization and Trade',
			description:
				"As South Korea becomes more integrated into the global economy, there is a greater need for foreign workers who can facilitate international trade, bring in new skills, and contribute to the country's global competitiveness."
		},
		{
			title: 'Cultural Exchange and Diversity',
			description:
				'There is a growing recognition of the benefits of cultural diversity in the workplace. Foreign workers bring different perspectives and experiences, which can enhance creativity, innovation, and overall productivity.'
		}
	];
</script>

<div class="opportunity-gradient bg-surface-100-800-token py-8">
	<div class="container mx-auto max-w-screen-2xl px-4">
		<div class="text-center space-y-4">
			<p class="text-center max-w-xl text-xl md:text-4xl font-bold mx-auto">
				Now in <span class="text-error-400">Korea</span>...
			</p>
			<p class="text-center max-w-xl text-base md:text-lg opacity-60 mx-auto">
				The opportunity for foreign workers' employment is wide open. It is wide open due to several
				key factors:
			</p>
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16">
			{#each data as feature}
				<div class="p-4 space-y-2">
					<div class="bg-surface-600 p-2 w-fit rounded-token">
						<svelte:component this={IconList} class="text-primary-600-300-token" />
					</div>
					<div class="text-base font-bold md:text-lg">
						{feature.title}
					</div>
					<div class="md:text-base opacity-60">
						{feature.description}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.opportunity-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.5) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
</style>
