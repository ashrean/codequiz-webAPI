# Code Quiz

# Table of Contents
 - Description
 - Installation Instructions
 - Github Account
 - Contacts
 - Code Snippets
 - Resources
 - Credits

# Description
The purpose of this project is not only to test your speed but also your knowledge. You will be presented with an intro page with a button saying "Begin" once you have clicked on that button a timer of sixty seconds has appeared on the right-hand screen. With the allotted time you must correctly answer the multiple choice questions before the timer has hit zero or if you answered them all correctly. But there is a twist! For every wrong answer, a total of three seconds is subtracted from the timer.  At the end of the quiz, you must enter your initials to store your score on the scoreboard.

# Installation Instructions
1. Open the terminal (make sure it's not coded into a directory)
2. Type ls to see all of your files stored on your computer
3. Type cd into a directory of your choice from there you have two options
    - Create a new directory by using the command mkdir FILENAME
    - type cd into an existing one
4. Once you have selected a directory of your choice you may git clone the repository.
5. Type ls to make sure it is there
6. Type cd to enter the selected directory
7. Type code . (make sure to add space between the code and the period) and VS Code will automatically open it up for you.

# Github Account
URl -> https://github.com/ashrean/codequiz-webAPI

Deployed Link -> https://ashrean.github.io/codequiz-webAPI/

# Contacts
Email -> sese.ashrean@gmail.com

Linkedin -> https://www.linkedin.com/in/ashleyrean/

# Code Snippets
Creating the timer
function beginCount() {
    var timeInterval = setInterval(function() {
        secondsLeft --;
        timeLeft.textContent = "Time Remaining" + "secondsRemaining" + "s";

        if (secondsRemaining <=0){
            clearInterval(timeInterval);
            timeLeft.textContent = "Time is up...";
            quizDone();

        } else if(questCount >= questions.length + 1 ){
            clearInterval(timeInterval);
            quizDone();
        }
    }, 1000);
}


# Resources
Books:
    - Javascipt bt Mike McGrath 6th edition

Websites:
    - MDN Web Docs: https://developer.mozilla.org/en-US/
    - W3 Schools: https://www.w3schools.com/
    -

# Credits
Paul - my brother-in-law, for taking the time out his schedule and walking through each of the topics.

 <!-- Pseudo Code
 1. When initating the quiz the user must press start in order for the timer to work
    a. When timer has started a question can appear timer will count down from 60seconds
    b. A total of 10 questions with topics from HTML/CSS/Javascript
        1. The quiz will be multiple choice style with 3 options for answers
        2. Each wrong answer will deduct 3 seconds from the timer
            2a. IF answered wrong it will show you the correct answer
2. When timer has reached 0 or if all questions has been answered the game will end
3. When the game has ended the user is presented with the score and must enter initials
    a. The user must enter initials not numbers, characters or anything longer than their initals
4. Once user has enterted initals they have the option to play again. -->
