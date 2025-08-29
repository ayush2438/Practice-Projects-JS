async function fetchData() {
    try {
        const pokemonName = document.getElementById("PokemonName").value.toLowerCase().trim();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch response");
        }

        const data = await response.json();

        // Check if sprite exists
        if (!data.sprites || !data.sprites.front_default) {
            throw new Error("No sprite found for this Pokémon.");
        }

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("PokemonSprite");

        // ✅ Correct way to set image source
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    } catch (error) {
        console.error("Error:", error.message);
        alert("Error: " + error.message);

        // Optionally hide image on error
        const imgElement = document.getElementById("PokemonSprite");
        imgElement.style.display = "none";
        imgElement.src = "";
    }
}
