import React, {Component} from 'react';
import "./index.less"

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
                <div className="active">green</div>
                <label htmlFor="userName">输入</label>
                <input type="text" id="userName"/>
            </div>

        );
    }
}

export default ComponentStyle;
