<script>
	import logo from '$lib/images/logo.png';
</script>

<footer class="footer p-10 py-16">
	<!-- <footer class="footer p-10 bg-base-200 text-base-content py-16"> -->
	<!-- <div class="w-full min-h-min py-8 bg-[rgb(30,181,236)] my-2"> -->

	<aside>
		<div class="flex">
			<img class="size-16 object-contain" src={logo} alt="HANUL Logo" />
			<p class="grid content-center text-md font-bold">Korean Language Center</p>
		</div>
	</aside>
	<nav>
		<h6 class="footer-title">Hours</h6>
		<p class="">Monday - Saturday</p>
		<p class="">10am - 8pm / (Wednesday and Friday until 5pm)</p>
		<p class="">Closed Every Sunday</p>
	</nav>
	<nav>
		<h6 class="footer-title">Links</h6>
		<a class="link link-hover" href="https://facebook.com/HanulKLC">facebook</a>
	</nav>
	<nav>
		<h6 class="footer-title">Location</h6>
		<p>GTS Building, Rizal St.,</p>
		<p>Old Albay, Legazpi City</p>
		<p>09178064435</p>
	</nav>
</footer>

<style>
	nav {
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
	.footer {
		display: grid;
		width: 100%;
		grid-auto-flow: row;
		place-items: start;

		& > * {
			display: grid;
			place-items: start;
			padding-left: 1rem;
			padding-right: 1rem;
		}
		&-center {
			place-items: center;
			text-align: center;
			& > * {
				place-items: center;
			}
		}
	}
	@media (min-width: 1024px) {
		.footer {
			grid-auto-flow: column;
		}
	}
	.footer-title {
		margin-bottom: 0.5rem;
		font-weight: 700;
		text-transform: uppercase;
		opacity: 0.6;
	}
</style>
