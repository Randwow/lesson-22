/*global First Second Third*/
// function first() {
//     document.getElementById('demo').innerHTML = 'You clicked First Button';
//     console.log("First", this.tagName);

// }

// First.addEventListener('click', first);

// function second() {
//     document.getElementById('demo').innerHTML = 'You clicked Second Button';
//     console.log("Second", this.tagName);

// }

// Second.addEventListener('click', second);

// function third() {
//     document.getElementById('demo').innerHTML = 'You clicked Third Button';
//     console.log("Third", this.tagName);

// }
// Third.addEventListener('click', third);

function newEvent(elem) {
    this.first = function () {
        document.getElementById('demo').innerHTML = 'You clicked First Button';
        console.log("First", this.tagName);
    };
    this.second = function () {
        document.getElementById('demo').innerHTML = 'You clicked Second Button';
        console.log("Second", this.tagName);
    };
    this.third = function () {
        document.getElementById('demo').innerHTML = 'You clicked Third Button';
        console.log("Third", this.tagName);
    };

    var self = this;

    elem.onclick = function (e) {
        var target = e.target;
        var action = target.getAttribute('data-action');
        if (action) {
            self[action]();
        }
    };
}

new newEvent(newevent);