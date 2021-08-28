import React, { Component } from 'react'
import Clock from './Clock'
import FunctionalClock from './FunctionalClock'

class Clocks extends Component {
    render() {
        return (
            <div>
                <Clock>
                </Clock>
                <FunctionalClock></FunctionalClock>
            </div>
        )
    }
}

export default Clocks
