//in onClick takes number and returns nothing
type TabbedContent={
    num:number;
    activeTab:number;
    onClick:(value:number) => void
}
export default function Tabbed({num,activeTab,onClick}:TabbedContent){
    return(
        <button className={activeTab === num ? 'tab active' : 'tab'} onClick={() => onClick(num)}>Tab{num+1}</button>
    )
}