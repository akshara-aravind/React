export default function Items({item}){
    return(
        <li>
            <span style={item.packed === true ? {textDecoration:'line-through'}:{}}>
                {item.quantity} {item.description}
            </span>
            <button>❌</button>
        </li>
    )
}