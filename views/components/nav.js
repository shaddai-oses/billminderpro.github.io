const navbar = document.querySelector('#navbar');

const createHomeNav = ( ) => {
    navbar.innerHTML= `
    <div class="h-20 px-4 flex items-center justify-evenly">         
    <a href="/login/" class="text-white hover:underline">Login</a>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-white">BILLMINDERPRO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>      
    </div>        
    <a href="/signup/" class="text-white hover:underline">Signup</a>
</div>
    `
};
createHomeNav();

const createsignupNav = ( ) => {
    navbar.innerHTML= `
    <div class="h-20 px-4 flex items-center justify-evenly">         
    <a href="/" class="text-white hover:underline">Home</a>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-white">BILLMINDERPRO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>      
    </div>        
    <a href="/login/" class="text-white hover:underline">Login</a>
</div>
    `
};
createsignupNav();

const createLoginNav = ( ) => {
    navbar.innerHTML= `
    <div class="h-20 px-4 flex items-center justify-evenly">         
    <a href="/" class="text-white hover:underline">Home</a>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-white">BILLMINDERPRO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>      
    </div>        
    <a href="/signup/" class="text-white hover:underline">Signup</a>
</div>
    `
};
createLoginNav();

const createsignupBusinessNav = ( ) => {
    navbar.innerHTML= `
    <div class="h-20 px-4 flex items-center justify-evenly">         
    <a href="/" class="text-white hover:underline">Home</a>
    <div class="flex flex-col items-center justify-center">
        <h1 class="text-2xl font-bold text-white">BILLMINDERPRO</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
          </svg>      
    </div>        
    <a href="/login/" class="text-white hover:underline">Login</a>
</div>
    `
};
createsignupBusinessNav();

//nav de la pagina 

const createBillminderproHomeNav = ( ) => {
    navbar.innerHTML= `
    <div id="new-nav" class=" h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
      </svg>    
      </a>
        <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>      
    </a>
      <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/sell/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
      </svg> 
    </a>
      <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/users-page/"> 
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>            
    </a>
      <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
    </div>
</div>
`
};
createBillminderproHomeNav();

const newNav = document.querySelector('#new-nav');

const createProfileNav = ( ) => {
    navbar.innerHTML= `
    <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/billminderpro-home/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
        <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
     </svg>
    </a>
        <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      </svg>  
    </a>
      <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/sell/">  
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
      </svg> 
      </a>
      <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
    </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/users-page/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
        <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
        <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
      </svg>      
    </a>
      <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
    </div>
</div>
`
};
createProfileNav();

const createInventaryNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>      
    </a>    
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/sell/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg>
    </a>            
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>      
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createInventaryNav();

const createRegisterProductNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>       
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>      
    </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/sell/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg>
  </a>
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>    
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createRegisterProductNav();

const createProductNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
</a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>       
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>    
    </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/sell/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg> 
</a>
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createProductNav();

const createUserNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>
    </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/sell/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg> 
    </a>
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

`
};
createUserNav();

const createSellNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>  
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg>    
  </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>     
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createSellNav();

const createRegisterClientNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg> 
    </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">  
  <a href="/sell/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg>
    </a>
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createRegisterClientNav();


const createSellInfoNav = ( ) => {
  navbar.innerHTML= `
  <div id="new-nav" class="h-16 px-4 flex gap-4 items-center justify-around  max-w-7xl relative">         
  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/billminderpro-home/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
   </svg>  
   </a>
      <a href="/billminderpro-home/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Home</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/profile/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
    </svg>
    </a>
      <a href="/profile/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Profile</a>
  </div>

    <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
    <a href="/inventary/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M2.25 4.5A.75.75 0 013 3.75h14.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75zm14.47 3.97a.75.75 0 011.06 0l3.75 3.75a.75.75 0 11-1.06 1.06L18 10.81V21a.75.75 0 01-1.5 0V10.81l-2.47 2.47a.75.75 0 11-1.06-1.06l3.75-3.75zM2.25 9A.75.75 0 013 8.25h9.75a.75.75 0 010 1.5H3A.75.75 0 012.25 9zm0 4.5a.75.75 0 01.75-.75h5.25a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
    </svg> 
    </a>
    <a href="/inventary/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Inventary</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">  
  <a href="/sell/">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
      <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
    </svg>
    </a>
    <a href="/sell/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Sell</a>
  </div>

  <div class="group flex flex-col gap-1 justify-center items-center hover:border-t-2 lg:hover:border-b-2 hover:border-blue-950 transition-all ease-in-out cursor-pointer">
  <a href="/users-page/">  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-white group-hover:text-blue-950 transition-all ease-in-out">
      <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clip-rule="evenodd" />
      <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
    </svg>
    </a>
    <a href="/users-page/" class="text-white group-hover:text-blue-950 text-sm font-semibold transition-all ease-in-out">Users</a> 
  </div>
</div>
`
};
createSellNav();


if (window.location.pathname === '/') {
    createHomeNav( );
} else if (window.location.pathname === '/signup/') {
    createsignupNav( );
} else if (window.location.pathname === '/login/') {
    createLoginNav( );
} else if (window.location.pathname === '/signup-business/') {
    createsignupBusinessNav( );
} else if (window.location.pathname === '/billminderpro-home/') {
    createBillminderproHomeNav( );
}  else if (window.location.pathname === '/profile/') {
    createProfileNav( );
} else if (window.location.pathname === '/inventary/') {
  createInventaryNav( );
} else if (window.location.pathname === '/register-products/') {
  createRegisterProductNav();
}else if (window.location.pathname === '/product-page/:id') {
  createProductNav();
} else if (window.location.pathname === '/users-page/') {
  createUserNav();
} else if (window.location.pathname === '/register-newUsers/') {
  createRegisterClientNav ();
} else if (window.location.pathname === '/sell/') {
  createSellNav();
} else if (window.location.pathname === '/sell-information/') {
  createSellInfoNav();
}

const navBtn = navbar.children[0].children[1];

navBtn.addEventListener('click', e => {
    const sidebar = e.target.parentElement.children[3];
    const buttons =sidebar.children[0];
    if (sidebar.classList.contains('-right-12')) {
        sidebar.classList.remove('-right-12', 'w-0');
        sidebar.classList.add('right-0', 'w-3/4');
        buttons.classList.remove('hidden');
        buttons.classList.add('flex');
    } else {
        sidebar.classList.add('-right-12', 'w-0');
        sidebar.classList.remove('right-0', 'w-3/4');
        buttons.classList.add('hidden');
        buttons.classList.remove('flex');
    }
});

// console.log(newNavWHome.children[0].children[0]);
const homeButton =newNav.children[0].children[0];
const profileButton =newNav.children[0];
const inventaryButton = newNav.children[1].children[0];
const sellButton = newNav.children[2].children[0];
const usersButton  = newNav.children[3].children[0];

