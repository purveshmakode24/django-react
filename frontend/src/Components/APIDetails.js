import React, { Component } from 'react'

export default class APIDetails extends Component {
    render() {
        return (
            <div className="paddingall-20">
                <hr/>
                <p style={{color:"blue", fontSize: "30px"}}>API</p>

                <div className="table-container paddingt-10">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                        <tr style={{fontWeight:"bold"}} >
                            <td>Data</td>
                            <td>URL</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>User Data</td>
                            <td>localhost:8000/api/post/</td>
                        </tr>
                        {/* <tr>
                            <td>Data</td>
                            <td>URL</td>
                        </tr> */}
                        </tbody>                    
                    </table>
                </div>
            </div>
        )
    }
}
