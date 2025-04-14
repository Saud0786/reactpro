import { useState } from 'react'
import { Question } from './Data2/faqsQuestion'
import './LL.css';


// rfc   use for basic structure
export default function Middle() {
  let[showAns,setShowans]=useState(Question[0].id)
  let items=Question.map((iteamsData,i)=>{
    let itemsDetailes={
       iteamsData,
       showAns,
       setShowans
    }
    return(
      <FaqsIteam itemsDetailes={itemsDetailes} key={i}/>
    )
  })
  return (
    <div >

      {/* <h1 className='text-center'>Frequency Asked Question (FAQs)</h1>
      <div className='faqouter'>
        {Question.map((faqIteams, i) => {
          return (
            <div className='faqItems' key{i}>
              <h2 onClick={()=>setShowans(faqIteams.id)}>{faqIteams.title}</h2>
              <p className={showAns==faqIteams.id?'activAns':''}>{faqIteams.body}</p>
            </div>
          )
        })}

      </div> */}

   

      <div>
      <h1 className='text-center'>Frequency Asked Question (FAQs)</h1>
      <div className='faqouter'>
          {items}
      </div>
      </div>


    </div>
  )
}

function FaqsIteam({itemsDetailes}) {
  return(
    <div className='faqItems'>
              <h2 onClick={()=>itemsDetailes.setShowans(itemsDetailes.iteamsData.id)}>{itemsDetailes.iteamsData.title}</h2>
              <p className={itemsDetailes.showAns==itemsDetailes.iteamsData.id?'activAns':''}>{itemsDetailes.iteamsData.body}</p>
            </div>
  )
}