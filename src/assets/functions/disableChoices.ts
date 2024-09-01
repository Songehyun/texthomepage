export function disableChoices(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'none';
  });
}
