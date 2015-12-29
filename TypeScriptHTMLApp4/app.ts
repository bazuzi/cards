/// <reference path="Scripts/typings/knockout/knockout.d.ts"/>
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

interface ICard { }

class RegularCard implements ICard {
    constructor(public suit: CardSuit, public rank: CardRank) { }


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


class MyViewModel {
    cardsInHand = ko.observableArray<ICard>([
        new RegularCard(CardSuit.Hearts, CardRank.Ace),
        new RegularCard(CardSuit.Hearts, CardRank.Two),
        new RegularCard(CardSuit.Hearts, CardRank.Three),
        new RegularCard(CardSuit.Hearts, CardRank.Four),
    ]);

    topDiscard = ko.observable<ICard>();
}

$(() => {
    ko.applyBindings(new MyViewModel());
});
