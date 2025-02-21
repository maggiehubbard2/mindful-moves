// positive-messages.ts

export const positiveMessages: string[] = [
    "You got this!",
    "Keep going, you're doing amazing!",
    "Believe in yourself!",
    "Stay strong, you're unstoppable!",
    "Success is on your way!",
    "You are capable of greatness!",
    "One step at a time, you're crushing it!",
    "You're making progress every day!",
    "Keep pushing, you're almost there!",
    "You're stronger than you think!",
    "Keep shining, the world needs your light!",
    "You've got the power to achieve your dreams!",
    "Don't stop now, you're doing incredible!",
    "You're on the right path!",
    "Every day is a chance to be better!"
  ];
  
  export function getRandomPositiveMessage(): string {
    const randomIndex = Math.floor(Math.random() * positiveMessages.length);
    return positiveMessages[randomIndex];
  }
  