export default function BillInput({bill,onSetBill}){
    return(
        <>
         <label>How much was the bill?</label>
          <input type="number"  placeholder="Bill value" value={bill} onChange={(e) => onSetBill(Number(e.target.value))}/><br />
        </>
    )
}