const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const errorText = document.querySelector('#error-text');

form.addEventListener('submit', async e => {
    e.preventDefault();
    try {
        const user = {
            email : emailInput.value,
            password : passwordInput.value
        };
        // console.log(user);
        await axios.post('/api/login/', user);
        window.location.pathname = `/billminderpro-home/`;
    } catch (error) {
        console.log(error);
        errorText.innerHTML = error.response.data.error
    }
});



// const emailInput = document.querySelector('#email-input');
// const passwordInput = document.querySelector('#password-input');
// const form = document.querySelector('#form');
// const errorText = document.querySelector('#error-text');

// form.addEventListener('submit', async e => {
//     e.preventDefault();

//     try {
//         const businessUser = {
//             businessemail: emailInput.value,
//             password: passwordInput.value
//         };
//         const user = {
//             email: emailInput.value,
//             password: passwordInput.value
//         };

//         // Make separate API calls for businessUser and user login
//         const businessResponse = await axios.post('/api/login/', businessUser);
//         const userResponse = await axios.post('/api/login/', user);

//         // Assuming the response contains some data indicating successful login
//         // Adjust the condition based on your API response
//         if (businessResponse.data.success) {
//             window.location.pathname = `/billminderpro-business-home/`;
//         } else if (userResponse.data.success) {
//             window.location.pathname = `/billminderpro-home/`;
//         }

//     } catch (error) {
//         console.log(error);
//         errorText.innerHTML = error.response.data.error;
//     }
// });

