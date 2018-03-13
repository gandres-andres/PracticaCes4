function Student(id, name, age, address, subjectList) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.address = address;
    this.subjectList = subjectList;

    this.say = function () {
        log.add("Estudiante: " + name);
    }
}

function StudentsFactory() {

    this.create = function (id, name, age, address, subjectList) {
        return new Student(id, name, age, address, subjectList);
    };
}

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();

function insertStudent() {
    var students = [];
    var studentsFactory = new StudentsFactory();

    students.push(studentsFactory.create(1, 'gabriel', 20, 'gabriel@hotmail.com', ['matematica', 'español']));
    students.push(studentsFactory.create(2, 'andres', 20, 'andres@hotmail.com', ['ingles', 'fisica']));
    students.push(studentsFactory.create(3, 'daniel', 20, 'daniel@hotmail.com', ['sociales', 'ciencias']));
    students.push(studentsFactory.create(4, 'juan', 20, 'juan@hotmail.com', ['informatica', 'etica']));

    for (var i = 0, len = students.length; i < len; i++) {
        students[i].say();
    }
    log.show();

    return students;
}

function getStudent(id) {
    var student = insertStudent().find(function (s) {
        return s.id === id;
    });
    return student;
}

function showId(id) {
    var student = getStudent(id);
    console.log('name: ' + student.name + ' address:' + student.address);
}
showId(1)

function orderBy(id) {
    var student = getStudent(id);
    student.subjectList.sort();
    for (var i = 0; i < student.subjectList.length; i++) {
        console.log(student.subjectList[i]);
    }
}
orderBy(1);