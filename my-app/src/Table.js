import React from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
        </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows=props.characterData.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={(e) => {
                        console.log(e)
                        return props.removeCharacter(index)}}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const  Table = (props) => {
        const {characterData,removeCharacter} =props
        return (
            <table>
                <TableHeader></TableHeader>
                <TableBody characterData={characterData} removeCharacter={removeCharacter}></TableBody>
            </table>
        )

}

export default Table
