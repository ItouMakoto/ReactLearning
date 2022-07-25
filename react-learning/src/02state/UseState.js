import React, {Component} from 'react';

class UseState extends Component {
    // state={
    //     iscollection:false,
    // }
    constructor() {
        super();
        this.state={
            iscollection:false,
        }
    }
    showWords=()=>{
        return (
            this.state.iscollection===false && <div>已经收藏</div>
        )
    }
    render() {
        return (
            <div>
                <h1>欢迎来到夜之城</h1>
                <button onClick={
                    ()=>{
                        this.setState({iscollection:!this.state.iscollection})
                    }

                }>{this.state.iscollection?"取消收藏":"收藏"}</button>
                {/*{this.state.iscollection===false && <div>已经收藏</div>}*/}
                {this.showWords()}
            </div>
        );
    }
}

export default UseState;
