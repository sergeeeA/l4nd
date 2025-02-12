function toggleMenu() {
    const dropdownMenu = document.getElementById("dropdownMenu");
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    } else {
      dropdownMenu.style.display = "block";
    }
  }

  function showBackground() {
    const overlay = document.getElementById("backgroundOverlay");
    overlay.classList.add("show-overlay");
  }
  
  function hideBackground() {
    const overlay = document.getElementById("backgroundOverlay");
    overlay.classList.remove("show-overlay");
  }
  //ABSTRACT
  function showBackgroundG() {
    const overlay = document.getElementById("backgroundOverlayG");
    overlay.classList.add("show-overlayG");
  }
  
  function hideBackgroundG() {
    const overlay = document.getElementById("backgroundOverlayG");
    overlay.classList.remove("show-overlayG");
  }
//MEGA ETH
  function showBackgroundM() {
    const overlay = document.getElementById("backgroundOverlayM");
    overlay.classList.add("show-overlayM");
  }
  
  function hideBackgroundM() {
    const overlay = document.getElementById("backgroundOverlayM");
    overlay.classList.remove("show-overlayM");
  }




  
  //gAME

 // Initialize counters and balances
let wins = 0;
let losses = 0;
let balance = 6.9; // Starting $BERA balance
let nftBalance = 20; // Starting NFT balance
let attempts = 0; // Track total attempts

// Get DOM elements
const clickBox = document.getElementById("clickBox");
const attemptsDisplay = document.getElementById("attempts");
const winsDisplay = document.getElementById("wins");
const lossesDisplay = document.getElementById("losses");
const ratioDisplay = document.getElementById("ratio");
const balanceDisplay = document.getElementById("balance");
const nftBalanceDisplay = document.getElementById("nftBalance");
const sellButton = document.getElementById("sellButton");
const buyButton = document.getElementById("buyButton");
const leaderboardTable = document.getElementById("leaderboardTable").getElementsByTagName("tbody")[0];
const shareContainer = document.getElementById("shareContainer");
const shareWins = document.getElementById("shareWins");
const shareLosses = document.getElementById("shareLosses");
const shareRatio = document.getElementById("shareRatio");
const shareAttempts = document.getElementById("shareAttempts");
const tweetLink = document.getElementById("tweetLink");

// Predefined leaderboard data
const leaderboardData = [
  { name: "Smokey", ratio: 1.69, attempts: 69 },
  { name: "BoBo", ratio: 1.42, attempts: 420 },
  { name: "Locked BERA Sellooor", ratio: 0.9, attempts: 45 },
  { name: "Skemer", ratio: 0.8, attempts: 40 },
  { name: "Interdimensional Jeet", ratio: 0.7, attempts: 35 },
];

// User data
const userData = { name: "You", ratio: 0, attempts: 0 };

// Function to update PnL
function updatePnL() {
    const initialBalance = 6.9;
    const pnl = balance - initialBalance;
    const pnlElement = document.getElementById("pnl");
  
    if (pnl > 0) {
      pnlElement.textContent = `+${pnl.toFixed(2)} $BERA`;
      pnlElement.style.color = "#39FF14"; // Optional: make profit green
    } else if (pnl < 0) {
      pnlElement.textContent = `-${Math.abs(pnl).toFixed(2)} $BERA`;
      pnlElement.style.color = "red"; // Optional: make loss red
    } else {
      pnlElement.textContent = `0 $BERA`;
      pnlElement.style.color = "gray"; // Optional: keep neutral color if no profit or loss
    }
  }
  
  // Call this function whenever the balance is updated
  updateBalances = function() {
    balanceDisplay.textContent = balance.toFixed(1); // Display balance with 1 decimal
    nftBalanceDisplay.textContent = nftBalance;
  
    // Update PnL
    updatePnL();
  
    // Disable click box if NFT balance or $BERA balance is 0
    const canDuel = nftBalance > 0 && balance >= 0.1;
    clickBox.style.pointerEvents = canDuel ? "auto" : "none";
    clickBox.style.opacity = canDuel ? 1 : 0.5;
  
    // Disable sell button if NFT balance is 0
    sellButton.disabled = nftBalance === 0;
  
    // Disable buy button if $BERA balance is less than 1
    buyButton.disabled = balance < 1;
  };
  

// Function to update the ratio
function updateRatio() {
  const ratio = losses === 0 ? wins : (wins / losses).toFixed(2);
  ratioDisplay.textContent = ratio;
  userData.ratio = parseFloat(ratio); // Update user's ratio
  updateLeaderboard(); // Update leaderboard after ratio changes
}

// Function to update the leaderboard
function updateLeaderboard() {
  // Add user data to the leaderboard
  const allPlayers = [...leaderboardData, userData];

  // Sort players by ratio (descending)
  allPlayers.sort((a, b) => b.ratio - a.ratio);

  // Clear the leaderboard table
  leaderboardTable.innerHTML = "";

  // Populate the leaderboard
  allPlayers.forEach((player, index) => {
    const row = leaderboardTable.insertRow();
    row.insertCell().textContent = index + 1; // Rank
    row.insertCell().textContent = player.name; // Player name
    row.insertCell().textContent = player.ratio; // Ratio
    row.insertCell().textContent = player.attempts; // Attempts

    // Highlight the user's row
    if (player.name === "You") {
      row.style.backgroundColor = "#f5f5f596";
    }
  });

  // Show share component if the user's ratio exceeds 1.69
  if (userData.ratio > 1.69) {
    showShareComponent();
  }
}

