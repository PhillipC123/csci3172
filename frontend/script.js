async function getRecipes() {
    console.log("Fetching recipes...");
    const query = document.getElementById("recipe").value;
    if (!query) {
        alert("Please enter a recipe query.");
        return;
    }

    try {
        const response = await fetch("/api/recipes?query=" + query);

        // Check for 2xx status codes before parsing the response
        if (!response.ok) {
            console.error("HTTP error", response.status, response.statusText);
            alert("Failed to fetch recipes, try again later.");
            return;
        }

        const data = await response.json();

        if (data.error) {
            document.getElementById("result").innerHTML = `<p>${data.error}</p>`;
        } else {
            document.getElementById("result").innerHTML = `
                <h2>Recipe Recommendations</h2>
                <ul class="recipe-list">
                    ${data.recipes.map(recipe => `
                        <li>
                            <h3>${recipe.title}</h3>
                            <img src="${recipe.image}" alt="${recipe.title}" />
                        </li>
                    `).join('')}
                </ul>
            `;
        }
    } catch (error) {
        console.error("Error fetching data", error);
        alert("There was an error fetching the recipes.");
    }
}
