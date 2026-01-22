import { useState } from "react";
import Tabbed from "./tabbed";
import TabContent from "./tabContent";
import DifferentContent from "./Different";
type TabContent={
    summary:string;
    details:string;
}
type TabProps ={
    content:TabContent[]
}
export default function Tab({content}:TabProps){
    const [activeTab,setActiveTab] = useState<number>(0);
    console.log(<DifferentContent />)
    return(
        <div>
            <div className="tabs">
              <Tabbed num={0} activeTab={activeTab} onClick={setActiveTab}/>
              <Tabbed num={1} activeTab={activeTab} onClick={setActiveTab}/>
              <Tabbed num={2} activeTab={activeTab} onClick={setActiveTab}/>
              <Tabbed num={3} activeTab={activeTab} onClick={setActiveTab}/>
            </div>

            {activeTab <= 2 ? (
               <TabContent item={content[activeTab]}/>
            ):(
              <DifferentContent />
            )}
        </div>
    )
}