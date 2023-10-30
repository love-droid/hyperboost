import React from 'react'
import Initial from './Initial/Initial'
import Threepair from './Threepair.js/Threepair'
import Process from './Process/Process'
import Browse from './Browse/Browse'

function Firstpage() {
    return (
        <>
            <Initial />
            <Threepair />
            <Process/>
            <Browse/>
        </>
    )
}

export default Firstpage