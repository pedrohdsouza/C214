<script>
	let height = 0;
    let weight = 0;
    let bmiResult = null;
    let bmiMessage = null;

    function calculateBMI() {
        const heightValue = parseFloat(height);
        const weightValue = parseFloat(weight);

        if (!isNaN(heightValue) && !isNaN(weightValue) && heightValue > 0 && weightValue > 0) {
            const bmi = weightValue / (heightValue * heightValue);
            bmiResult = `Seu IMC é: ${bmi.toFixed(2)}`;

            if (bmi < 18.5) {
                bmiMessage = "Abaixo do peso";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                bmiMessage = "Peso ideal (parabéns)";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                bmiMessage = "Levemente acima do peso";
            } else if (bmi >= 30.0 && bmi <= 34.9) {
                bmiMessage = "Obesidade Grau 1";
            } else if (bmi >= 35.0 && bmi <= 39.9) {
                bmiMessage = "Obesidade Grau 2 (Severa)";
            } else if (bmi >= 40) {
                bmiMessage = "Obesidade Grau 3 (Mórbida)";
            }
        } else {
            bmiResult = "Por favor, entre com valores válidos para altura e peso.";
            bmiMessage = null;
        }
    }
</script>

<main style="background-color: #007bff; padding: 20px;">
	<h1>BMI Calculator</h1>
    <label for="height">Altura (em metros):</label>
    <input type="number" id="height" bind:value={height} step="0.01" required>
    <br>
    <label for="weight">Peso (em Kilogramas):</label>
    <input type="number" id="weight" bind:value={weight} step="0.01" required>
    <br>
    <button on:click={calculateBMI}>Calcular IMC</button>
    {#if bmiResult !== null}
        <p>{bmiResult}</p>
        {#if bmiMessage !== null}
            <p>{bmiMessage}</p>
        {/if}
    {/if}
</main>

<style>
	main {
        text-align: center;
        max-width: 400px;
        margin: 0 auto;
        font-family: Arial, sans-serif;
    }
    h1 {
        font-size: 24px;
    }
    label {
        display: block;
        margin-bottom: 8px;
        font-weight: bold;
    }
    input {
        width: 100%;
        padding: 8px;
        margin-bottom: 16px;
    }
    button {
        background-color: rgb(153, 185, 158);
        color: rgb(8, 8, 8);
        border: none;
        padding: 10px 20px;
        cursor: pointer;
    }
    p {
        font-weight: bold;
        color: #333;
        margin-top: 16px;
    }
</style>