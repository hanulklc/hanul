<script lang="ts">
	import bg from '$lib/images/bg.png';
</script>

<div
	class="villain-gradient wuwi"
	style="background-image: url('{bg}'), radial-gradient(
				at 0% 0%,
				rgba(var(--color-error-800) / 0.75) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-success-800) / 0.75) 0px, transparent 70%); "
>
	<div class="container mx-auto text-left p-4 md:text-center">
		<div class="relative z-[1] space-y-6 py-24">
			<div
				class="text-surface-300 font-bold text-2xl tracking-tight sm:text-3xl md:text-4xl lg:text-5xl variant-glass-surface rounded-2xl py-8"
			>
				Join us now at <span class="text-primary-300">HANUL</span> Korean Language Center
			</div>
		</div>
	</div>
</div>

<style>
	.villain-gradient {
		--tw-bg-opacity: 1;
		background-color: rgb(var(--color-primary-800) / var(--tw-bg-opacity));
		color: rgb(var(--on-primary));
	}
</style>
