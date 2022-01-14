const milestonesData = JSON.parse(data).data;

// load course milestones data
function loadMilestones() {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData.map(function(milestone){
      return `<div class="milestone border-b" id="${milestone._id}">
      <div class="flex">
        <div class="checkbox"><input type="checkbox" onclick="markmileStone(this,${milestone._id})" /></div>
        <div onclick="openmile(this,${milestone._id})">
          <p>
            ${milestone.name}
            <span><i class="fas fa-chevron-down"></i></span>
          </p>
        </div>
      </div>
      <div class="hidden_panel">
        ${milestone.modules.map(function(module){
          return`<div class="module border-b">
          <p>${module.name}</p>
        </div>`
        }).join("")}
      </div>
    </div>`
  })
    .join('')}`
}
loadMilestones()


function openmile(milestoneElement,id){

  const Currentpanel=milestoneElement.parentNode.nextElementSibling;

  const showpanel=document.querySelector('.show')
//when click the section then it will be blod 
  const active=document.querySelector('.active')

  if(active && !milestoneElement.classList.contains('active')){
        active.classList.remove('active')
  }

  milestoneElement.classList.toggle('active')
//hide panel active with toggle
  if(!Currentpanel.classList.contains('show') && showpanel)
    showpanel.classList.remove("show")
  Currentpanel.classList.toggle('show')

  showMilestone(id);
}


function showMilestone(id){
  const milestoneImage=document.querySelector('.milestoneImage')

  const milename=document.querySelector('.title')

  const miletitle=document.querySelector('.details')

  milestoneImage.style.opacity="0"
  milestoneImage.src=milestonesData[id].image;

  milename.innerText=milestonesData[id].name;

  miletitle.innerText=milestonesData[id].description;
}
const milestoneImage=document.querySelector('.milestoneImage')
milestoneImage.onload=function(){
  this.style.opacity="1"
}

function markmileStone(checkbox,id){
  const donelist=document.querySelector('.doneList')
  const milestoneList=document.querySelector('.milestones')
  const doneitem=document.getElementById(id)

  if(checkbox.checked){
    milestoneList.removeChild(doneitem)
    donelist.appendChild(doneitem)
  }else{
  milestoneList.appendChild(doneitem)
  donelist.removeChild(doneitem)
  }
}



