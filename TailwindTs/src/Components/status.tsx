
type status = 'success' | 'failed' | 'error'

type StatusProp ={
    status:status;
}
const StatusText : Record<status,string> = {
    success:'Success',
    failed:'Failed',
    error:'Error'
}
export default function Status({status}:StatusProp){
    return(
        <div>
            <p>{StatusText[status]}</p>
        </div>
    )
}