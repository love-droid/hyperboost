import React from 'react'
import Initial from './Initial/Initial'
import Threepair from './Threepair.js/Threepair'
import Process from './Process/Process'
import Browse from './Browse/Browse'
import Content from './Content/Content'

function Firstpage() {
    return (
        <>
            <Initial />
            <Threepair />
            <Process/>
            <Browse/>
            <Content/>
        </>
    )
}

export default Firstpage