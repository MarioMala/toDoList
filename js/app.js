/** @format */
const body = document.querySelector('body');
const container = document.querySelector('.container');
const form = document.querySelector('.form-add');
const formBtn = document.querySelector('.btn-add');
const input = document.querySelector('.input-text');
const taskBtns = document.getElementsByClassName('btn');
const currentBtns = [...taskBtns];

// const changeTask = (currentBtns, tasks) =>  {
//     console.log(currentBtns)
//     currentBtns.forEach(btn => {
//    btn.addEventListener('click', function() {
//     console.log(this.className)
//     if (this.className === 'btn btn-confirm') {
//        tasks.forEach(task => {
//         task.classList.toggle('confirm')
//        })
//     } else if (this.className === 'btn btn-del') {
//          tasks.forEach(task => {
//             task.remove()
//        })
//     }
//    })
// })
// }

const addTask = () => {
	let textTask = input.value;
	let text = [...textTask];
	if (textTask !== '' && text.length > 5) {
		container.innerHTML += `
  <div class="task">
      <p class="task-text">${textTask}</p>
      <button class="btn btn-confirm"><img src="./img/check.png" alt="przypcisk zatwierdzania"></button>
      <button class="btn btn-edit"><img src="./img/edit.png" alt="przycisk edycji"></button>
      <button class="btn btn-del"><img src="./img/delete.png" alt="przycisk usuwania"></button>
    </div>
 `;
		const inputNew = document.querySelector('.input-new');
	} else {
		alert('Treść zadania musi zawierać minimum 5 znaków!');
		return;
	}
	input.value = '';
	const tasks = [...document.querySelectorAll('.task')];

	tasks.forEach(task => {
		let buttons = [...task.children];
		buttons.forEach(btn => {
			btn.addEventListener('click', e => {
				if (e.target.className === 'btn btn-confirm') {
					task.classList.toggle('confirm');
				} else if (e.target.className === 'btn btn-del') {
					task.remove();
				} else if (e.target.className === 'btn btn-edit') {
					let newText = textTask;
					body.innerHTML += `
              <div class="modal-edit">
                  <h2>Edytuj zadanie</h2>
                  <input type="text" class="input-newtext">
                  <div class="btn-box">
                     <button class="btn-confirm"><span>OK</span></button>
                     <button class="btn-cancel"><span>Anuluj</span></button>
                  </div>
               </div>
            `;
					const modalEdit = document.querySelector('.modal-edit');
					const inputNew = document.querySelector('.modal-edit .input-newtext');
					const btnOK = document.querySelector('.modal-edit .btn-confirm');
					const btnCancel = document.querySelector('.modal-edit .btn-cancel');
					inputNew.value = newText;
					btnOK.addEventListener('click', () => {
						 input.value = inputNew.value;
						modalEdit.remove();
					});
					btnCancel.addEventListener('click', () => {
						modalEdit.remove();
					});
				}
			});
		});
	});
};

formBtn.addEventListener('click', addTask);