// Function to show share component
function showShareComponent() {
  // Update share component stats
  shareWins.textContent = wins;
  shareLosses.textContent = losses;
  shareRatio.textContent = (losses === 0 ? wins : (wins / losses).toFixed(2));
  shareAttempts.textContent = attempts;

  // Show the share component
  shareContainer.style.display = "block";

  // Update the tweet link
  const tweetText = `I just defeated Smonkey on @berashowdown! 🎮\n\nWins: ${wins}\nLosses: ${losses}\nRatio: ${(losses === 0 ? wins : (wins / losses).toFixed(2))}\nAttempts: ${attempts}
  \nTry it out: berashowdown.xyz`;
  const encodedTweetText = encodeURIComponent(tweetText);
  tweetLink.href = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
}

// Function to update balances
function updateBalances() {
  balanceDisplay.textContent = balance.toFixed(1); // Display balance with 1 decimal
  nftBalanceDisplay.textContent = nftBalance;

  // Disable click box if NFT balance or $BERA balance is 0
  const canDuel = nftBalance > 0 && balance >= 0.1;
  clickBox.style.pointerEvents = canDuel ? "auto" : "none";
  clickBox.style.opacity = canDuel ? 1 : 0.5;

  // Disable sell button if NFT balance is 0
  sellButton.disabled = nftBalance === 0;

  // Disable buy button if $BERA balance is less than 1
  buyButton.disabled = balance < 1;
}

// Click event for the box
clickBox.addEventListener("click", () => {
  // Deduct 0.1 $BERA for each press
  balance -= 0.1;
  if (balance < 0) balance = 0; // Ensure balance doesn't go negative

  // Increment attempts
  attempts++;
  attemptsDisplay.textContent = attempts;
  userData.attempts = attempts; // Update user's attempts

  // Randomly determine win or loss (50% chance)
  const isWin = Math.random() < 0.5;

  // Update counters and NFT balance
  if (isWin) {
    wins++;
    winsDisplay.textContent = wins;
    nftBalance++; // Add 1 NFT for a win
  } else {
    losses++;
    lossesDisplay.textContent = losses;
    nftBalance--; // Deduct 1 NFT for a loss
  }

  // Update the ratio and balances
  updateRatio();
  updateBalances();
});

// Sell NFT for $BERA
sellButton.addEventListener("click", () => {
  if (nftBalance > 0) {
    nftBalance--; // Deduct 1 NFT
    balance += 1; // Add 1 $BERA
    updateBalances();
  }
});

// Buy NFT with $BERA
buyButton.addEventListener("click", () => {
  if (balance >= 1) {
    balance -= 1; // Deduct 1 $BERA
    nftBalance++; // Add 1 NFT
    updateBalances();
  }
});

// Initialize balances and leaderboard on page load
updateBalances();
updateLeaderboard();
//SHARE X

// Function to load the share component
async function loadShareComponent() {
    const response = await fetch("share-component.html");
    const html = await response.text();
    const container = document.createElement("div");
    container.innerHTML = html;
    document.body.appendChild(container);
  
    // Get share container and elements
    const shareContainer = document.querySelector(".share-container");
    const shareWins = document.getElementById("shareWins");
    const shareLosses = document.getElementById("shareLosses");
    const shareRatio = document.getElementById("shareRatio");
    const shareAttempts = document.getElementById("shareAttempts");
    const tweetLink = document.getElementById("tweetLink");
  
    // Function to show share component
    function showShareComponent() {
        // Update share component stats
        shareWins.textContent = wins;
        shareLosses.textContent = losses;
        shareRatio.textContent = (losses === 0 ? wins : (wins / losses).toFixed(2));
        shareAttempts.textContent = attempts;
      
        // Show the share component
        shareContainer.style.display = "block";
      
        // Update the tweet link
        const tweetText = `I just defeated Smokey on BERASHOWDOWN! 🎮\n\nWins: ${wins}\nLosses: ${losses}\nRatio: ${(losses === 0 ? wins : (wins / losses).toFixed(2))}\n\nTry it out: berashowdown.xyz`;
        const encodedTweetText = encodeURIComponent(tweetText);
        tweetLink.href = `https://twitter.com/intent/tweet?text=${encodedTweetText}`;
      }
  
    return showShareComponent;
  }
  
  // Function to update balances and check if the user can duel
  async function updateBalances() {
    balanceDisplay.textContent = balance.toFixed(1); // Display balance with 1 decimal
    nftBalanceDisplay.textContent = nftBalance;
  
    // Disable click box if NFT balance or $BERA balance is 0
    const canDuel = nftBalance > 0 && balance >= 0.1;
    clickBox.style.pointerEvents = canDuel ? "auto" : "none";
    clickBox.style.opacity = canDuel ? 1 : 0.5;
  
    // Disable sell button if NFT balance is 0
    sellButton.disabled = nftBalance === 0;
  
    // Disable buy button if $BERA balance is less than 1
    buyButton.disabled = balance < 1;
  
    // Show share component if the user can no longer duel
    if (!canDuel) {
      const showShareComponent = await loadShareComponent();
      showShareComponent();
    }
  }