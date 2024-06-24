<script lang="ts">
	import IconCheck from '@tabler/icons-svelte/IconCheck.svelte';
	import image from '$lib/images/instructor.jpeg';
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="bg-surface-100-800-token py-8">
	<div class="container mx-auto max-w-screen-xl">
		<div class="p-16 mx-auto">
			<Avatar
				src={image}
				alt="design components"
				class="block lg:hidden mx-auto"
				width="w-full md:w-[75%]"
				rounded="rounded-full"
			/>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-12">
			<div class="space-y-4 lg:col-span-6 p-4">
				<h1 class="text-3xl lg:text-5xl font-bold">
					Meet <span class="relative px-1 lg:px-3 py-1 bg-surface-300-600-token"> Shelby Lee </span>
				</h1>

				<p class="max-w-xl opacity-70">
					Our classes are led by a highly qualified and experienced instructor:
				</p>
				<ul class="list-items">
					<li>
						<span><IconCheck class="variant-filled-primary rounded-token p-0.5" /></span>
						<span>
							<b>Native Korean Speaker</b>
						</span>
					</li>
					<li>
						<span><IconCheck class="variant-filled-primary rounded-token p-0.5" /></span>
						<span>
							<b>Licensed Korean Language Teacher</b> – Accredited by the Korean government.
						</span>
					</li>
					<li>
						<span><IconCheck class="variant-filled-primary rounded-token p-0.5" /></span>
						<span>
							<b>Majored in Korean Education</b> – At Cyber Hankuk University of Foreign Studies.
						</span>
					</li>
					<li>
						<span><IconCheck class="variant-filled-primary rounded-token p-0.5" /></span>
						<span>
							<b>Over 10 Years of Teaching Experience</b> – Have taught Korean at Bicol University College
							of Arts and Letters and Bicol University Language Center for over 10 years.
						</span>
					</li>
				</ul>
			</div>

			<img src={image} alt="design components" class="hidden lg:block lg:col-span-6" />
		</div>
	</div>
</div>

<style>
	.list-items li {
		display: flex;
		gap: 16px;
		padding: 12px 0px;
	}
</style>
