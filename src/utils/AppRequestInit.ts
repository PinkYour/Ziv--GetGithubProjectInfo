// class AppRequestInit implements RequestInit { 
import axios from "./axios";
//     public method: string = 'GET'; 
//     public headers: Headers = new Headers(); 
//     public mode: RequestMode = 'cors'; 

//     constructor() { 
//     this.headers.set('Content-Type', 'application/json'); 
//     this.headers.append('Authorization', 'token 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'); 
//     } 
// } 

// console.log( fetch('https://api.github.com/users/PinkYour', new AppRequestInit()) );
axios.get('https://api.github.com/users/PinkYour').then(res=>{
    console.log(res);
    
})
// console.log(  );
// export default AppRequestInit