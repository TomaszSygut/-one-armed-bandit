class Game {
    constructor(start) {
   
     this.stats = new Statistics();
     this.wallet = new Wallet(start);
   
     document.getElementById('start').addEventListener('click', this.startGame.bind(this));
     this.spanWallet = document.querySelector('.panel span.wallet');
     this.boards = [...document.querySelectorAll('div.color')];
     this.inputBid = document.getElementById('bid');
     this.spanResult = document.querySelector('.score span.result');
     this.spanGames = document.querySelector('.score span.number');
     this.spanWins = document.querySelector('.score span.win');
     this.spanLosses = document.querySelector('.score span.loss');
   
     this.render()
   
    }
   
    render(colors = ['#2ee', '#2ee', '#2ee'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {
     // console.log("gramy!!");
   
     this.boards.forEach((board, i) => {
      board.style.backgroundColor = colors[i]
     })
   
     this.spanWallet.textContent = money;
     if (result) {
      result = `YOU WON ${wonMoney} $. `;
     } else if (!result && result !== "") {
      result = `YOU LOSS ${bid} $. `
     }
     this.spanResult.textContent = result;
     this.spanGames.textContent = stats[0];
     this.spanWins.textContent = stats[1];
     this.spanLosses.textContent = stats[2];
   
     this.inputBid.value = "";
    }
   
    startGame() {
        if (this.inputBid.value == "") return alert('Enter some amount');
     else if (this.inputBid.value < 1) return alert('Your bid is too small!!')
     
     const bid = Math.floor(this.inputBid.value);
   
     if (!this.wallet.checkCanPlay(bid)) {
      return alert("You don't have enough funds on your bank account (You can deposit money into your account)")
     }
   
     this.wallet.changeWallet(bid, '-');
   
     this.draw = new Draw();
     const colors = this.draw.getDrawResult();
     const win = Result.checkWinner(colors);
     const wonMoney = Result.moneyWinInGame(win, bid);
     this.wallet.changeWallet(wonMoney);
     this.stats.addGameToStatistics(win, bid);
   
     this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney)
   
    }
   }
   
   