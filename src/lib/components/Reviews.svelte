<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import awong from '$lib/images/awong.jpg';

	const data = [
		{
			image: awong,
			title: "I'm a placeholder review!",
			description:
				"This is a placeholder description for a review. Lorem Ipsum is overrated. I love writing placeholder text by hand. Lorem Review and Description Ipsum. It's the Lorem Descripsum."
		},
		{
			image: awong,
			title: "I'm a placeholder review!",
			description:
				"This is a placeholder description for a review. Lorem Ipsum is overrated. I love writing placeholder text by hand. Lorem Review and Description Ipsum. It's the Lorem Descripsum."
		},
		{
			image: awong,
			title: "I'm a placeholder review!",
			description:
				"This is a placeholder description for a review. Lorem Ipsum is overrated. I love writing placeholder text by hand. Lorem Review and Description Ipsum. It's the Lorem Descripsum."
		}
	];
</script>

<div class="reviews-gradient">
	<div class="container mx-auto max-w-screen-2xl py-8">
		<div class="text-center space-y-4 px-4">
			<span class="badge variant-filled-primary uppercase">REVIEWS</span>
			<div class="text-xl md:text-3xl font-bold">Hear From Our Students</div>
			<p
				class="max-w-xl text-lg opacity-60 mx-auto after:mx-auto after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block"
			>
				Hear directly from our students about how our courses have boosted their confidence and
				skills. Their stories provide insights into their learning journeys and successes.
			</p>
		</div>

		<div class="grid grid-cols-1 xl:grid-cols-3 gap-4 pt-16 px-8">
			{#each data as feature}
				<div class="card p-6 space-y-2 bg-surface-400">
					<!-- <svelte:component this={feature.icon} class="text-4xl text-primary-500" /> -->
					<div class="flex gap-4 items-start">
						<Avatar src={feature.image} class="flex-none" />
						<div class="space-y-1">
							<div
								class="font-bold text-base sm:text-lg md:text-xl after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block"
							>
								{feature.title}
							</div>
							<div class="text-sm sm:text-base md:text-md opacity-80">
								{feature.description}
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.reviews-gradient {
		background-image: radial-gradient(
				at 0% 0%,
				rgba(var(--color-secondary-500) / 0.33) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 0%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>
