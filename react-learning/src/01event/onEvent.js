import React, {Component} from 'react';

class OnEvent extends Component {
    componentVar="this is component variable"
    myref=React.createRef()
    render() {
        return (
            <div>
                {/*<input type="text" ref="mytext"/>*/}
                <input type="text" ref={this.myref}/>
                <button onClick={()=>{
                    console.log('onClick')
                    console.log(this.componentVar)
                }}>add</button>
                <button onClick={this.handleClik.bind(this)}>add2</button>
                {/*最佳实现1*/} <button onClick={this.handleClik2}>add3</button>
                {/*最佳实现2*/}<button onClick={()=>this.handleClik3()}>add4</button>
            </div>
        );
    }
    handleClik(){
        console.log('handleClik')
        console.log(this.componentVar)
    }
    handleClik2=(e)=>{console.log('handleClik2',e)}
    handleClik3(){
        //console.log('handleClik3:',this.refs.mytext.value);
        console.log('handleClik3:',this.myref.current.value);
    }
}

export default OnEvent;
