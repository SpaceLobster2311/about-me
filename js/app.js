'use strict';

// write 5 questions. They must accept yes or no or y/n IN ANY CASE
// examples: yes or YES or no or NO or y or Y or N or n.
var userName = prompt('Hey there, what\'s your name?');
//console.log(userName);
alert('Welcome to the page ' + userName + ' I have some question\'s for you.');

//question 1
var answerSeattle = prompt('Do I live in Seattle?').toLowerCase();
if (answerSeattle === 'yes' || answerSeattle === 'y') {
  //console.log('That would be right..');
  alert(' You\'re right. that\'s dope..');
}
else if (answerSeattle !== 'yes' || answerSeattle !== 'y') {
  //console.log('Ah, well thats too bad');
  alert('Ah wrong, well thats too bad');
}

//question 2
var answerPizza = prompt('So ' + userName + ' Do you think I like pizza?').toLowerCase();
if (answerPizza === 'yes' || answerPizza === 'y') {
  //console.log('That\'s good ' + userName + ' it seems like we can be freinds!');
  alert('That\'s good ' + userName + ' it seems like we can be friends!');
}
else if (answerPizza !== 'yes' || answerPizza !== 'y') {
  //console.log('Well ' + userName + ' we are getting off to a rough start huh?');
  alert('Well ' + userName + ' we are getting off to a rough start huh?');
}

//question 3
var answerCats = prompt('Do you think I like cats over dogs?').toLowerCase();
if (answerCats === 'yes' || answerCats === 'y') {
  //console.log('Well ' + userName + ' You are correcto');
  alert('Well ' + userName + ' You are correcto');
}
else if (answerCats !== 'yes' || answerCats !== 'y') {
  //console.log('Wrong!');
  alert('Wrong!');
}

//question 4
var answerSkydiving = prompt('Do you think I\'ve been skydiving before?').toLowerCase();
if (answerSkydiving === 'no' || answerSkydiving === 'n') {
  //conole.log('You\'re right');
  alert('You\'re right');
}
else if (answerSkydiving !== 'no' || answerSkydiving !== 'n') {
  //console.log('What\'re you crazy ' + userName + '! I hate flying, there\'s no way I\'d be jumping out of plane!');
  alert('What\'re you crazy ' + userName + '! I hate flying, there\'s no way I\'d be jumping out of plane!');
}

//question 5
var answer5th = prompt('Do you think I could think of a 5th question to ask you about me?').toLowerCase();
if (answer5th === 'yes' || answer5th === 'y') {
  //console.log('ha! No way' + userName + );
  alert('ha! No way' + userName + '');
}
else if (answer5th !== 'yes' || answer5th !== 'y') {
  //console.log('Smart' + userName +);
  alert('Smart ' + userName + '');
}

// template literal
// While using template literal, you don't need to use an ' in your text. Also you will only use template literal if it
// includes some javascript
alert(`Goodbye, ${userName} I hope you enjoyed the site`);


