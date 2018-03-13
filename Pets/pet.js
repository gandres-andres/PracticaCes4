var select;
function change() {
    select = getValueById('select');
    if (select == 'cat') {
        document.getElementById('catvac').style.display = 'block';
        document.getElementById('dogfam').style.display = 'none';
    } else {
        document.getElementById('dogfam').style.display = 'block';
        document.getElementById('catvac').style.display = 'none';
    }
}

function show() {
    var name = getValueById('name');
    var age = getValueById('age');
    var size = getValueById('size');
    if (select == 'cat') {
        var isVaccinated = getCheckById('isVaccinated');
        var cat = new Cats(name, age, size, isVaccinated);
        cat.showinfo();
    }
    if (select == 'dog') {
        var family = getCheckById('family');
        var dog = new Dogs(name, age, size, family);
        dog.showinfo();
    }


}

function getValueById(id) {
    return document.getElementById(id).value;
}

function getCheckById(id) {
    return document.getElementById(id).checked;
}

class Pets {
    constructor(name = '', age = 0, size = 0) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

class Cats extends Pets {
    constructor(name = '', age = 0, size = 0, isVaccinated = false) {
        super(name, age, size);
        this.isVaccinated = isVaccinated;
    }
    showinfo() {
        document.getElementById('input').innerHTML = "I´m cat and " + (this.isVaccinated === true ? "I vaccinated" : "I not vaccinated") + "<br>Name: " + this.name + "<br>Age: " + this.age + "<br>Size:" + this.size;
    }
}

class Dogs extends Pets {
    constructor(name = '', age = 0, size = 0, family = false) {
        super(name, age, size);
        this.family = family;
    }
    showinfo() {
        document.getElementById('input').innerHTML = "I´m dog and " + (this.family === true ? "I have family" : "I have not family") + "<br>Name: " + this.name + "<br>Age: " + this.age + "<br>Size:" + this.size;
    }
}