
export function formBody(data) {
document.body.innerHTML = `<body><div id="form-body"><nav class="col-12 navbar navbar-expand-lg navbar-light bg-light"><a class="navbar-brand" href="./index.html">Meeting room</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button></nav><div class="col-12"><form id='form'><div class="form-group row"><label for="inputText" class="col-sm-2 col-form-label">Action name</label><div class="col-sm-10"><input type="text" class="form-control" id="inputText" placeholder="New action"></div></div><div class="form-group row"><label for="daySelect" class="col-sm-2 col-form-label">Day</label><div class="col-sm-10"><select class="form-control" id='daySelect'><option selected value="">DAY</option><option value="monday">monday</option><option value="tuesday">tuesday</option><option value="wednesday">wednesday</option><option value="thursday">thursday</option><option value="friday">friday</option><option value="saturday">saturday</option><option value="sunday">sunday</option></select></div></div><div class="form-group row"><label for="timeSelect" class="col-sm-2 col-form-label">Time</label><div class="col-sm-10"><select class="form-control" id='timeSelect'><option selected value="">TIME</option><option value="10">10:00</option><option value="11">11:00</option><option value="12">12:00</option><option value="13">13:00</option><option value="14">14:00</option><option value="15">15:00</option><option value="16">16:00</option><option value="17">17:00</option><option value="18">18:00</option></select></div></div><div class="form-group row"><label for="participantsSelect" class="col-sm-2 col-form-label">Participants</label><div class="col-sm-10"><select class="form-control" id='participantsSelect'><option value="all">All members</option><option value="Eugen">Eugen</option><option value="Olga">Olga</option><option value="Taisija">Taisija</option></select></div></div></form><button type="submit" id='add' style='margin-right: 20px' class="btn btn-primary">Create</button><button id="cancel" class="btn btn-primary">Cancel</button></div></div></body>`

document.getElementById('add').onclick = () => {
    let text = document.getElementById('inputText').value;
    let day = document.getElementById('daySelect').value;
    let time = document.getElementById('timeSelect').value;
    let members = document.getElementById('participantsSelect').value;
    


    let temp = {}
    temp.name = text
    temp.day = day
    temp.time = time
    temp.members = members
    temp.cell = (temp.day.substr(0, 3) + temp.time.substr(0, 2))


    let isTrue = true;
    for (let i = 0; i < data.length; i++) {
        if (data[i].cell == temp.cell) {
            isTrue = false;
            break;
        }
    };

    if (data.length == 0) {
        data.push(temp);
        localStorage.setItem('action', JSON.stringify(data));
        location.reload()
    }
    else if (isTrue) {
        data.push(temp);
        localStorage.setItem('action', JSON.stringify(data));
        location.reload()
    }
    else {
        document.body.insertAdjacentHTML('afterbegin', '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>This time</strong> is busy. Try to postpone the event<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
        document.getElementById('inputText').value = "";
        document.getElementById('daySelect').value = "";
        document.getElementById('timeSelect').value = "";
        document.getElementById('participantsSelect').value = "all";
    }
}

document.getElementById('cancel').onclick = () => {
    document.getElementById('inputText').value = "";
    document.getElementById('daySelect').value = "";
    document.getElementById('timeSelect').value = "";
    document.getElementById('participantsSelect').value = "all";
}
}