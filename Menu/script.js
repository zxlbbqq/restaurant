let foodContainer = document.querySelector('.food-container');
const fooditem=[
    {
        FoodName: "Пан о шоколя",
        foodimg: 'Menu/images/1.png',
        price: "250 ₽",
        type: "breakFast",
        des: "Шоколад, сахара, муки, масло, дрожжи."
    },
    {
        FoodName: "Круассан",
        foodimg: 'Menu/images/2.jpg',
        price: "200 ₽",
        type: "breakFast",
        des: "Мука, дрожжи, соль, вода и масло."
    },
    {
        FoodName: "Омлет",
        foodimg: 'Menu/images/3.jpg',
        price: "300 ₽",
        type: "breakFast",
        des: "Яйца, молоко, соль, перец, сосиски."
    },
    {
        FoodName: "Грибной крем-суп",
        foodimg: 'Menu/images/4.jpg',
        price: "450 ₽",
        type: "Lunch",
        des: "Шампиньоны, лук, чеснок, сливочное масло, мука, куриный бульон, сливки, зелень."
    },
    {
        FoodName: "Луковый суп",
        foodimg: 'Menu/images/5.jpg',
        price: "500 ₽",
        type: "Lunch",
        des: "Лук, чеснок, сало, говяжий бульон, гренки, сыр, зелень."
    },
    {
        FoodName: "Буйабес",
        foodimg: 'Menu/images/6.png',
        price: "800 ₽",
        type: "Lunch",
        des: "Тунец, мидии, креветки, лук, морковь, сельдерей, помидоры, белое сухое вино, томатная паста, шафран, зелень, картофель."
    },
    {
        FoodName: "Вишисуаз",
        foodimg: 'Menu/images/7.png',
        price: "550 ₽",
        type: "Lunch",
        des: "Картофель, лук-порей, сливочное масло, сливки, куриный бульон, соль, перец, мускатный орех, зелень."
    },
    {
        FoodName: "Минестроне",
        foodimg: 'Menu/images/8.jpg',
        price: "650 ₽",
        type: "Lunch",
        des: "Картофель, морковь, капуста, сельдерей, фасоль, чечевица, макаронные изделия, оливковое масло, соль, специи, зелень."
    },
    {
        FoodName: "Консоме",
        foodimg: 'Menu/images/9.jpg',
        price: "650 ₽",
        type: "Lunch",
        des: "Говяжий бульон, курица, ветчина, овощи, зелень, соль, специи."
    },
    {
        FoodName: "Сок",
        foodimg: 'Menu/images/10.jpg',
        price: "100 ₽ - 0.3л <br> 150 ₽ - 0.5л",
        type: "Shakes",
        des: "Апельсиновый, Яблочный, Ананасовый, Мультифрукт."
    },
    {
        FoodName: "Кофе",
        foodimg: 'Menu/images/11.jpg',
        price: "200 ₽ - 0.3л",
        type: "Shakes",
        des: "Латте, Американо, Капуччино, Эспрессо."
    },
    {
        FoodName: "Чай",
        foodimg: 'Menu/images/12.jpg',
        price: "200 ₽ - 0.3л",
        type: "Shakes",
        des: "Черный чай, Зеленый чай, Травянной чай."
    },
    {
        FoodName: "Устрицы",
        foodimg: 'Menu/images/13.jpg',
        price: "1000 ₽",
        type: "Shakes",
        des: "Севиче с соусом на основе табаско или имбирем на выбор."
    },
    {
        FoodName: "Фуа-гра",
        foodimg: 'Menu/images/14.png',
        price: "900 ₽",
        type: "Shakes",
        des: "Деликатес из гусиной печени. Подается с багетом и маслом."
    },

    {
        FoodName: "Анчоусы",
        foodimg: 'Menu/images/15.jpg',
        price: "600 ₽",
        type: "Dinner",
        des: "Маленькие рыбки. Подаются с багетом и оливковым маслом."
    },
    {
        FoodName: "Рататуй",
        foodimg: 'Menu/images/16.jpg',
        price: "700 ₽",
        type: "Dinner",
        des: "Баклажаны, кабачки, картофель, перец, лук с добавлением томата, чеснока и прованских трав."
    },
    {
        FoodName: "Утиное конфи",
        foodimg: 'Menu/images/17.jpg',
        price: "800 ₽",
        type: "Dinner",
        des: "Утинные ножки с фирменными специями томленные в жире."
    },
    {
        FoodName: "Тимбаль",
        foodimg: 'Menu/images/18.jpg',
        price: "650 ₽",
        type: "Dinner",
        des: "Запеканка из макарон с начинкой на выбор - мясо, грибы, помидоры."
    },
    {
        FoodName: "Алиго",
        foodimg: 'Menu/images/19.jpg',
        price: "500 ₽",
        type: "Dinner",
        des: "Картофельное пюре с добавлением савойского сыра приправленное солью и чесноком. Подается с маслом и сметаной."
    },
    {
        FoodName: "Котлета де воляй",
        foodimg: 'Menu/images/20.jpg',
        price: "500 ₽",
        type: "Dinner",
        des: "Котлета в панировке из куринного филе, внутри которого начинка из зеленого масла."
    },
]
const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('li');
menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'Всё')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Завтрак'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
            }
            else if(e.target.innerHTML==='Обед'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
            }
            else if(e.target.innerHTML==='Напитки'){
                if(box.classList.contains('Shakes'))
                {
                    box.classList.remove('d-none')
                }
            }
            else if(e.target.innerHTML==='Ужин'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
            }
        })
    })
})
function activeall()
{
    document.getElementById('activeall').setAttribute("class", "styleforliactive");
    document.getElementById('activebreakfast').removeAttribute("class", "styleforliactive");
    document.getElementById('activelunch').removeAttribute("class", "styleforliactive");
    document.getElementById('activeshakes').removeAttribute("class", "styleforliactive");
    document.getElementById('activedinner').removeAttribute("class", "styleforliactive");
}
function activebreakfast()
{
    document.getElementById('activebreakfast').setAttribute("class", "styleforliactive");
    document.getElementById('activeall').removeAttribute("class", "styleforliactive");
    document.getElementById('activelunch').removeAttribute("class", "styleforliactive");
    document.getElementById('activeshakes').removeAttribute("class", "styleforliactive");
    document.getElementById('activedinner').removeAttribute("class", "styleforliactive");
}
function activelunch()
{
    document.getElementById('activelunch').setAttribute("class", "styleforliactive");
    document.getElementById('activebreakfast').removeAttribute("class", "styleforliactive");
    document.getElementById('activeall').removeAttribute("class", "styleforliactive");
    document.getElementById('activeshakes').removeAttribute("class", "styleforliactive");
    document.getElementById('activedinner').removeAttribute("class", "styleforliactive");
}
function activeshakes()
{
    document.getElementById('activeshakes').setAttribute("class", "styleforliactive");
    document.getElementById('activebreakfast').removeAttribute("class", "styleforliactive");
    document.getElementById('activelunch').removeAttribute("class", "styleforliactive");
    document.getElementById('activeall').removeAttribute("class", "styleforliactive");
    document.getElementById('activedinner').removeAttribute("class", "styleforliactive");
}
function activedinner()
{
    document.getElementById('activedinner').setAttribute("class", "styleforliactive");
    document.getElementById('activebreakfast').removeAttribute("class", "styleforliactive");
    document.getElementById('activelunch').removeAttribute("class", "styleforliactive");
    document.getElementById('activeshakes').removeAttribute("class", "styleforliactive");
    document.getElementById('activeall').removeAttribute("class", "styleforliactive");
}