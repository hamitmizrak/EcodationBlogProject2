import React, { Component } from 'react'
<nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
// rcc
//Emmet => header>nav.navbar.navbar-expand-lg.navbar-dark.bg-dark
export default class HeaderComponent extends Component {
  render() {
    return (
      <>
      <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
      </header>
      </>
    )
  }
}
