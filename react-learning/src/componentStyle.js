import React, {Component} from 'react';
import "./index.css"

class ComponentStyle extends Component {
    render() {
        const name="makoto"
        const style ={
            backgroundColor:"yellow",
            fontSize:"10px",
        }
        return (
            <div >
                <div style={style}>{10+20}{name}</div>

                <div class="active">green</div>
            </div>

        );
    }
}

export default ComponentStyle;
