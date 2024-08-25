function chooseAdventure(direction) {
  const storyText = document.getElementById('story-text');
  if (direction === 'north') {
    storyText.textContent = 'You venture deeper into the forest, hearing strange noises.';
  } else if (direction === 'south') {
    storyText.textContent = 'You find a small village at the edge of the forest.';
  }
}
