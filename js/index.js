const task_additon_form=document.querySelector('#task-addition-form');
const body=document.querySelector('body');
const color_form=document.querySelector('#color-form');
const color_input=document.querySelector('#color');
const buttons=document.querySelectorAll('.mybtn');
const task_container=document.querySelector('.tasks');
const task_input=document.querySelector('#task');


window.onload=function(){
    if (body.style.backgroundColor=="#FFFFFF"){

        for (let i = 0; i < buttons.length; i++) {
            const element = array[i];
    
            element.classList.remove('mybtn');
            
        }
        
    }
}


task_additon_form.addEventListener('submit',addTask);

function addTask(e){

    // console.log(task_addition_form);

    task_container.innerHTML+=`
    <div class="task-item">
        <h4 class="task-name">${task_input.value}</h4>
        <div class="details">
            <a href="#" class="detail-btn open"> &#9776;</a>
           
        </div>
    </div>
    <div class="detail">
        <div class="details-container">
            <div class="notes">
                    <div class="notes">
                    <label for="notes">What to do</label>
                    <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
                    </div>
            </div>
            <div class="others">
                    <div class="priority">
                        <label for="priority">Priority</label>
                        <select name="priority" id="priority">
                            <option value="none">None</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                    <div class="time">
                        <label for="time">Time</label>
                        <input type="date" name="time" id="time">
                    </div>
                    <div class="del">
                    <a href="#" id="del-btn" class="del-btn"> Delete</a>
                    <a href="#" id="del-btn" class="succ-btn">Completed</a>
                    </div>
                </div>
        </div>
    </div>
    
    
    `
    const detail_buttons=document.querySelectorAll('.task-item');
    const details_divs=document.querySelectorAll('.detail');
    const delete_button=document.querySelectorAll('.del-btn');
    const complete_button=document.querySelectorAll('.succ-btn');

    for (let i = 0; i < detail_buttons.length; i++) {
        const element = detail_buttons[i];

            //check the div of the exact  parent element
            const div = details_divs[i];

            element.addEventListener('click',function(){
               if (div.style.display=="block"){
                  div.style.display="none";
                
               }
               else{
                div.style.display="block";
               
               
               }
            })

            
    }

   

    e.preventDefault();
}

color_form.addEventListener('submit',changeBodyBckground);
function changeBodyBckground(e){
    console.log(color_input.value);

    body.style.backgroundColor=color_input.value;
    body.style.color="white";
    
    e.preventDefault();

}


