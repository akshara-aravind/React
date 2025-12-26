import propTypes from 'prop-types'
export function List({item=[],category="category"}){
    
    const categorys = category;
    const items= item;

    const list = items.map(i => <li key={i.id}>{i.name}: &nbsp; <b>{i.calories}</b></li>)

    return(
        <>
            <h3 className="header">{categorys}</h3>
            <ul className="lists">{list}</ul>
        </>
    )
}
List.propTypes = {
    category:propTypes.string,
    item:propTypes.arrayOf(propTypes.shape({id:propTypes.number,name:propTypes.string,calories:propTypes.number}).isRequired)
}

// export default List
// export default ListItem