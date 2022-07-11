// function for computer turns

function computerPlay(){
    const options = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    let value;
    switch (randomNum) {
        case 0:
            value = options[0];
            break;
        case 1:
            value = options[1];
            break;
        case 2:
            value = options[2];
            break;
        default:
            value = 'Something went wrong';
    }
    return value;
}

