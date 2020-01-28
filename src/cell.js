import React from 'react'

class Cell extends React.Component {
    state ={ 
        color: this.props.value
    }

    colorChange = () => {
        this.setState({color: '#333'})
    }

    render() {
        return (
            <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.colorChange}></div>
        )
    }

}

export default Cell;