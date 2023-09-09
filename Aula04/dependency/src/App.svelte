<!-- App.svelte -->

<script>
	import CountryFlag from './CountryFlag.svelte';
  
	let selectedCountry = '';
  
	function handleCountrySelected(event) {
	  selectedCountry = event.detail;
	}
  </script>
  
  <h1>Select Country Program</h1>
  <CountryFlag on:countrySelected={handleCountrySelected} />
  
  {#if selectedCountry}
	<p>You selected: {selectedCountry}</p>
  {/if}
  