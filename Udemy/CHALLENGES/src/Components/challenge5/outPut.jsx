export default function OutPut({bill,tip,onBtn}){
    return(
        <div>
            <h3>You pay ${bill+tip} (${bill} + ${tip} tip)</h3>
            <button onClick={onBtn}>Reset</button>
        </div>
    )
}