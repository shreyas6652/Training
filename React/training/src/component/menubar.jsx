import React, { Component } from 'react'
import './menubar.css'
export class menubar extends Component {
    render() {
       return (
            <div >
             
                <nav id="menubar" name="menubar" class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/todo">Todo Assignment</a>
  <button style={{margin:5}} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand"  style={{margin:5}} href="/table">Table Form Assignment</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand"  style={{margin:7}} href="/clock">Tick clock Assignment</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</nav>
            </div>
        )
    }
}

export default menubar
