class Statistic {
    constructor(){
        this.gameResults = [{win: true, bid: 2}, {win: false, bid: -12}];

    }
    addGameToStatistics(win,bid) {
        let gameResult = {
             win,
             bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }
    showGameStatistic() {
        let games = this.gameResults.length
        let wins = this.gameResults.filter(result => result.win).length
        let losses = this.gameResults.filter(result = !result.win).length
        return [games,wins,losses];
    }
}
const stats = new Statistics()