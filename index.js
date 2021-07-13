
const form = document.forms['form-2'];
const formThree = document.forms['form-3'];

const btn = document.querySelector('.btn');
const res = document.querySelector('.output-part');

const btnTwo = document.querySelector('.btn-2');
const btnThree = document.querySelector('.btn-3');

const resThreeTeam = document.querySelector('.res-three');

let arr = [];
let resArr1 =[];
let resArr2 = [];
let resArr3 = [];

btnTwo.addEventListener('click',(e)=>{
    e.preventDefault();

    const twoTeam = document.querySelector('.two-team');
    const choose = document.querySelector('.choose');

    twoTeam.classList.toggle('yes-show');
    choose.classList.toggle('no-show');

});

btnThree.addEventListener('click',(e)=>{
    e.preventDefault();

    const threeTeam = document.querySelector('.three-team');
    const choose = document.querySelector('.choose');

    threeTeam.classList.toggle('yes-show');
    choose.classList.toggle('no-show');

});


function checkArr (arr) {
    let stop=0;

    arr.forEach((item)=>{
        if(item.length==0){
            stop++;
        }
    })

    if(stop!==0){
        alert('введіть всіх гравців!')
    }
}

function randomArr(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        
        let tmp = arr[i];
        let rnd = Math.floor(Math.random()*(i+1));

        arr[i] = arr[rnd];
        arr[rnd] = tmp;
    }
    return arr;
}

function divideArr(arr) {

    resArr1.push(arr[0], arr[1]);
    resArr2.push(arr[2], arr[3]);

}
function newDivideArr(arr){
    resArr1.push(arr[0]);
    resArr2.push(arr[1]);
    resArr3.push(arr[2]);
}

function sort(arr){

        checkArr(arr);

        randomArr(arr);

        divideArr(arr);

        return arr;
}
function newSort(arr){
    randomArr(arr);
    console.log(arr);
    newDivideArr(arr);
}

function renderTeam(arr, teamclass){
    const container = document.querySelector(teamclass);

    if(container.children.length){
		clearContainer(container);
	}

    let fragment = '';


    arr.forEach((item)=>{
        const el = renderTeamTemplate(item);
        fragment+=el;
    });

    container.insertAdjacentHTML('afterbegin', fragment)
}

function renderTeamTemplate(item) {
    return `
         <div class="pl">${item}</div>
    `
}

function clearContainer(container){
	// another method = container.innerHTML=''
	let child=container.lastElementChild;

	while(child){
		container.removeChild(child);
		child=container.lastElementChild;
	}
}


form.addEventListener('submit', (e)=>{
    
    e.preventDefault();

    let arr=[];
    resArr1 =[];
    resArr2 = [];

    const pl11 = document.getElementById("pl-1-1").value;
    const pl12 = document.getElementById("pl-1-2").value;
    const pl13 = document.getElementById("pl-1-3").value;
    const pl14 = document.getElementById("pl-1-4").value;

    const pl21 = document.getElementById("pl-2-1").value;
    const pl22 = document.getElementById("pl-2-2").value;
    const pl23 = document.getElementById("pl-2-3").value;
    const pl24 = document.getElementById("pl-2-4").value;

    const pl31 = document.getElementById("pl-3-1").value;
    const pl32 = document.getElementById("pl-3-2").value;
    const pl33 = document.getElementById("pl-3-3").value;
    const pl34 = document.getElementById("pl-3-4").value;

    arr.push([pl11, pl12, pl13, pl14]);
    arr.push([pl21, pl22, pl23, pl24]);
    arr.push([pl31, pl32, pl33, pl34]);

    for (let i = 0; i < arr.length; i++) {

        sort(arr[i]);
        
    }

    renderTeam(resArr1, '.first-team');
    renderTeam(resArr2, '.second-team');

    res.classList.toggle('show');
    form.classList.toggle('no-show');

})

formThree.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log('Погнали дальше!')

    resThreeTeam.classList.toggle('no-show');

    let arr=[];
    resArr1 =[];
    resArr2 = [];
    resArr3 = [];

    const pl11 = document.getElementById("3pl-1-1").value;
    const pl12 = document.getElementById("3pl-1-2").value;
    const pl13 = document.getElementById("3pl-1-3").value;

    const pl21 = document.getElementById("3pl-2-1").value;
    const pl22 = document.getElementById("3pl-2-2").value;
    const pl23 = document.getElementById("3pl-2-3").value;

    const pl31 = document.getElementById("3pl-3-1").value;
    const pl32 = document.getElementById("3pl-3-2").value;
    const pl33 = document.getElementById("3pl-3-3").value;

    const pl41 = document.getElementById("3pl-4-1").value;
    const pl42 = document.getElementById("3pl-4-2").value;
    const pl43 = document.getElementById("3pl-4-3").value;

    const pl51 = document.getElementById("3pl-5-1").value;
    const pl52 = document.getElementById("3pl-5-2").value;
    const pl53 = document.getElementById("3pl-5-3").value;

    arr.push([pl11, pl12, pl13]);
    arr.push([pl21, pl22, pl23]);
    arr.push([pl31, pl32, pl33]);
    arr.push([pl41, pl42, pl43]);
    arr.push([pl51, pl52, pl53]);

    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        newSort(arr[i]);    
    }

    renderTeam(resArr1, '.first-team');
    renderTeam(resArr2, '.second-team');
    renderTeam(resArr3, '.res-three-team');

    res.classList.toggle('show');
    formThree.classList.toggle('no-show');
    

})





