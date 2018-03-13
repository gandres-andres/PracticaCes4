(function loadStatus() {
    const mysite = 'status-ces4';
    const url = `https://${mysite}.firebaseio.com/status.json`;
    getData(url);
})();


function getData(url) {
    const tbody = getElementById('status');
    tbody.innerHTML = '';
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            let status = data;
            return status.map(function (statu) {
                let tr = createNode('tr'),
                    tdStatus = createNode('td'),
                    tdMessage = createNode('td'),
                    tdLink = createNode('td');
                aLink = createNode('a');
                tdStatus.innerHTML = `${statu.Status}`;
                tdMessage.innerHTML = `${statu.Message}`;
                aLink.innerText = "Show";
                aLink.setAttribute('href', 'pushStatus?Status='+statu.Status+'&Message='+statu.Message);
                append(tr, tdStatus);
                append(tr, tdMessage);
                append(tdLink, aLink);
                append(tr, tdLink);
                append(tbody, tr);
            })
        })
        .catch(function (error) {
            console.log(JSON.stringify(error));
        });
}

function getElementById(id) {
    return document.getElementById(id);
}

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}