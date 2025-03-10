async function getRecipes() {
    console.log("Fetching recipes...");  // Add this line to confirm the function is being called
    const query = document.getElementById("recipe").value;
    if (!query) {
        alert("Please enter a recipe query.");
        return;
    }

    const response = await fetch("/api/recipes?query=" + query);
    const data = await response.json();

	if (data.error) {
	    document.getElementById("result").innerHTML = `<p>${data.error}</p>`;
	} else {
	    document.getElementById("result").innerHTML = `
	        <h2>Recipe Recommendations</h2>
	        <ul class="recipe-list">  <!-- Add a class to target the list -->
	            ${data.recipes.map(recipe => `
	                <li>
	                    <h3>${recipe.title}</h3>
	                    <img src="${recipe.image}" alt="${recipe.title}" />
	                </li>
	            `).join('')}
	        </ul>
	    `;
	}
}
