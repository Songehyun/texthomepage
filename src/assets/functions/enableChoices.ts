export function enableChoices(): void {
  const choices = document.querySelectorAll<HTMLDivElement>('#adventure-container .choice');
  choices.forEach((choice) => {
    choice.style.pointerEvents = 'auto';
  });
}
