const nameP = document.querySelector("#name-user");

(async ( ) => {    
    const {data} = await axios.get('/api/users');
    nameP.innerHTML =`${data.name}`;
  })();