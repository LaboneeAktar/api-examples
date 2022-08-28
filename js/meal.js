const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}

const displayMeals = meals => {
    const mealsContainer = document.getElementById('meal-container');
    mealsContainer.textContent = '';
    meals.forEach(meal => {
        // console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div class="card" onclick="loadDetails(${meal.idMeal})">
         <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
        mealsContainer.appendChild(mealDiv);
    })
}

const searchMeal = () => {
    const mealfield = document.getElementById('meal-field');
    const searchMeal = mealfield.value;
    loadMeals(searchMeal);
    mealfield.value = '';
}

const loadDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data.meals[0]))
}

const displayMealsDetail = meal => {
    const detailsContainer = document.getElementById('details-container');
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('col');
    detailsDiv.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions}</p>
        </div>
    `;
    detailsContainer.appendChild(detailsDiv);
}

loadMeals('');