// function componentte ==> render yoktur
// class componentte    ==> render vardır
import React, { Component } from 'react'

export default class ClassAndFunction extends Component {
  render() {
    return (
      <div>ClassAndFunction</div>
    )
  }
}

import React from 'react'
export default function ClassAndFunction() {
  return (
    <div>ClassAndFunction</div>
  )
}



