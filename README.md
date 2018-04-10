# Road-Trip-Race

### [**Live Game Demo **]("#")<br>

*Road Trip Race* is an authentic, single-player fast paced Spanish language learning game that is geared for both beginners and intermediate-advanced users.

The race takes place in South America, and the goal is to make it to each country before time runs out! 

**Don't know much about South America?** Fear not! Each question will quiz your Spanish vocabulary as well as educate you on the culture, customs, and traditions within each country.

**Careful!** For each question answer incorrectly, 10 seconds will be deducted from your timer. Luckily, for every right answer, 5 seconds will be added.

<img width="833" alt="screen shot 2018-04-10 at 10 34 03 am" src="https://user-images.githubusercontent.com/36453286/38573970-7107873c-3cac-11e8-9e3b-9dca06cf9cb6.png">


## Development 

### Project Requirements

* Render a game in the browser
* Design logic for winning & visually display which player won, or if it is one player, have a win state with feedback for the player
* Include separate HTML / CSS / JavaScript files
* Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
* Use Javascript or jQuery for DOM manipulation
* Deploy your game online, where the rest of the world can access it
* Use semantic markup for HTML (adhere to best practices)

### Technologies Used

1. HTML5
2. CSS
3. Jquery 
4. Javascript 
5. Boostrap

### Approach Taken

1. Game Type/Theme
    * Race around South America by answering Spanish vocabulary/trivia questions before time is up
    * Multiple choice - 3 answers to choose from 
2. Format/Organization
    * Created a Jquery array of objects called "Locations"
    * Created an empty variable called "currentLocation" 
    * Created a "time" variable with the starting time.
    * Objects include: country, a question, 3 choices and a correct answer.
3. Game Win 
    * Game is won if the user can make it through the last question before the timer runs out.
    * Alert is shown at the end
4. Game Lose 
    * Game is lost if the user runs out of time and doesn't make it through the last question.
    * Alert is shown at the end

## Challenges 

1. CSS/Styling - Positioning my buttons the way I wanted them to
2. Finding images I could legally use
3. Making the timer stop counting down after it hits 0

## Future Revisions

My original idea was to have the entire "game board" be the outline of South America with a pin that moved around the board according to the question("country") it was on. 
However, I wasn't able to find a good enough sized map to do this and had a difficult time trying to understand and find the x and y coordinates of each country. Because of this, I decided to simplify a bit and make the game playable. 
I would like to revise this in the future with more time and add the moving pin to the map!
