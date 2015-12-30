/// <reference path="Scripts/typings/knockout/knockout.d.ts"/>
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

interface ICard {
}

class RegularCard implements ICard {
    constructor(public suit: CardSuit, public rank: CardRank) { }

    toString(): string {
        return CardRank[this.rank] + ' of ' + CardSuit[this.suit];
    }
}

class Joker implements ICard {
    toString(): string {
        return "Joker";
    }
}

enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

enum CardRank {
    Ace = 1,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Jack,
    Queen,
    King,
}

class Meld {
    constructor(public cards: ICard[]) { }
}

class CardInHand {
    constructor(public card: ICard) { }

    public inMeld1: boolean;
    public inMeld2: boolean;
    public inMeld3: boolean;
    public inMeld4: boolean;
    public toDiscard: boolean;
}

class MyViewModel {
    cardsInHand = ko.observableArray<CardInHand>();

    topDiscard = ko.observable<ICard>();

    meldsOnTable = ko.observableArray<Meld>();

    drawFromStock = () => { };
    drawFromDiscard = () => { };
    discard = () => { };
}

$(() => {
    var viewModel = new MyViewModel();

    InsertTestData(viewModel);

    ko.applyBindings(viewModel);
});

function InsertTestData(viewModel: MyViewModel) : void{
    var cardInHand = new CardInHand(new RegularCard(CardSuit.Hearts, CardRank.Ace));
    cardInHand.inMeld1 = cardInHand.inMeld2 = cardInHand.inMeld3 = cardInHand.inMeld4 = cardInHand.toDiscard = true;
    viewModel.cardsInHand([
        cardInHand,
        new CardInHand(new RegularCard(CardSuit.Hearts, CardRank.Two)),
        new CardInHand(new RegularCard(CardSuit.Hearts, CardRank.Three)),
        new CardInHand(new RegularCard(CardSuit.Hearts, CardRank.Four)),
    ]);
    viewModel.topDiscard(new RegularCard(CardSuit.Clubs, CardRank.Nine));
    viewModel.meldsOnTable([
        new Meld([
            new RegularCard(CardSuit.Hearts, CardRank.Two),
            new RegularCard(CardSuit.Hearts, CardRank.Three),
            new RegularCard(CardSuit.Hearts, CardRank.Four),
        ]),
        new Meld([
            new RegularCard(CardSuit.Spades, CardRank.Two),
            new RegularCard(CardSuit.Spades, CardRank.Three),
            new RegularCard(CardSuit.Spades, CardRank.Four),
        ]),
    ]);

}
