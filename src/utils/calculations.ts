import { Players } from "../@types/players";
import { TournamentConfig } from "../@types/tournamentConfig";

type ActionType = 'REBUY' | 'ADDON' | 'BUYIN'

export class Calculation {
    private players: Players[];
    private config: TournamentConfig

    constructor(players: Players[], config: TournamentConfig) {
        this.players = players;
        this.config = config;
    }

    calculateRebuys(): number {
        const totalRebuys = this.players.reduce((accumulator, currentPlayer) => {
            return accumulator + currentPlayer.rebuys;
        }, 0);

        return totalRebuys;
    }

    calculateAddOns(): number {
        const totalAddOnsArray = this.players.filter((player) => player.addOn);

        return totalAddOnsArray.length;
    }

    calculateItemMoney(action: ActionType , item: number) {
        if(action === 'REBUY'){
            const rebuyMoney = this.config.rebuy ?  this.config.rebuy * item : 40 * item

            return rebuyMoney
        }

        if(action === 'ADDON'){
            const addOnMoney = this.config.addOn ?  this.config.addOn * item : 40 * item

            return addOnMoney
        }

        if(action === 'BUYIN'){
            const buyInMoney = this.config.buyIn ?  this.config.buyIn * item : 40 * item

            return buyInMoney
        }
    }
}
