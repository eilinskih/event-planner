import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {formBody} from './formBody'
window.onload = () => {
    let data = [];
    if (localStorage.getItem('action') != undefined) {
        data = JSON.parse(localStorage.getItem('action'))
    };

    document.getElementById('createActionBtn').onclick = () => formBody(data);
            let btnDelete;
            for (let obj = 0; obj < data.length; obj++) {

                let dataContainer = document.createElement('div');
                btnDelete = document.createElement('button');

                dataContainer.textContent = data[obj].name;

                document.getElementById(`${data[obj].cell}`).style.backgroundColor = 'rgba(0, 128, 0, 0.1)';
                document.getElementById(`${data[obj].cell}`).appendChild(dataContainer);
                dataContainer.appendChild(btnDelete);
                dataContainer.draggable = 'true';
                btnDelete.innerHTML = '<span aria-hidden="true">&times;</span>';
                btnDelete.classList.add('close', 'btn', 'btn-primary');
                btnDelete.dataset.toggle = 'modal';
                btnDelete.dataset.target = '#deleteModal';
            }

            document.getElementById('all').onclick = () => {
                location.reload();
            }

            document.getElementById('eugen').onclick = () => {
                let eugenData = [];
                for (let obj = 0; obj < data.length; obj++) {
                    if (data[obj].members == 'Eugen') {
                        eugenData.push(data[obj])
                    }
                }
                let table = document.getElementById('tableDays');
                let td = table.getElementsByClassName('cell');
                for (let i = 0; i < td.length; i++) {
                    table.getElementsByClassName('cell')[i].innerHTML = '';
                    table.getElementsByClassName('cell')[i].style.backgroundColor = ''
                }
                for (let obj = 0; obj < eugenData.length; obj++) {
                    let dataContainer = document.createElement('div');

                    dataContainer.textContent = eugenData[obj].name;

                    document.getElementById(`${eugenData[obj].cell}`).style.backgroundColor = 'rgba(0, 128, 0, 0.1)';
                    document.getElementById(`${eugenData[obj].cell}`).appendChild(dataContainer);
                    dataContainer.draggable = 'true';
                }


                let div = document.getElementsByTagName('div');
                for (let i of div) {
                    i.addEventListener('dragstart', dragStart);
                    i.addEventListener('dragend', dragEnd);
                }

                for (let j of cells) {
                    j.addEventListener('dragover', dragOver);
                    j.addEventListener('dragenter', dragEnter);
                    j.addEventListener('dragleave', dragLeave);
                    j.addEventListener('drop', drop);
                }


            }

            document.getElementById('olga').onclick = () => {
                let olgaData = [];
                for (let obj = 0; obj < data.length; obj++) {
                    if (data[obj].members == 'Olga') {
                        olgaData.push(data[obj])
                    }
                }
                let table = document.getElementById('tableDays');
                let td = table.getElementsByClassName('cell');
                for (let i = 0; i < td.length; i++) {
                    table.getElementsByClassName('cell')[i].innerHTML = '';
                    table.getElementsByClassName('cell')[i].style.backgroundColor = ''
                }

                for (let obj = 0; obj < olgaData.length; obj++) {
                    let dataContainer = document.createElement('div');

                    dataContainer.textContent = olgaData[obj].name;

                    document.getElementById(`${olgaData[obj].cell}`).style.backgroundColor = 'rgba(0, 128, 0, 0.1)';
                    document.getElementById(`${olgaData[obj].cell}`).appendChild(dataContainer);
                    dataContainer.draggable = 'true';

                }


                let div = document.getElementsByTagName('div');
                for (let i of div) {
                    i.addEventListener('dragstart', dragStart);
                    i.addEventListener('dragend', dragEnd);
                }

                for (let j of cells) {
                    j.addEventListener('dragover', dragOver);
                    j.addEventListener('dragenter', dragEnter);
                    j.addEventListener('dragleave', dragLeave);
                    j.addEventListener('drop', drop);
                }
            }

            document.getElementById('taisija').onclick = () => {
                let taisijaData = [];
                for (let obj = 0; obj < data.length; obj++) {
                    if (data[obj].members == 'Taisija') {
                        taisijaData.push(data[obj])
                    }
                }
                let table = document.getElementById('tableDays');
                let td = table.getElementsByClassName('cell');
                for (let i = 0; i < td.length; i++) {
                    table.getElementsByClassName('cell')[i].innerHTML = '';
                    table.getElementsByClassName('cell')[i].style.backgroundColor = ''
                }

                for (let obj = 0; obj < taisijaData.length; obj++) {
                    let dataContainer = document.createElement('div');

                    dataContainer.textContent = taisijaData[obj].name;

                    document.getElementById(`${taisijaData[obj].cell}`).style.backgroundColor = 'rgba(0, 128, 0, 0.1)';
                    document.getElementById(`${taisijaData[obj].cell}`).appendChild(dataContainer);
                    dataContainer.draggable = 'true';
                }


                let div = document.getElementsByTagName('div');
                for (let i of div) {
                    i.addEventListener('dragstart', dragStart);
                    i.addEventListener('dragend', dragEnd);
                }

                for (let j of cells) {
                    j.addEventListener('dragover', dragOver);
                    j.addEventListener('dragenter', dragEnter);
                    j.addEventListener('dragleave', dragLeave);
                    j.addEventListener('drop', drop);
                }
            }

            if (data.length !== 0) {
            btnDelete.onclick = (e) => {
                e.preventDefault();
                for (let obj = 0; obj < data.length; obj++) {
                    if (data[obj].cell == e.currentTarget.parentNode.parentNode.id) {
                        function deleteAction() {
                            data.splice([obj], 1)
                            localStorage.removeItem('action');
                            localStorage.setItem('action', JSON.stringify(data));
                            location.reload();
                        }
                        document.getElementById('confirmDelete').onclick = () => deleteAction();
                    }
                }
            };
        }
            // drag `n drop function

            let div = document.getElementsByTagName('div');
            let cells = document.getElementsByClassName('cell');
            let dragItem = null;
            for (let i of div) {
                i.addEventListener('dragstart', dragStart);
                i.addEventListener('dragend', dragEnd);
            }
            function dragStart(e) {
                e.stopPropagation();
                dragItem = this;
                setTimeout(() => this.style.display = "none", 0);
                this.parentNode.style.backgroundColor = ""
            }
            function dragEnd(e) {

                setTimeout(() => this.style.display = "block", 0);
                dragItem = null;
            }

            for (let j of cells) {
                j.addEventListener('dragover', dragOver);
                j.addEventListener('dragenter', dragEnter);
                j.addEventListener('dragleave', dragLeave);
                j.addEventListener('drop', drop);
            }

            function drop(e) {
                this.append(dragItem);
                this.style.backgroundColor = 'rgba(0, 128, 0, 0.1)'
            }
            function dragOver(e) {
                e.preventDefault();

            }
            function dragEnter(e) {
                e.preventDefault();

            }
            function dragLeave() {}

            
            // document.getElementById('add').onclick = () => {
            //     let text = document.getElementById('inputText').value;
            //     let day = document.getElementById('daySelect').value;
            //     let time = document.getElementById('timeSelect').value;
            //     let members = document.getElementById('participantsSelect').value;
                


            //     let temp = {}
            //     temp.name = text
            //     temp.day = day
            //     temp.time = time
            //     temp.members = members
            //     temp.cell = (temp.day.substr(0, 3) + temp.time.substr(0, 2))


            //     let isTrue = true;
            //     for (let i = 0; i < data.length; i++) {
            //         if (data[i].cell == temp.cell) {
            //             isTrue = false;
            //             break;
            //         }
            //     };

            //     if (data.length == 0) {
            //         data.push(temp);
            //         localStorage.setItem('action', JSON.stringify(data));
            //         location();
            //     }
            //     else if (isTrue) {
            //         data.push(temp);
            //         localStorage.setItem('action', JSON.stringify(data));
            //         location();
            //     }
            //     else {
            //         document.body.insertAdjacentHTML('afterbegin', '<div class="alert alert-warning alert-dismissible fade show" role="alert"><strong>This time</strong> is busy. Try to postpone the event<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>')
            //         document.getElementById('inputText').value = "";
            //         document.getElementById('daySelect').value = "";
            //         document.getElementById('timeSelect').value = "";
            //         document.getElementById('participantsSelect').value = "all";
            //     }
            // }

            // document.getElementById('cancel').onclick = () => {
            //     document.getElementById('inputText').value = "";
            //     document.getElementById('daySelect').value = "";
            //     document.getElementById('timeSelect').value = "";
            //     document.getElementById('participantsSelect').value = "all";
            // }
        };

