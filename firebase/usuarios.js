class usuarios {
  constructor(id = 0, name = '', age = '', phone = '', gender = '') {
    this.id = id;
    this.name = name;
    this.age = age;
    this.phone = phone;
    this.gender = gender;
  }
}
var indexId = null;

function loadUsers() {
  const mysite = 'usuarios-ces4';
  const url = `https://${mysite}.firebaseio.com/usuarios.json`;
  getData(url);
}

function getData(url) {
  const tbody = getElementById('users');
  tbody.innerHTML = '';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      let usuarios = data;
      return usuarios.map(function (usuario, index) {
        let tr = createNode('tr'),
          tdId = createNode('td'),
          tdName = createNode('td'),
          tdAge = createNode('td'),
          tdPhone = createNode('td'),
          tdGender = createNode('td'),
          tdAction = createNode('td');
        aAction = createNode('button');
        tdId.innerHTML = `${usuario.id}`;
        tdName.innerHTML = `${usuario.name}`;
        tdAge.innerHTML = `${usuario.age}`;
        tdPhone.innerHTML = `${usuario.phone}`;
        tdGender.innerHTML = `${usuario.gender}`;
        aAction.innerText = "Edit";
        aAction.addEventListener('click', () => setUser(usuario, index));
        append(tr, tdId);
        append(tr, tdName);
        append(tr, tdAge);
        append(tr, tdPhone);
        append(tr, tdGender);
        append(tdAction, aAction);
        append(tr, tdAction);
        append(tbody, tr);
      })
    })
    .catch(function (error) {
      console.log(JSON.stringify(error));
    });
}

function setUser(usuario, index) {
  none('table');
  block('formUser');
  indexId = index;
  setElementById('id', usuario.id);
  setElementById('name', usuario.name);
  setElementById('age', usuario.age);
  setElementById('phone', usuario.phone);
  setElementById('gender', usuario.gender);
}

function editData() {
  const mysite = 'usuarios-ces4';
  const url = `https://${mysite}.firebaseio.com/usuarios/${indexId}.json`;
  setData(url);
}

function setData(url) {
  let data = {
    id: getElementById('id').value,
    name: getElementById('name').value,
    age: getElementById('age').value,
    phone: getElementById('phone').value,
    gender: getElementById('gender').value
  }

  let fetchData = {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: new Headers()
  }

  fetch(url, fetchData).then(function (response) {
    console.log(response);
    none('formUser');
    block('table');
    loadUsers();
    debugger
  })
}

function getElementById(id) {
  return document.getElementById(id);
}

function setElementById(id, value) {
  return document.getElementById(id).value = value;
}

function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function block(id) {
  document.getElementById(id).style.display = 'block';
}

function none(id) {
  document.getElementById(id).style.display = 'none';
}