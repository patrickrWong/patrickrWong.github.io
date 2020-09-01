const textElement = document.getElementById('text');
const choiceElement = document.getElementById('choices');

let state = {};

// Game Start
function startGame() {
    state = {}
    showStory(1);
}       

// Show storyText/storyLine
function showStory(storyIndex){
    const storyLine = storyText.find(storyLine => storyLine.id === storyIndex)
    textElement.innerText = storyLine.text
    while (choiceElement.firstChild) {
        choiceElement.removeChild(choiceElement.firstChild);
    }

    storyLine.choices.forEach(choice => {
        if (showChoice(choice)) {
            const button = document.createElement('button');
            button.innerText = choice.text
            button.classList.add('btn')
            button.addEventListener('click', () => doChoice(choice))
            choiceElement.appendChild(button)
        }
    })    
}

// Show choices
function showChoice(choice) {
    return choice.requiredState == null || choice.requiredState(state)
}

// Choice picked and executed
function doChoice(choice) {
    const nextTextId = choice.nextText
    if(nextTextId <= 0){
        return startGame();
    }
    state = Object.assign(state, choice.setState)
    showStory(nextTextId)
}

startGame();
