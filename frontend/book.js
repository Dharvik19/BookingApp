const name = document.getElementById('input-name');
const email = document.getElementById('input-email');
const phone = document.getElementById('input-phone');

const btn = document.getElementById('btnid');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    const obj = {
        name : name.value,
        email : email.value,
        phone : phone.value,
    }

    console.log(obj);
    axios.post("http://localhost:3000/details", obj)
    .then((response=>{
        showUserOnScreen(response.data.data);
        console.log(response);
    }))
    .catch(err=>{
        console.log(err);
    })
    name.value = '';
    email.value = '';
    phone.value = '';
})

function showUserOnScreen(user){
    const parentNode = document.getElementById('userlist');

    const createNewUserHtml = `<li id=${user.id}>${user.name}-${user.email}-${user.phone}
                        <button onCLick=deleteUser('${user.id}')>Delete</button>
            </li>`

            parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
}

window.addEventListener('DOMContentLoaded', (e)=>{
    e.preventDefault();

    axios.get('http://localhost:3000/userInfo')
    .then((response)=>{
        console.log(response);
        for(let i =0;i<response.data.response.length;i++){
            let name = response.data.response[i].name;
            let email = response.data.response[i].email;
            let phone = response.data.response[i].phone;
            let id = response.data.response[i].id;

            const parentNode = document.getElementById('userlist');
            const createNewUserHtml = `<li id=${id}> ${name}-${email}-${phone}
            <button onCLick=deleteUser('${id}')>Delete</button>
            </li>`

            parentNode.innerHTML = parentNode.innerHTML + createNewUserHtml;
        }
    }).catch(err=>{
        console.log(err);
    })
})

function deleteUser(userid){
    axios.delete(`http://localhost:3000/del/${userid}`)
    .then(response =>{
        removeElementFromScreen(userid);
    }).catch(err=>{
        console.log(err);
    })
}

function removeElementFromScreen(userid){
    const parentNode = document.getElementById('userlist');
    const elememt = document.getElementById(userid);
    parentNode.removeChild(elememt);
}

