// The array of strings you want to split and display
      var myArray = ["Buy groceries", "Pay bills", "Clean the house", "Call a friend", "Attend a meeting", "Write a blog post", "Go for a run", "Study for an exam", "Practice a new skill or hobby", "Plan a trip", "Organize a closet or room", "Attend a workout class", "Volunteer at a local charity", "Research a new project or idea"];
      
      // The current word you want to display
      var currentWord = "";
      
      // The current index of the letter
      var currentIndex = 0;
      
      // The time interval between each letter typed
      var typingInterval = 150;
      
      // The time interval between cleaning and typing the next word
      var cleaningInterval = 200;
      
      // The current index of the letter when cleaning
      var cleaningIndex = 0;

      function displayNextLetter() {
        currentWord += myArray[0][currentIndex];
        currentIndex++;
        // Use the text() method to update the text in the <p> element
        $('input[name="userInput"]').attr('placeholder', currentWord);
        if(currentIndex === myArray[0].length) {
          clearInterval(typingIntervalId);
          setTimeout(cleanAndNext, cleaningInterval);
        }
      }
      
      function cleanAndNext() {
        cleaningIndex = currentWord.length - 1;
        cleaningIntervalId = setInterval(clean, 50);
      }
      
      function clean() {
        currentWord = currentWord.slice(0, cleaningIndex);
        cleaningIndex--;
        $('input[name="userInput"]').attr('placeholder', currentWord);
        if(cleaningIndex === -1) {
          clearInterval(cleaningIntervalId);
          currentWord = "";
          currentIndex = 0;
          myArray.shift();
          if(myArray.length > 0) {
            typingIntervalId = setInterval(displayNextLetter, typingInterval);
          } else {
            myArray = ["Buy groceries", "Pay bills", "Clean the house", "Call a friend", "Attend a meeting", "Write a blog post", "Go for a run", "Study for an exam", "Practice a new skill or hobby", "Plan a trip", "Organize a closet or room", "Attend a workout class", "Volunteer at a local charity", "Research a new project or idea"];
            typingIntervalId = setInterval(displayNextLetter, typingInterval);
          }
        }
      }
      
      var typingIntervalId = setInterval(displayNextLetter, typingInterval);