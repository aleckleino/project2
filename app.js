// Imports
const { response } = require('express');
const express = require('express')
const app = express()
const port = 3000
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const fetchJson = (...args) => import('fetch-json').then(({default: fetchJson}) => fetchJson(...args));
// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/images'))

// Set View's
app.set('views', './views/pages/');
app.set('view engine', 'ejs');

// Navigation
app.get('', (req, res) => {
    res.render('index', { text: 'Hey' })
})

app.get('/characters', async (req, res) => {
    const url = 'https://swapi.dev/api/people/?format=json';
    const url2 ='https://swapi.dev/api/people/?page=2&format=json';
    const url3 ='https://swapi.dev/api/people/?page=3&format=json';
    const url4 ='https://swapi.dev/api/people/?page=4&format=json';
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    res.render('characters', {characters: data, characters2: data2,characters3: data3, characters4: data4});
})

app.get('/starships', async (req, res) => {
    const url = 'https://swapi.dev/api/starships/?format=json';
    const url2 = 'https://swapi.dev/api/starships/?page=2&format=json';
    const url3 = 'https://swapi.dev/api/starships/?page=3&format=json';
    const url4 = 'https://swapi.dev/api/starships/?page=4&format=json';
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    res.render('starships', {starships: data, starships2: data2, starships3: data3, starships4: data4});
})

app.get('/species', async (req, res) => {
    const url = 'https://swapi.dev/api/species/?format=json';
    const url2 = 'https://swapi.dev/api/species/?page=2&format=json';
    const url3 = 'https://swapi.dev/api/species/?page=3&format=json';
    const url4 = 'https://swapi.dev/api/species/?page=4&format=json';
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    res.render('species', {species: data, species2: data2, species3: data3, species4: data4});
})

app.get('/planets', async (req, res) => {
    const url = 'https://swapi.dev/api/planets/?format=json';
    const url2 = 'https://swapi.dev/api/planets/?page=2&format=json';
    const url3 = 'https://swapi.dev/api/planets/?page=3&format=json';
    const url4 = 'https://swapi.dev/api/planets/?page=4&format=json';
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    res.render('planets', {planets: data, planets2: data2, planets3: data3, planets4: data4});
})

app.get('/vehicles', async (req, res) => {
    const url = 'https://swapi.dev/api/vehicles/?format=json';
    const url2 = 'https://swapi.dev/api/vehicles/?page=2&format=json';
    const url3 = 'https://swapi.dev/api/vehicles/?page=3&format=json';
    const url4 = 'https://swapi.dev/api/vehicles/?page=4&format=json';
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const response3 = await fetch(url3);
    const response4 = await fetch(url4);
    const data = await response.json();
    const data2 = await response2.json();
    const data3 = await response3.json();
    const data4 = await response4.json();
    res.render('vehicles', {vehicles: data, vehicles2: data2, vehicles3: data3, vehicles4: data4});
})

app.listen(port, () => console.info(`App listening on port ${port}`))