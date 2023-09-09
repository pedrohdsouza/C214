<!-- App.svelte -->

<script>
	import CountryFlag from './CountryFlag.svelte';
  
	let selectedCountry = '';
	let independentCountries = [];
  
	function handleCountrySelected(event) {
	  selectedCountry = event.detail;
	}
  
	function updateIndependentCountries(country) {
	  if (country && !independentCountries.includes(country)) {
		independentCountries = [...independentCountries, country];
	  }
	}
  </script>
  
  <h1>Svelte Country Flag Viewer</h1>
  <CountryFlag on:countrySelected={handleCountrySelected} />
  
  {#if independentCountries.length > 0}
	<h2>Independent Countries:</h2>
	<ul>
	  {#each independentCountries as country (country)}
		<li>{country}</li>
	  {/each}
	</ul>
  {/if}
  