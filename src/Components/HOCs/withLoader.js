import {connect} from "react-redux";

const WithLoader = (Component) => {
    let ComponentContainer = (props) => {
            if (props.isLoading) {
                return <div>Loading...</div>
            }
            return <Component {...props}/>
    }
    return connect(mapStateToProps)(ComponentContainer)
}
const mapStateToProps = (state) => {
    return {
        isLoading: state.homePage.isLoading
    }
}
export default WithLoader