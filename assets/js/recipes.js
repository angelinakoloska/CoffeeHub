let recipes = [
    {
        name: 'Chicken Caesar Salad',
        image: 'https://images.unsplash.com/photo-1599021409369-c63af30619db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        desc: 'A chicken caesar salad is a salad with romano salad with croutons, dressing and cheese ...',
        seeMore: 'https://www.spendwithpennies.com/chicken-caesar-salad/',
        category: '🍴 food',
        ingredients: ['' ],
        guidance: ['', '', '']
    },
    {
        name: 'Dalgona Matcha',
        image: 'https://plus.unsplash.com/premium_photo-1663853490449-6880187c17c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: 'A dalgona matcha is a whipped, frothy matcha tea drink',
        seeMore: 'https://www.proportionalplate.com/dalgona-matcha-latte/',
        category: '🍵 tea',
        ingredients: [''],
        guidance: ['', '', '']
    },
    {
        name: 'Banana Bread',
        image: 'https://images.unsplash.com/photo-1596241913027-34358037e159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hJTIwYnJlYWR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
        desc: 'A banana bread is a type of cake made from mashed bananas.',
        seeMore: 'https://www.simplyrecipes.com/recipes/banana_bread/',
        category: '🍴 food',
        ingredients: ['' ],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Tea',
        image: 'https://images.unsplash.com/photo-1601390395693-364c0e22031a?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200',
        desc: 'Iced tea is a form for cold tea. It can be sweetened or not. ...',
        seeMore: 'https://www.acouplecooks.com/iced-tea-recipe/',
        category: '🍵 tea',
        ingredients: [''],
        guidance: ['', '', '']
    },
    {
        name: 'Matcha Latte',
        image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80',
        desc: 'A matcha latte is a tea latte made with matcha green tea powder and steamed milk ...',
        seeMore: 'assets/recipes/matcha-latte.html',
        category: '🍵 tea',
        ingredients: [''],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Chai Latte',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F80%2F61%2F0d%2F80610d7f98e5ebc5cc527d6138a8059d.jpg&f=1&nofb=1&ipt=886db3ff7a61c4c6f1fc3893bfb1dd11a66b1686f62f8256f0c31430d7207af9&ipo=images',
        desc: 'An iced chai latte is a spiced tea drink with milk served over ice ...',
        seeMore: 'assets/recipes/iced-chai-latte.html',
        category: '🍵 tea',
        ingredients: ['' ],
        guidance: ['', '', '']
    },
    {
        name: 'Focaccia Pizza',
        image: 'https://images.unsplash.com/photo-1646851035330-f35fa5b44beb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        desc: 'A focaccia pizza is a pizza made with focaccia bread ...',
        seeMore: 'assets/recipes/focaccia-pizza.html',
        category: '🍴 food',
        ingredients: ['Flour', 'Luke Warm Water', 'Dry yeast', 'Chili powder', 'Salt', 'Olive oil', 'Garlic', 'Oregano', 'Basil', 'Rosemary', 'Thyme', 'Flake salt' ],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Matcha Latte',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F229%2F390%2Fnon_2x%2Ficed-matcha-latte-free-photo.jpg&f=1&nofb=1&ipt=313d9239035f0b57c076e9eeb955bd401bad967749c5a3688bdbe2260f3b7da0&ipo=images',
        desc: 'An iced matcha latte is a matcha green tea blended with milk  ...',
        seeMore: 'assets/recipes/iced-matcha-latte.html',
        category: '🍵 tea',
        ingredients: ['' ],
        guidance: ['', '', '']
    },
    {
        name: 'Focaccia',
        image: 'https://images.unsplash.com/photo-1605466237823-49122fcaf198?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
        desc: 'Focaccia is an Italian flatbread where the dough is flavoured with olive oil and ...',
        seeMore: 'assets/recipes/focaccia.html',
        category: '🍴 food',
        ingredients: ['Flour', 'Luke Warm Water', 'Dry yeast', 'Chili powder', 'Salt', 'Olive oil', 'Garlic', 'Oregano', 'Basil', 'Rosemary', 'Thyme', 'Flake salt' ],
        guidance: ['', '', '']
    },
    {
        name: 'Dalgona Coffee',
        image: 'https://images.unsplash.com/photo-1611497458787-f4710b375231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80',
        desc: 'Dalgona coffee is a whipped, frothy iced coffee drink made with only three ingredients ...',
        seeMore: 'assets/recipes/dalgona-coffee.html',
        category: '☕️ coffee',
        ingredients: ['Instant Coffee', 'Hot water', 'Sweetener of choice (E.g. Sugar, Maple Syrup, honey)', 'Milk of choice'],
        guidance: ['', '', '']
    },
    {
        name: 'Cappuccino',
        image: 'https://images.unsplash.com/photo-1474255710329-379550af928d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: 'A cappuccino is an espresso-based coffee drink with steamed milk foam ...',
        seeMore: 'assets/recipes/cappuccino.html',
        category: ['☕️ coffee', 'all'],
        ingredients: ['Espresso', 'Steamed milk', 'Milk foam'],
        guidance: ['', '', '']
    },
    {
        name: 'Chai Latte',
        image: 'https://images.unsplash.com/photo-1561336526-2914f13ceb36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: 'A chai latte is a spiced tea drink, mixed with steamed milk and topped with foam ...',
        seeMore: 'assets/recipes/chai-latte.html',
        category: '🍵 tea',
        ingredients: ['Chai tea', 'Steamed milk'],
        guidance: ['', '', '']
    },
    {
        name: 'Cortado',
        image: 'https://images.unsplash.com/photo-1466689923919-dbea2d43d41e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
        desc: 'Cortado is a spanish coffee drink. The cortado is served differently depending ...',
        seeMore: 'assets/recipes/cortado.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Steamed milk'],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Coffee',
        image: 'https://images.unsplash.com/photo-1517959105821-eaf2591984ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80',
        desc: 'Iced coffee is a coffee drink served cold. It can either be prepared by brewing ...',
        seeMore: 'assets/recipes/iced-coffee.html',
        category: '☕️ coffee',
        ingredients: ['Brewed coffee', 'Ice cubes'],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Latte',
        image: 'https://images.unsplash.com/photo-1484542959923-de288ec85ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
        desc: 'An iced latte is a cold drink made with espresso, milk and ...',
        seeMore: 'assets/recipes/iced-latte.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Milk', 'Ice cubes'],
        guidance: ['', '', '']
    },
    {
        name: 'Iced Mocha',
        image: 'https://images.unsplash.com/photo-1632277671233-a4ffa6e732dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
        desc: 'An iced mocha is a cold coffee drink that consists of a double shot ...',
        seeMore: 'assets/recipes/iced-mocha.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Mocha/chocolate sauce', 'Milk', 'Ice cubes'],
        guidance: ['', '', '']
    },
    {
        name: 'Mocha',
        image: 'https://images.unsplash.com/photo-1513244608388-32427255be63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2592&q=80',
        desc: 'A mocha is essentially a latte with chocolate. It is made up of espresso, ...',
        seeMore: 'assets/recipes/mocha.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Chocolate powder or syrup', 'Steamed milk'],
        guidance: ['', '', '']
    },
    {
        name: 'Espresso Macchiato',
        image: 'https://images.unsplash.com/photo-1519091915001-f72a15a88b04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        desc: 'An espresso macchiato is an espresso drink with a double shot of espresso ...',
        seeMore: 'assets/recipes/espresso-macchiato.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Frothed milk'],
        guidance: ['', '', '']
    },
    {
        name: 'Americano',
        image: 'https://images.unsplash.com/photo-1544681369-310c49478a6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
        desc: 'An americano is an espresso drink made with hot water and espresso. It can be made ...',
        seeMore: 'assets/recipes/americano.html',
        category: '☕️ coffee',
        ingredients: ['Espresso', 'Hot water'],
        guidance: ['', '', '']
    },
    {
        name: 'Espresso',
        image: 'https://images.unsplash.com/photo-1508088405209-fbd63b6a4f50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80',
        desc: 'An espresso is a concentrated form of coffee served in small, strong shots ...',
        seeMore: 'assets/recipes/espresso.html',
        category: '☕️ coffee',
        ingredients: ['Ground coffee', '(Water)'],
        guidance: ['', '', '']
    }
]

