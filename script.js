/* Task 1 - Complete the function according to the TODO */
function addComment(username, comment, addToStart) {
  const combinedComment = `${username}: ${comment}`;

  if (addToStart) {
    comments.unshift(combinedComment);
  } else {
    comments.push(combinedComment);
  }
}

/* Task 2 - Create your showWinnerMessage below according to the TODO */
function showWinnerMessage(winner) {
  document.getElementById('winner-display');
  winnerDisplay.innerHTML = `Congratulations ${winner}, you are the winner!`;
}

/* Task 3 - Create your pickWinner below according to the TODO */
function pickWinner() {
  const randomIndex = Math.floor(Math.random() * users.length);
  return users[randomIndex];
}

/* Task 4 - Complete the function according to the TODO */
function showRandomEmoji() {}

/* Task 5 - Complete the function according to the TODO */
function reverseOrder() {}

/* Task 6 - Complete the function according to the TODO */
function removeComment(index) {}

/* Task 7 - Complete the function according to the TODO */
function filterEmojiComments() {}

/* Level Ups */

/* Level Up - Task 8 - Complete the filterList function according to the TODO */
function filterList(searchTerm, searchUsers) {}

/* Level Up - Task 9 - Compelte the task according to the TODO */

/* Level Up - Task 10 - Add to the `addComment` function so that the an `@` sign is added to the username if there is not already one before it gets pushed into the array.  */
