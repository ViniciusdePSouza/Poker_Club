interface prizeProps {
    awardedNumber: number;
    first: number;
    second:number;
    third: number;
    forth: number;
    fifth: number;
    sixth: number;
};

export interface TournamentConfig {
    buyIn: number
    addOn: number
    rebuy: number
    prize: prizeProps
}