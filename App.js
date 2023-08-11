//import React, { useState } from 'react'


//import  { Antd } from './components/Antd';
    
//const App = () => {
  //  const random = ['60']
    //const [number, setNumber] = useState('');
    //const onChange = (e) => {
    //   /  const number = e.target.value;
    //    / setNumber(number)
 //   }
  //  return (
//    /     <div className='App'>
       //     <input value={number} onChange={onChange} name='search' placeholder='search' style={{marginLeft: "650px", marginBottom: "30px", marginBlockStart:"250px", backgroundColor: "lightgray", border:"100px", borderColor: "lightgray" }}/>
       // {random}
        // <div className='style'>
          // <h1 style={{backgroundColor: "lightblue", marginLeft: "300px", marginRight: "300px", marginBlockStart: "25px"}}>Arai ih baina</h1>
        //    <h1 style={{backgroundColor: "lightblue", marginLeft: "300px", marginRight: "300px", marginBlockStart: "25px"}}>Arai baga baina</h1>
        // / /  <h1 style={{backgroundColor: "lightblue", marginLeft: "300px", marginRight: "300px", marginBlockStart: "25px"}}>Yg zov!</h1>
        // </div>
        // </div>
    //   /);
// /}
 
// export default App;



import React, { useState } from 'react';


const App = () => {
   
    const [number, setNumber] = useState('')
    const [userCount, setUserCount] = useState(0)
    const [userAllGuesses, setUserAllGuesses] = useState([])
    const [random, setRandom] = useState(Math.floor(Math.random() * 101) );
    
    const onChange = (e) => {
        setNumber(e.target.value)
    }  
    const Таах = () =>{
        
        setUserCount(userCount+1)
        setUserAllGuesses([...userAllGuesses, number])
        
    }

    return ( 
       
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", width:"100%",height:"100vh" }}>
            <h1>Санасан тоог олдог тоглоом</h1>
            <br/>
            <input value={number} type='text' onChange={onChange}/>
            <br/>
            <button onClick={Таах}>Таах</button>
            
            <div>
                <p>Хэдэн удаа тоглосон:{userCount}</p>
                <p>Чиний хариулт:
                    {userAllGuesses?.map((item,index) => {
                        return(
                            <span key={index}>
                                {item} { }
                            </span>            
                        )
                    }
                    )}
                </p>
            </div>
           {/* <p id='demo'></p> */}
           
        </div>
     );
}
 
export default App;