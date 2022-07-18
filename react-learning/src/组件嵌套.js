import React,{Component} from 'react';


class Navbar extends Component {
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        )
    }
}
class Child extends Component{
    render() {
        return <div>child</div>
    }
}
function Swiper(){
    return <div>Swiper</div>
}

const Tabbar=()=>{
    return <div>Tabbar</div>
}
class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        );
    }
}

export default App;
