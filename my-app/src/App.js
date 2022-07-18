import React, {Component} from "react";
import Table from './Table'
import Form from './Form'

class App extends Component {
    state={
        characters: []
    }
    removeCharacter=(index) => {
        const {characters} = this.state//todo:尝试使用属性去取数据
        this.setState({
            characters: characters.filter((character,i)=>{
                return i !== index
            })
        })
    }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
        console.log(this.state)
    }
    render() {
        const {characters} = this.state
        return(
            <div className="container">
                <Table className="contain-table" characterData={characters} removeCharacter={this.removeCharacter}></Table>
                <Form handleSubmit={this.handleSubmit}></Form>
            </div>
        )
    }
}
export default App
