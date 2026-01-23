type TypedButtonProps={
    label:string;
    varient:string;
}
export default function TypedButton({label,varient}:TypedButtonProps){

    const styles = varient === 'primary'? 'bg-gray-600':'bg-amber-600';
    return(
        <div>
            <button className={`text-white p-4 mx-120 rounded mt-5 shadow-2xl ${styles}`}>{label}</button>
        </div>
    )
}