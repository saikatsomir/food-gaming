const loadFood = async () => {
    const inputField = document.getElementById('input-field')
    const inputText = inputField.value;

    // console.log(inputText)
    inputField.value = '';

    if (inputText == '') {
        const empty = document.getElementById('empty-string')
        const div = document.createElement('div')


        div.innerHTML = `
        
        <h1 class =" text-white text-center p-5 mt-5 border w-50 mx-auto rounded-3 mb-5">
            <div class="spinner-border text-danger pe-2" role="status">
            <span class="visually-hidden">Loading...</span>
            </div>Please write something then call search
        </h1>
        `
        empty.appendChild(div)
    }
    else {
        const url = `
    https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}
    `


        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals)
        /* 
                fetch(url)
                    .then(res => res.json())
                    .then(data => displaySearchResult(data.meals)) */
    }
}

const displaySearchResult = meals => {
    const searchField = document.getElementById('search-field')
    searchField.textContent = ' ';
    // if (meals.length == 0) {

    //     const empty = document.getElementById('wrong-idea')
    //     const div = document.createElement('div')

    //     div.innerHTML = `

    //      <h1 class =" text-white text-center p-5 mt-5 border w-50 mx-auto rounded-3 mb-5">
    //          <div class="spinner-border text-danger pe-2" role="status">
    //          <span class="visually-hidden">Loading...</span>
    //          </div>Please write something then call search
    //      </h1>
    //      `
    //     empty.appendChild(div)
    //     /*  const wrong = document.getElementById('wrod-idea')
    //      const div = document.createElement('div')

    //      div.innerHTML = `

    //      <h1 class =" text-white text-center p-5 mt-5 border w-50 mx-auto rounded-3 mb-5">

    //      </h1>
    //      `
    //      wrong.appendChild(div) */
    // }

    meals.forEach(meal => {
        // console.log(meal);

        const div = document.createElement('div')
        div.classList.add('col')
        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" class= " w-50 h-50" alt="...">
                <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                            <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
                </div>
            </div>
            `
        searchField.appendChild(div)
    })

}

const loadMealDetail = mealId => {
    // console.log(mealId);
    const url = `
    https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}
    `

    /* const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]); */
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meals => {
    console.log(meals);
    const detailMeal = document.getElementById('detail-meal')
    detailMeal.textContent = '';
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
        <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body mt-5">
                <h2 class="card-title">${meals.strMeal}</h2>
                <p class="card-text">${meals.strInstructions.slice(0, 300)}</p>
                <a href="${meals.strYoutube}"  class="btn btn-primary">Making vedio</a>
            </div>
        `
    detailMeal.appendChild(div)

}