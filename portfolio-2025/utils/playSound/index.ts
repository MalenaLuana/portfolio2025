export const playSound = (soundName: string) => {
  const sound = new Audio(`/sounds/${soundName}.mp3`);
  sound.volume = 1;
  sound.play();
};
