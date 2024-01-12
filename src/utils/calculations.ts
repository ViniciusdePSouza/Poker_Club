import { Players } from "../@types/players";

export class Calculation {
    private players: Players[];

    constructor(players: Players[]) {
        this.players = players;
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
}
