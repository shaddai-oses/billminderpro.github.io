const div = document.querySelector('#notification');

export const createNotification = (isError, message) => {
    if (isError) {
        div.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 flex justify-center gap-4">
        <div class="flex flex-row items-center bg-red-500 backdrop-blur-sm bg-opacity-60 bg-shadow-3xl p-2  w-5/6 md:w-1/3 lg:w-5/12 rounded-xl relative ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white relative">
                <path  fill-rule="evenodd" d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
              </svg>
              <p class="font-bold text-white text-xs absolute top-[0.60rem] left-[2.6rem]">Error</p>  
            <p class=" font-semibold  text-sm text-white relative top-2 p-2 w-4/5">${message}</p>
        </div>
    </div>
    `;
    }else{
        div.innerHTML = `
        <div class="max-w-7xl mx-auto px-4 flex justify-center gap-4">
            <div class="flex flex-row items-center bg-green-500 backdrop-blur-sm bg-opacity-60 bg-shadow-3xl p-2  w-5/6 md:w-1/3 lg:w-5/12 rounded-xl relative ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 text-white relative">
                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                  </svg>                 
                  <p class="font-bold text-white text-xs absolute top-[0.60rem] left-[2.6rem]">Succesful</p>  
                <p class=" font-semibold  text-sm text-white relative top-2 p-2 w-4/5">${message}</p>
            </div>
        </div>
        `;
    }
};

export const hideNotification = () => {
    div.innerHTML = '';
};

