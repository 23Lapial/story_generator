let adjectives = ['alive', 'bad', 'charming', 'bright', 'cheerful', 'clumsy', 'crazy', 'creepy', 'dangerous', 'different',
'dull', 'distinct', 'dark', 'comfortable', 'cruel', 'awful', 'aggresive', 'adventurous', 'black', 'white', 'average'];
let adverbs = ['early', 'late', 'clearly', 'neatly', 'willfully', 'carefully', 'briskly', 'actually', 'unnaturally'];
let places = ['house', 'park', 'police station', 'cemetery', 'walmart', 'news station', 'bank', 'city']

function get_random_element_from_array(arr) {
    // will be used to construct story (returns random elements from array).
    return arr[Math.floor(Math.random() * arr.length)];
}

function main() {

    let name = document.getElementById('customname').value;  //will fetch name in input field
    let is_us = document.getElementById('us').checked;  //will be used to implement the applicable scale of measurement
    let story = ''  //to avoid problems, we substantiate story here to allow story mutable to either if blocks

    if (is_us) {
        let measurements = ["fahrenheit", "pounds"]
        story =  create_unique_story(measurements, name);

    } else {
        let measurements = ["centigrade", "stone"]
        story = create_unique_story(measurements, name);
    }

    document.querySelector('.story').style.visibility = 'visible';  // will make html visible
    document.getElementById('story_text').innerHTML = story;  //will annex story to paragraph
}

function create_unique_story(measurements, name) {

    return `The clouds are very ${get_random_element_from_array(adjectives)} outside. ${name} spotted a(n) ${get_random_element_from_array(adjectives)} clown sitting on the bench right outside the ${get_random_element_from_array(places)}. The weather is ${Math.floor(Math.random() * 100) + 1 } ${measurements[0]}. The clown weighs about ${Math.floor(Math.random() * 250) + 1} ${measurements[1]}`;
}
