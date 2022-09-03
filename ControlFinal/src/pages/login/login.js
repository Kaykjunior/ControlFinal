async function login(){
 let email = document.querySelector('#inp_email').value
 let senha = document.querySelector('#inp_password').value
 
const data = new FormData();
data.append('email', email);
data.append('senha', senha);

/*
  const data = {
    id_user: `${id_user}`,
    user_name: `${user_name}`,
    email: `${email}`,
    senha: `${senha}`
}
*/

try{
  const url = '../../../visual/login.php';
  let fetch_login = await fetch(url,{
       method: 'POST',
       body: data,
   })
   let response = await fetch_login.json()
 console.log(response)
}
catch{
  window.alert('Usuário não cadastrado')
}
}


