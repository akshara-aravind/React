
export function List(){

    let fruits = ['apple','orange','banana','coconut','pineapple']

    const listItems = fruits.map((el,index) => <li key={index}>{el}</li>)

    let fruitsAndCalories = [{id:1, name:'apple', calories:95},
                            {id:2, name:'orange', calories:45},
                            {id:3, name:'banana', calories:105},
                            {id:4, name:'coconut', calories:159},
                            {id:5, name:'pineapple', calories:37}
                           ]

    // sort item name by ascending order
    // fruitsAndCalories.sort((a,b)=> a.name.localeCompare(b.name)) // alphabetical
    // fruitsAndCalories.sort((a,b)=> b.name.localeCompare(a.name)) // decending
    fruitsAndCalories.sort((a,b)=>a.calories - b.calories) // numerical

    const items = fruitsAndCalories.map(i => <li key={i.id}>{i.name}: &nbsp; <b>{i.calories}</b></li>)
    
    const lowCalFruits = fruitsAndCalories.filter(low => low.calories < 100)
    const lowCaFruits = lowCalFruits.map(i => <li key={i.id}>{i.name}: &nbsp; <b>{i.calories}</b></li>)

    return(
        <>
            <ul>{listItems}</ul>
            <ol>{items}</ol>
            <ul>{lowCaFruits}</ul>
        </>
    )
}


export function ListItem(){
    
}
// export default List
// export default ListItem