const task_additon_form=document.querySelector('#task-addition-form');
const body=document.querySelector('body');
const color_form=document.querySelector('#color-form');
const color_input=document.querySelector('#color');
const buttons=document.querySelectorAll('.mybtn');
const task_container=document.querySelector('.tasks');
const task_input=document.querySelector('#task');
const completed_tasks=document.querySelector('#complete-tasks');
const no_tasks_div=document.querySelector('.no-tasks');






//event listener for task form additon
task_additon_form.addEventListener('submit',addTask);


function addTask(e){

    // console.log(task_addition_form);

    if (!task_container.innerHTML){
        task_container.innerHTML+`
        
           
        
        `
    }

    else{
        no_tasks_div.style.display="none";
        task_container.innerHTML+=`
        <div class="task-item">
        <input type="checkbox" name="complete" id="complete">
            <h4 class="task-name">${task_input.value}</h4>
            <div class="details">
                <a href="#" class="detail-btn open"> &#9776;</a>
                <b><a href="#" class="close-btn white-text"> &times;</a></b>
            </div>
        </div>
        <div class="detail">
            <div class="details-container">
                <div class="notes">
                        <div class="notes">
                        <label for="notes">What to do</label>
                        <textarea name="notes" id="notes" cols="30" rows="10" placeholder="Enter your description"></textarea>
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
    }
    const task_items=document.querySelectorAll('.task-item');
    const detail_buttons=document.querySelectorAll('.detail-btn');
    const details_divs=document.querySelectorAll('.detail');
    const close_buttons=document.querySelectorAll('.close-btn');
    const complete=document.querySelectorAll('#complete');
    


  

    //for number of completed tasks to display
    for (let i = 0; i < task_items.length; i++) {
        const element = task_items[i];
        
        const completed_iem=complete[i];

        completed_iem.addEventListener('input',()=>{
            element.style.display="none";
            task_container.removeChild(element);
            task_container.removeChild(details_divs[i])
            // console.log(typeof parseInt(completed_tasks.innerHTML));


            completed_task_numbers=parseInt(completed_tasks.innerHTML);
            console.log(completed_task_numbers);
            
            completed_tasks.innerHTML=completed_task_numbers+=1;

            

            // if (task_items.length==0){
            //     alert("all tasks are complete.");    
            // }
            
          
            
            
        })
    }

    //for the detail containers to display
    for (let i = 0; i < detail_buttons.length; i++) {
        const open_buttton = detail_buttons[i];
        const close_buttton=close_buttons[i];

            //check the div of the exact  parent buttton
            const div = details_divs[i];

            open_buttton.addEventListener('click',function(){
            
                div.style.display="block";
                open_buttton.style.display="none";
                close_buttton.style.display="block";



                close_buttton.addEventListener('click',function(){
                    div.style.display="none";
                    close_buttton.style.display="none";
                    open_buttton.style.display="block";

                });
                
               
               
            });


            
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

const clear_button=document.querySelector('#clear-btn');

clear_button.addEventListener('click',resetCompleteTasks);
function resetCompleteTasks(){
    completed_tasks.innerHTML="0";
    console.log(clear_button);
}