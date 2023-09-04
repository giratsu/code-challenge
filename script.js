document.addEventListener("DOMContentLoaded", ev=>{
    let form = document.getElementById("form");
    form.addEventListener("submit", async ev=>{
        ev.preventDefault();
        SubmitForm();
    })
})

async function SubmitForm()
{
    const url = "https://jsonplaceholder.typicode.com/users";
    const inputNameValue = document.getElementById("name-input").value;
    const surnameInputValue = document.getElementById("surname-input").value;
    const dateInputValue = document.getElementById("date-input").value;

    const data = {
        name: inputNameValue,
        surname: surnameInputValue,
        date: dateInputValue
    };
    
    const opciones = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Tipo de contenido JSON
        },
        body: JSON.stringify(data) // Convierte los datos a formato JSON
    };

    const response = await fetch(url, opciones);
    const resData = await response.json();
    console.log(resData);
    // .then(response => {
    //     if(response.ok)
    //     {
    //         return response;
    //     }
    // })
    // .then(data => {
    //     console.log('Respuesta del servidor:', data);
    // })
}