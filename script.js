const cards = document.querySelectorAll('.card');
const lists = document.querySelectorAll('.list__content');
const resetButton = document.getElementById('resetButton');

cards.forEach(card => {
  card.addEventListener('dragstart', dragstart);
  card.addEventListener('dragend', dragend);
});

function dragstart() {
  lists.forEach(list => list.classList.add('highlight'));
  this.classList.add('dragging');
}

function dragend() {
  lists.forEach(list => list.classList.remove('highlight'));
  this.classList.remove('dragging');
}

lists.forEach(list => {
  list.addEventListener('dragover', dragover);
  list.addEventListener('dragleave', dragleave);
  list.addEventListener('drop', drop);
});

function dragover(event) {
  event.preventDefault();
  this.classList.add('over');
}

function dragleave() {
  this.classList.remove('over');
}

function drop() {
  this.classList.remove('over');
  const cardBeingDragged = document.querySelector('.dragging');
  this.appendChild(cardBeingDragged);
  displaySuccessMessage();
}

function displaySuccessMessage() {
  // Add your implementation here
  alert('Item dropped successfully!');
}

resetButton.addEventListener('click', resetContainers);

function resetContainers() {
  lists[0].appendChild(cards[0]);
  lists[0].appendChild(cards[1]);
  lists[1].innerHTML = '';
}
