class Wallet {
    constructor(money) {
        let _money = money;
        // pobieranie aktualnej zawarttosci portfela
        this.getWalletValue = () => _money;
        // Sprawdzanie czy uzytkownik ma odpowiednią ilosc srodkow.
        this.checkCanPLay = value => {
            if (money >= value) return true;
            return false;
        }
        this.changeWallet = (value, type ="+") => {
            if (typeof value === "number" && !isNaN(value))
            {
                if(type === "+") {
                    return _money += value;
                }
                else if (type === "-") {
                    return _money -= value;
                }
                else
                {
                    throw new Error ("Nieprawidłowy typ działania")
                }
            
            }
            else
            {
                console.log(typeof value);
                throw new Error ("Nieprawidłowa liczba")
            }
        }
    }
}
const wallet = new Wallet(200)