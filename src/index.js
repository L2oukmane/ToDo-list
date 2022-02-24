import _ from 'lodash';
import './style.css';

const lists = [
  {
    description:'Clean the room',
    completed : false,
    index: 1
  },
  {
    description:'Clean the room',
    completed : false,
    index: 2
  },
  {
    description:'Clean the room',
    completed : false,
    index: 3
  }
];

function createList(lists) {

  const container = document.querySelector('.toDo-container');
  lists.froEach((list) => {
  container.innerHTML =`<div class="toDo">
  <div class="heading">
	<h1>Today's To Do</h1>
	<i class="material-icons loop">loop</i>
</div>
<hr class="breakline">
	<ul class="listForm">
		<li class="input-container">
			<input class="input" type ="input" placeholder="Add to your list...">
			<i class="material-icons Enter">keyboard_return</i>
		</li>
		<hr class="breakline">
		<li class="items"> 
    	<div class="item">
				<i class="fa-regular fa-square"></i>
		      ${list.description}
				<i class="material-icons threePoints">more_horiz</i>
			</div>
		</li>
		<hr class="breakline">
	</ul>
	<div class="clear-btn">Clear all completed</div>
  </div>`
}
  )};
 
  document.body.appendChild(createList());