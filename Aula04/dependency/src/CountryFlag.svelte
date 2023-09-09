<!-- CountryFlag.svelte -->

<script>
    import { onMount } from 'svelte';
    import { createEventDispatcher } from 'svelte';
  
    // Event dispatcher to communicate with the parent component
    const dispatch = createEventDispatcher();
  
    // Data
    let countries = [];
    let selectedCountry = '';
    let countryFlagUrl = '';
    let isIndependent = null;
  
    // Fetch a list of countries from the REST Countries API
    onMount(async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        countries = await response.json();
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    });
  
    // Update the selectedCountry and fetch the flag when a country is selected
    async function handleCountrySelect() {
      if (selectedCountry) {
        const country = countries.find((c) => c.name === selectedCountry);
        if (country) {
          countryFlagUrl = country.flags[0];
          // Fetch independence status
          try {
            const independenceResponse = await fetch(
              `https://restcountries.com/v3.1/independent?status=true&name=${selectedCountry}`
            );
            const independenceData = await independenceResponse.json();
            isIndependent = independenceData.status === 'independent';
            dispatch('countrySelected', selectedCountry);
          } catch (error) {
            console.error('Error fetching independence status:', error);
          }
        }
      }
    }
  </script>
  
  <h2>Select a Country</h2>
  <select bind:value={selectedCountry} on:change={handleCountrySelect}>
    {#each countries as country (country.name)}
      <option>{country.name}</option>
    {/each}
  </select>
  
  {#if countryFlagUrl}
    <div>
      <h3>Flag of {selectedCountry}</h3>
      <img src={countryFlagUrl} alt={`Flag of ${selectedCountry}`} />
      {#if isIndependent === true}
        <p>{selectedCountry} is independent.</p>
      {:else if isIndependent === false}
        <p>{selectedCountry} is not independent.</p>
      {/if}
    </div>
  {/if}
  