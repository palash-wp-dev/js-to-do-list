function addList(){
    let inputValue = document.getElementById('inputList');
    let inputText = inputValue.value.trim();

    if(inputText === '') {
        alert("Add a list");
        return;
    }

    let li = document.createElement('li');
    li.textContent = inputText;

    let dlt = document.createElement('span');
    dlt.textContent = ' x';
    li.appendChild(dlt);

    document.getElementById('showList').appendChild(li);

    inputValue.value = '';

    dlt.addEventListener('click',function(){
        li.remove();
    });
}