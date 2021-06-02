import React from 'react' 

export default class CoordinatesButton extends React.Component {

    handleClick = (event) => {
        const coordinates = [event.clientX, event.clientY]
        
        console.log(this.props.onReceiveCoordinates)
    }

    render(){
        return(
            <button onClick={this.handleClick}></button>
        )
    }
}
