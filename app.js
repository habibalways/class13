
// const box = document.querySelector('.box');
// const kara = document.createElement('a');
// kara.classList.add('btn');
// kara.classList.add('btn-primary');
// kara.innerHTML = 'sign-up';
// kara.id = 'sign';
// kara.setAttribute('href', '#');
// const jara = document.createElement('h3');
// jara.innerHTML = 'hello h3 saheb';


// const para = document.createElement('p');
// para.classList.add('display-1');
// para.innerHTML = 'habbgasdkjfkl sjklsdjvk afkjkj rj kjkgic jj erg fi8lkje vk j  djsji drs'
// para.style.color = 'red';
// para.style.backgroundColor = 'black';
// box.appendChild(para);
// box.append(kara);
// // box.removeChild(para);
// box.insertBefore(jara, para);
// console.log(kara, para);


const sign_up_form = document.getElementById('sign_up_form');
const msg = document.querySelector('.msg');
const button = document.querySelector('#button');
// button.addEventListener('mouseup', function () {
//     msg.innerHTML = 'apple done';
// });
button.onclick = () => {

    setInterval( function(){
        msg.innerHTML = `<p class="alert alert-danger">Apple orange<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></p>`;
    }, 5000);
    
}

sign_up_form.addEventListener('submit', function (e) {
    e.preventDefault();
    let name = sign_up_form.querySelector('input[placeholder="name"]');
    let email = sign_up_form.querySelector('input[placeholder="email"]');
    let location = sign_up_form.querySelector('select');
    let gender = sign_up_form.querySelector('input[type="radio"]:checked');
    let skill = sign_up_form.querySelectorAll('input[type="checkbox"]:checked');
    for (let i = 0; i < skill.length; i++) {
        console.log(skill[i].value);
        
    }
    if (name.value == '' || email.value == '' || location.value == '') {
        msg.innerHTML = validate('All fields are required');
    } else {
        msg.innerHTML = validate('data stable','success');;
    }
    setTimeout(() => {
        msg.innerHTML = '';
    }, 5000);
});

const clock = document.querySelector('.clock');


setInterval(() => {
    let date = new Date();


    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ampm = h > 12 ? 'PM' : 'AM';
    let hour = '';
    if (h == 0) {
        hour = 12;
    } else if (h > 0 || h < 12) {
        hour = h;
    } else {
        hour = h - 12;
    }
    
    
    clock.innerHTML = `${zerotumi(hour)}:${zerotumi(m) }:${zerotumi(s)} ${ampm}`
}, 1000);