let nameLowerCase = `recipes[i].name.toLowerCase()`;


let recipesLayout = document.querySelector('#recipes-layout');
for (let i = 0; i < recipes.length; i++) {
    recipesLayout.innerHTML += `
                                <div data-filter="${recipes[i].category}" class="recipe-item">
                                    <a href="${recipes[i].seeMore}" target="_blank"><img src="${recipes[i].image}" load="lazy"></a>
                                    <div class="recipe__text">
                                        <a href="${recipes[i].seeMore}.html" target="_blank"><h3>${recipes[i].name}</h3></a>
                                        <a href="${recipes[i].seeMore}" target="_blank"><p class="recipe-desc">${recipes[i].desc}</p></a>
                                    </div>
                                </div>
                                `;
}

const buttons = document.querySelectorAll('.btn');
const recipeItem = document.querySelectorAll('.recipe-item');

function filterButtons(event) {
  let targetBtn = event.target.textContent.toLowerCase();
  targetBtn === 'all recipes' ?
    recipeItem.forEach(r => {
      r.classList.contains('hide') ?
        r.classList.remove('hide') : null
    }) :
  recipeItem.forEach(r => {
    r.classList.add('hide')
    r.dataset.filter === targetBtn ?
      r.classList.remove('hide') : null
  })
}


for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var current = document.querySelector(".active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


buttons.forEach(function(button) {
  button.addEventListener('click', filterButtons)
})

// pagination function
/*
    let page = 1;
    if (recipeItem >= 20) {
        page++;
        place the last element on the next page
    } else {
        page = '';
    }
 */


