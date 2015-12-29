/// <reference path="../Scripts/typings/jasmine/jasmine.d.ts" />
/// <reference path="../../TypeScriptHTMLApp4/app.ts"/>

describe("AnIntroductory", () => {
    it("MyViewModel test", () => {
        var subject = new MyViewModel();
        expect(subject.cardsInHand().length).toBe(4);
        expect(subject.topDiscard()).toBeUndefined();
    });
});