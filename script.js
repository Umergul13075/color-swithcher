const button = document.querySelectorAll('.button');
const body = document.querySelector('body');


button.forEach(function(button){
  // console.log(button)
  button.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e);
    if(e.target.id==='grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='lightblue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id==='purple'){
      body.style.backgroundColor = e.target.id;
    }
    // switch (e.target.id) {
    //   case 'grey':
    //     body.style.backgroundColor = e.target.id;
    //     break;  
    //   case 'white':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'lightblue':
    //     body.style.backgroundColor = e.target.id;
    //     break;
    //   case 'purple':
    //     body.style.backgroundColor = e.target.id;
    //     break;  
    //   default:
    //     break;
    }
    
  })
  
});