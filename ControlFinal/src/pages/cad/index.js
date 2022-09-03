
function reque() {

    let user_name = document.querySelector('#inp_nameUser').value
    let email = document.querySelector('#inp_email').value
    let senha = document.querySelector('#inp_password').value

    const data = new FormData();
    data.append('user_name', user_name);
    data.append('email', email);
    data.append('senha', senha);


    fetch('../../../visual/CAD_user.php', {
        method: 'POST',
        body: data,
    })

        .then((response) => response.text())
        .then((data) => {
            if(data == 'true'){
                setTimeout(window.location ='../login/login.html',300)
            }
            
        })
        .catch((error) => {
            console.log('Error', error)
        })
}