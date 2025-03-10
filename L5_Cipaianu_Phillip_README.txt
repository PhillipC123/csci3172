# Lab 5

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 07 03 2025
* *Last Modification Date*: 10 03 2025
* *Repo URL*: https://git.cs.dal.ca/cipaianu/csci-3172/
* *Lab [GitHub] URL*: https://github.com/PhillipC123/csci3172
* *Lab URL*: https://git.cs.dal.ca/cipaianu/csci-3172/-/tree/main/labs/lab5
* *Web URL*: https://recipe-app3172.netlify.app/


## Authors

If what is being submitted is an individual Lab or Assignment, you may simply include your name and email address. Otherwise list the members of your group.

* [Phillip Eliat-Cipaianu](ph469663@dal.ca) - (Author)


## Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds
* [Netlify] (https://docs.netlify.com/get-started/) - Used to host and deploy server
* [Express.js] (https://expressjs.com/) - Used to handle API requests and responses

No additional frameworks besides:

* [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Styling the Webpage
* [JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Front-End Functionality

## Description

The application I've decided to create is a Recipe Recommender application. 
Essentially its a website that allows users to search for various recipes with API "Spoonacular".

For example, you could find recipes for "vegetarians", or for certain dietary restrictions, like "gluten free" or "sugar free". 

One of the limitations I encountered when dealing with the Spoonacular API, is how easyily fragile the itself API is. 

When I tried introducing nutrition, and ingredient information, my entire application broke. This was most likely due to the GET request, and it not working properly with the rest of my application.
 
I was not able to find a work around with this issue, however, I was able to scucessfully list various recipes and images associated with those recipes.


## Recipes App - Testing
# Frontend Testing

1. **Check if input field exists**
   - **Test Steps**:
     - Open app in browser.
     - Check if input field is present.
   - **Expected Result**: Input field should be accessible and visible.
   - **Result**: [Passed] Input field is visible, and is accessible.

2. **Check if button exists**
   - **Test Steps**:
     - Open app in the browser.
     - Check if "Get Recipes" button is present.
   - **Expected Result**: Button should be visible with "Get Recipes" text on it.
   - **Result**: [Passed] Button "Get Recipes" is visible and accessible.

3. **Enter valid recipe type and get a correct response**
   - **Test Steps**:
     - Enter valid recipe type in the input field.
     - Click "Get Recipe" button.
   - **Expected Result**: App should display recipe name, and image.
   - **Result**: [Passed] When entering recipe type, it displays a list of similar recipes, and their image.

4. **Enter invalid recipe type and handle error appropriately**
   - **Test Steps**:
     - Enter invalid recipe type in input field.
     - Click "Get Recipe" button.
   - **Expected Result**: App should display an error message for invalid recipe type.
   - **Result**: [Passed] When entering an invalid recipe type, an error message is displayed.

# Backend Testing

1. **Valid Recipe Request**
   - **Test Steps**:
     - Make GET request to API
   - **Expected Result**: Response should include recipe name, and image.
   - **Result**: [Passed] API provides accurate recipe names and corresponding images.

2. **Missing Recipe Parameter**
   - **Test Steps**:
     - Make GET request to API without recipe parameter
   - **Expected Result**: Response should return 400 status with error message: "Recipe is required".
   - **Result**: [Passed] API returned a 400 error with the message "Recipe is required".

3. **Invalid Recipe Name**
   - **Test Steps**:
     - Make GET request to API with invalid recipe type
   - **Expected Result**: Response should return a 404 status with error message: "Recipe not found".
   - **Result**: [Passed] API returned a 404 error with the message "Recipe not found".

4. **Server error**
   - **Test Steps**:
     - Simulate a server issue.
     - Make GET request to the API.
   - **Expected Result**: Response should return a 500 status with error message: "Server error".
   - **Result**: [Passed] API returned a 500 error with the message "Server error".

## Artificial Intelligence Tools Used

If in completing your lab / assignment / project you used any Artificial Intelligence Tools or Plugins, then provide a list of the tools or plugins used, the prompt used, the code generated by the AI, where the code was implemented, how it was implemented, why it was implemented, and how it was modified. See the sections below for more details.

* [Chat GPT-4o mini](https://chatgpt.com/) - The AI Tool used


### Prompt Used on *Chat GPT-4o mini*

```
Please provide straightforward, yet professional css code for my Recipe Recommender Application online. Make sure to implement the WCAG guidelines to ensure basic accessibility considerations are met. Additionally, here is the standard style.css that was provided, it can be changed as needed: 

"
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

.container {
    margin-top: 50px;
}

input, button {
    padding: 10px;
    margin: 10px;
}"

Here is index.html as well for context: "<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recipe Recommender App</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <h1>Recipe Recommender</h1>
    <input type="text" id="query" placeholder="Enter recipe type ">
    <button onclick="getRecipes()">Get Recipes</button>
    <div id="result"></div>
</div>
<script src="script.js"></script>
</body>
</html>"
```

#### style.css
*Lines #1 - #68, #89 - #98*

```
/* General Styles */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f8f9fa;
    color: #333;
    margin: 0;
    padding: 0;
}

/* Container Styling */
.container {
    max-width: 600px;
    margin: 50px auto;
    padding: 20px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

/* Heading */
h1 {
    font-size: 1.8rem;
    color: #0056b3;
}

/* Input & Button Styling */
input, button {
    padding: 12px;
    margin: 10px;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    transition: all 0.3s ease-in-out; /* Ensure smooth transition */
}

/* Input Field */
input {
    width: 80%;
    max-width: 300px;
    outline: none;
}

input:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.5);
    transform: scale(1.02); /* Subtle growth effect */
}

/* Button */
button {
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease;
}

button:hover {
    background-color: #0056b3;
    transform: scale(1.05); /* Slight pop-out effect */
}

button:focus {
    outline: 2px solid #0056b3;
    background-color: #004494;
}

/* Responsive Design */
@media (max-width: 600px) {
    .container {
        width: 90%;
        padding: 15px;
    }

    input {
        width: 100%;
    }
}
```

- <!---How---> The code in [Chat GPT-4o mini](https://chatgpt.com/) was implemented by having a style.css located within the frontend folder, and then from there you place the code provided by ChatGPT. Several changes were made to make the various recipes display correctly, specifically, with removing the bullet symbols associated.

- <!---Why---> [Chat GPT-4o mini](https://chatgpt.com/)'s Code was used because the code provided meets the requirements I laid out, as being professional but simple, and following WCAG guidelines. The assurance of the code following my guidelines, is what prompted me to do it. CSS is quite complicated when dealing with many various components, and I'm not very skilled at it, so this is why ChatGPT was used. The final result for style.css is great, as the fields and containers look great.

- <!---How---> [Chat GPT-4o mini](https://chatgpt.com/)'s Code was modified by adding and modifying 'recipe-list' to have the recipe's listed without a bullet symbol. Additionally, styling was added to make it more adaptable.

## Acknowledgments

* Lectures & In-Class Examples
