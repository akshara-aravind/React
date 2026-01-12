import Greeting from "./components/1first.jsx"
import Name from "./components/2name.jsx"
import TwoLinePrint from "./components/3twoLine.jsx"
import PrintNum from "./components/4PrintNum.jsx"
import Sum from "./components/5Sum.jsx"
import ListItem from "./components/6List.jsx"
import Style from "./components/7Style.jsx"
import Condition from "./components/8Condition.jsx"

//props
import PropsPassing from "./components/9Props.jsx"
import DestructuringProps from "./components/10destructringProps.jsx"
import ArrayList from "./components/11Array.jsx"
import BooleanProps from "./components/12BooleanProps.jsx"

//count
import Count from "./components/13Counter.jsx"

//showImg
import ShowImg from "./components/14ShowImg.jsx"
import ChangeText from "./components/15ChangeText.jsx"

//onChange:-input based useState
import { DisplayName } from "./components/16Onchange.jsx"
import { UpperCaseConverter } from "./components/16Onchange.jsx"
import { CharacterCounter } from "./components/16Onchange.jsx"
import { PasswordLength } from "./components/16Onchange.jsx"
import { Combine } from "./components/16Onchange.jsx"
import { Squre } from "./components/16Onchange.jsx"
import { EmailValidation} from "./components/16Onchange.jsx"
import { WordLimit } from "./components/16Onchange.jsx"
import { TextcolorChange } from "./components/16Onchange.jsx"

import { IncrementFontSize } from "./components/16Onchange.jsx"

//Array based useState
 import { AddItem } from "./components/17Array.jsx"
//useEffect

function App() {

  return (
    <>
       {/* <Greeting></Greeting>
       <Name></Name>
       <TwoLinePrint></TwoLinePrint>
       <PrintNum></PrintNum>
       <Sum></Sum>
       <ListItem></ListItem>
       <Style></Style>
       <Condition></Condition>

       <PropsPassing name = "Alexa" job = "developer"></PropsPassing>
       <DestructuringProps city = "Mumbai"></DestructuringProps>
       <ArrayList list={['Html','Css','Js','React']}></ArrayList>
       <BooleanProps loggedIn = {true}></BooleanProps> */}

       {/* <Count></Count> */}
       {/* <ShowImg></ShowImg>
       <ChangeText></ChangeText><br /><br />
       <DisplayName></DisplayName><br /><br />
       <UpperCaseConverter></UpperCaseConverter>
       <CharacterCounter></CharacterCounter>
       <PasswordLength></PasswordLength>
       <Combine></Combine>
       <Squre>12</Squre>
       <EmailValidation></EmailValidation>
       <WordLimit></WordLimit>
       <TextcolorChange></TextcolorChange>
       <IncrementFontSize></IncrementFontSize> */}

       <AddItem></AddItem>
    </>
  )
}

export default App
