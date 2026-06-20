export const playSound = (
  soundName: string,
  volumen?: number,
  auto?: boolean,
) => {
  const sound = new Audio(`/sounds/${soundName}.mp3`);
  sound.volume = volumen || 1;
  auto && sound.play();

  return sound;
};
