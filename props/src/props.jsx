//props :- to reuse the same compenents with different values , the parent component can send data to a child component.
//propTypes :- a mechanism that ensures that the passed value is of the correct datatype , age:PropTypes.number
//defaultProps :- default values for props in case they are not passed from the prent component , name: 'Guest'
import PropTypes from "prop-types"

function Student({ name= 'Guest',age=0,isStudent=false}){
    
    return(
        <div className="studentContainer">
            <p>Name:{name}</p>
            <p>Age:{age}</p>
            <p>Student:{isStudent ? "Yes" : 'No'}</p>
        </div>
    )
}
Student.propTypes = {
     name: PropTypes.string,
     age: PropTypes.number,
     isStudent: PropTypes.bool,
}

export default Student