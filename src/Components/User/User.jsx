import React, { useContext } from 'react'
import './User.css'
import Card from '../Card'


import Context from '../../Context'
import Picture from '../Picture'
import Number from '../Number'

function User() {
    const {state} = useContext(Context)
    const {user} = state;


    return (
        <Card className='user'>
            <Picture url={user?.avatar_url} alt={user?.login}/>
            <h1 className='name'>{user?.name}</h1>
            <h3 className='login'>{user?.login}</h3>
            <p className='bio'>{user?.bio}</p>
            <div className="infos">
                <Number to='repos' number={user?.public_repos} text='Repositórios'/>
                <Number number={user?.followers} text='Seguidores'/>
                <Number number={user?.following} text='Seguindo'/>
            </div>
        </Card>
    )
}

export default User
