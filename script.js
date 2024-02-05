//1.Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//1a)Get all the countries from Asia continent /region using Filter function.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    var asia_region = res.filter((ele)=>ele.region == "Asia")
    var countries_res = asia_region.map((ele)=>ele.name.official)
    console.log(countries_res)
}

//1b)Get all the countries with a population of less than 2 lakhs using Filter function.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    var country_population = res.filter((ele)=>ele.population<200000)
    var countries_res = country_population.map((ele)=>ele.name.official)
    console.log(countries_res)
}

//1c)Print the following details name, capital, flag, using forEach function.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var res = JSON.parse(request.response)
res.forEach(element => {
    console.log(`Name: ${element.name.official} | Capital: ${element.capital} | Flag: ${element.flags.png}`)
});
}

//1d)Print the total population of countries using reduce function.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var res = JSON.parse(request.response)
var total = res.reduce((acc,cv)=>acc+cv.population,0)
console.log(`Total Population: ${total}`)
}

//1E)Print the country that uses US dollars as currency.

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
var res = JSON.parse(request.response)
for(var i in res)
{
    var currency = res[i].currencies
    if(currency && currency.USD)
    console.log(res[i].name.official)
}
}