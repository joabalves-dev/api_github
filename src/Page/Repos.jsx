import React, {useContext} from 'react'
import Card from '../Components/Card'
import './Repos.css'

import Context from '../Context';

function Repos() {

    const {state} = useContext(Context)
    const {repos} = state;

    console.log()

    return (
        <div className='Repos'>
            <Card>
                <h1>Repositórios de <span>{state.user.name.split(' ')[0]}</span></h1>
            </Card>
        </div>
    )
}

export default Repos