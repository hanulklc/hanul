<script>
	import Map from '$lib/components/Map.svelte';
</script>

<div class="contact-gradient">
	<div class=" py-16 container mx-auto">
		<div class="flex flex-col justify-evenly p-2 xl:flex-row">
			<div class="flex-1">
				<h1 class="text-4xl font-bold pb-2 md:text-5xl">Contact us</h1>
				<p>
					Have any questions or need more information? Get in touch with us today! We're here to
					help you on your journey to mastering Korean.
				</p>
				<br />
				<p>09178064435</p>
			</div>
			<div class="flex-1"></div>
		</div>
		<div class="flex flex-col justify-evenly py-8 px-2 md:flex-row">
			<div class="flex-[1_1_0px] pb-8 md:pb-0">
				<h2 class="text-2xl font-bold pb-2 md:text-3xl">Location</h2>
				<p>GTS Building, Rizal St.,</p>
				<p>Old Albay, Legazpi City</p>
			</div>
			<div class="flex-[2_2_0px]"><Map /></div>
		</div>
	</div>
</div>

<style>
	.contact-gradient {
		background-image: radial-gradient(
				at 0% 99%,
				rgba(var(--color-error-500) / 0.23) 0px,
				transparent 50%
			),
			radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	}
</style>
