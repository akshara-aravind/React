    const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];
import { useState } from "react";
import AccordionComponent from "./AccordionComponent";

export default function Accordion(){
const [curOpen,setCurOpen] = useState()
    return(
    <div className="accordion">
        {faqs.map((el,i)=>(
        <AccordionComponent  
        curOpen={curOpen} 
        onOpen={setCurOpen} 
        title={el.title} 
        num={i} 
        key={el.title}>{el.text}
        </AccordionComponent>
        ))}

        <AccordionComponent  
        curOpen={curOpen} 
        onOpen={setCurOpen} 
        title='Test 1' 
        num={22} 
        key={'test 1'}>
            <p>Allows React developers to:</p>
            <ul>
                <li>Break up UI into components</li>
                <li>Make components reusable</li>
                <li>Place state efficient</li>
            </ul>
        </AccordionComponent>
    </div>
    )
}

