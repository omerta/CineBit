const user = localStorage.getItem('user');
console.log(user)
if(user !== null){
    document.getElementById('user').innerHTML = `Hola ${user}`;
}
const imgUser = document.getElementById('imgUser')

imgUser.addEventListener('click', ()=>{
    localStorage.clear();
    alert ('Vuelve pronto')
    window.location = "index.html"
})

 const btn = document.getElementById('login');
            if (btn !== null) {
                btn.addEventListener('click', () => {
                    swal('Ingresa tu nombre', {
                        content: 'input',
                    }).then((value) => {
                        swal(`Bienvenido ${value} a CineBit`);
                        document.getElementById('user').innerHTML = `Hola ${value}`;
                        localStorage.setItem('user', value)
                    });
                });
            };
