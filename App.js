import React,{useState} from 'react';
import './App.css';
import Card from './Card';
import styled from 'styled-components'
import  {ThemeProvider,css} from 'styled-components'
const theme={
    primary:'#4CAF50',
    mango:'yellow'
}
const Button=styled.button`
background-color: ${props=>props.length>2? '#4CAF50':props.length<2?'red':'pink'};
        border: none;
     ${props=>
     props.color&&css`
     background-color: ${props=>props.length>2? '#4CAF50':props.length<2?'red':'pink'};
     color: ${props=>props.length<1?'black':'white'};
     `
     }

        font-weight:{props=>props.lenght<=1?'bold':'narmal'};
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer; 
`

function App(){
   
    const [cards,setCards]=useState([
       { id:"chebyb",
           name:"Rajan sandilya",
        title:"principal",
        avatar:"https://cdn.fakercloud.com/avatars/darcystonge_128.jpg"
    },
    {   id:"bcnhejcje",
        name:"Rajan sandilya",
        title:"principal",
        avatar:"https://cdn.fakercloud.com/avatars/darcystonge_128.jpg"
    },
    {   id:"buecnh",
        name:"Rajan sandilya",
        title:"principal",
        avatar:"https://cdn.fakercloud.com/avatars/darcystonge_128.jpg"
    }
    ])
    const [showCard,setShowCard]=useState(true)
    const toggleShowCard=()=>{
        setShowCard(!showCard)
    }

    const deleteCardHandler=(cardIndex)=>
    {
          console.log(cardIndex)
          const cards_copy=[...cards]
          cards_copy.splice(cardIndex,1)
          setCards(cards_copy)
          console.log(cards_copy)
    }
//    const buttonStyle={
//       backgroundColor:null 
//    }

    const classes=['button']

   if(cards.length<3)classes.push('pink')
   if(cards.length<2)classes.push('red text')
    const changeNameHandler=(event,id)=>{
        //1.which card
        const cardIndex=cards.findIndex(card=>card.id===id)
        //2.make a copy of the cards
        const cards_copy=[...cards]
        //3.change the name of the specific cards
        cards_copy[cardIndex].name=event.target.value
        //4. set the cards with the latest version of cards 
        setCards(cards_copy)
    }
    const cardMarkup=showCard &&( 
    cards.map((card,index)=><Card 
        avatar={card.avatar}
        name={card.name} 
        title={card.title}
        key={card.id}
        onDelete={()=>deleteCardHandler(index)}
        onChangeName={(event)=>changeNameHandler(event,card.id)}
    />)
    )
       return(

        <ThemeProvider theme={theme}>
           <div className="App">
           <Button color="primary" length={cards.length}>Toggle</Button>
            {<button className={classes.join(' ')}  onClick={toggleShowCard}>Toggle show/hide</button> }
            {cardMarkup}
           </div>
           </ThemeProvider>
       );  
}
 export default App;