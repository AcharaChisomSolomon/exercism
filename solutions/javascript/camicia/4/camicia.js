export const simulateGame = (playerA, playerB) => {
  const TOTAL_LENGTH = playerA.length + playerB.length;

  let cardCount = 0;
  let centralPile = [];
  let trickStarts = [];
  
  let currentPlayer = "playerA";
  const paymentLetters = "JQKA";
  let penaltyCount = 0;

  while(true) {
    if (playerA.length === TOTAL_LENGTH || playerB.length === TOTAL_LENGTH) {
      return { status: "finished", cards: cardCount, tricks: trickStarts.length };
    }
    if (centralPile.length === 0) {
      const startTrick = getTrickStartString(playerA, playerB);
      if (trickStarts.includes(startTrick)) {
        return { status: "loop", cards: cardCount, tricks: trickStarts.length };
      } else {
        trickStarts.push(startTrick);
      }
    }

    let currentCard = currentPlayer === "playerA" ? playerA.shift() : playerB.shift();
    
    if (currentCard) {
      centralPile.push(currentCard);
      cardCount += 1;

      if (penaltyCount > 0) {
        if (paymentLetters.includes(currentCard)) {
          penaltyCount = paymentLetters.indexOf(currentCard) + 1;
          currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
        } else {
          penaltyCount -= 1;
          if (penaltyCount === 0) {
            currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
            if (currentPlayer === "playerA") {
              playerA = [...playerA, ...centralPile];
            } else {
              playerB = [...playerB, ...centralPile];
            }
            centralPile = [];
          }
        }
      } else {
        if (paymentLetters.includes(currentCard)) {
          penaltyCount = paymentLetters.indexOf(currentCard) + 1;
        }
        currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
      }
    } else {
      currentPlayer = currentPlayer === "playerA" ? "playerB" : "playerA";
      if (currentPlayer === "playerA") {
        playerA = [...playerA, ...centralPile];
      } else {
        playerB = [...playerB, ...centralPile];
      }
      centralPile = [];
    }
  }
};

function getTrickStartString(playerA, playerB) {
  return `${getPlayerString(playerA)}-${getPlayerString(playerB)}`;
}

function getPlayerString(player) {
  const letters = "JQKA";
  
  let payments = "";
  let numberCount = 0;
  for (let i = 0; i < player.length; i++) {
    if (letters.includes(player[i])) {
      payments += player[i];
    } else {
      numberCount += 1;
    }
  }
  payments = payments.split("").sort().join("");

  return `${numberCount}${payments}`;
}