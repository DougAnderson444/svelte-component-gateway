<script>
	import '../app.css';
</script>

<svelte:head>
	<script src="https://cdn.tailwindcss.com"></script>

	<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/base.min.css"
		integrity="sha512-TbSbl7LIRNEKzATRyVAfAPIfRmd/2lMmh3YtkMELfpGSkUJP8CDxebT1XDw9LBU1N5vK+So58Goia0XlztByug=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>
	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/components.min.css"
		integrity="sha512-f6TS5CFJrH/EWmarcBwG54/kW9wwejYMcw+I7fRnGf33Vv4yCvy4BecCKTti3l8e8HnUiIbxx3V3CuUYGqR1uQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<link
		rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/utilities.min.css"
		integrity="sha512-Y8cJYgNbd3VacNNezxAdncUu75Uj7uR/Dtb4ffepQrtFww5/QlgYt2IwexMwB8/SZWCCVe6kOY20A2Q4zQf5vQ=="
		crossorigin="anonymous"
		referrerpolicy="no-referrer"
	/>

	<script>
		tailwind.config = {
			theme: {
				extend: {
					colors: {
						clifford: '#da373d'
					}
				}
			}
		};
	</script>
</svelte:head>
<slot />
