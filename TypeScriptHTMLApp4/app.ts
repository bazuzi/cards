/// <reference path="Scripts/typings/knockout/knockout.d.ts"/>
/// <reference path="Scripts/typings/jquery/jquery.d.ts"/>

class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};

class MyViewModel {
    searchString = ko.observable<string>();
    mycommand = () => {
        window.alert(this.searchString());
    }
}

$(() => {

    ko.applyBindings(new MyViewModel());

});
