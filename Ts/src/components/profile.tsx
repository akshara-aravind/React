type Props ={
    name:string;
}
export default function Profile({name}:Props){
    return(
        <h3>Name:{name}</h3>
    )
}