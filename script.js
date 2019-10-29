window.onload = function(){

    const theMole = document.createElement('div');
    theMole.id = 'mole';




    setInterval(()=>{

        let r = Math.random();
   

    if(r > 0.85){
       let cols = document.querySelectorAll(`.row > .col`);
       for(let i=0; i < cols.length; i++){
        console.log('dissappearing')
           cols[i].innerHTML = "";
       }
        return;
    }


        if(r > 0.5){
            return;
        }



        let randomRow = Math.floor(Math.random() * 3) + 1;

        let randomColumn = Math.floor(Math.random() * 3) + 1;


            document.querySelector(`.row${randomRow} > .col${randomColumn}`)
            .appendChild(theMole)
        
  
    },500)




    // 1000 miliseconds is 1 second so this funciton will happen once every second





} // end window onload
