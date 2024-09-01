export function playSelectSound(): void {
  const audio = new Audio('../assets/sounds/select.mp3');
  audio.volume = 0.3; // 음량 30%
  audio
    .play()
    .then(() => {
      console.log('Sound played successfully');
    })
    .catch((error: Error) => {
      console.error('Failed to play sound:', error);
    });
}
