class Game {
    constructor(start) {
        this.stats = new Statistic()
        this.wallet = new Wallet(start)
        document.getElementById('start').addEventListener('click', this.startGame)
        this.spanWallet = document.querySelector('.panel span.wallet');
        this.squareColors = document.querySelectorAll('div.color');
        this.inputBid = document.getElementById('bid');
        this.spanResult = document.querySelector('.score span.result');
        this.spanGames = document.querySelector('.score span.number');
        this.spanWins = document.querySelector('.score span.win');
        this.spanLosses = document.querySelector('.score span.loss');
        

        this.render()
    }

    render(colors = ['#2ee', '#2ee', '#2ee' ] , money = this.wallet.getWalletValue(), result = "", stats = [0,0,0], bid, wonMoney) {

        this.squareColors.forEach((square,i) => {
            square.style.backgroundColor = colors[i]

        })
        if(result){
            result = `Wygrałeś ${wonMoney}`;
        }else if (!result && result != "") {
            result = `Przegrałeś ${bid}`;
        }
        
        this.spanResult.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats [0];
        this.spanLosses.textContent = stats [0];

    }

    startGame() {

    }
}

const game = new Game(100);