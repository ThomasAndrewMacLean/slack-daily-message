const fetch = require('node-fetch');

if (process.env.NODE_ENV === undefined) {
    require('dotenv-json')();
}
const icanhazdadjokeurl = 'https://icanhazdadjoke.com/';

const getJoke = async () => {
    const jokeJson = await fetch(icanhazdadjokeurl, {
        headers: { accept: 'application/json' }
    });
    const joke = await jokeJson.json();
    const body = { text: joke.joke };

    console.log(body);
    fetch(process.env.SLACK_URL, {
        method: 'post',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' }
    });
};

getJoke();
