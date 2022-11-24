import { useState } from 'react'
import { useContext } from 'react'
import { Card } from '../../components/Card/Card'
import { FailLoadData } from '../../components/Shared/FailLoadData/FailLoadData'
import { data } from '../../database/data'
import { Cart } from '../../components/Cart/Cart'

export const HomePage = () => {

    const [loadData, setLoadData] = useState(null)

    useContext(data).then(data => {
        setLoadData(data)
    })

    return (
        <main>
        {
            loadData !== null ?
            <>
                <ul>
                    {loadData.map(item => <Card key={item.id} {...item} /> )}
                    <Card />
                </ul>
                <Cart />
            </>
            :
            <FailLoadData />
        }
        </main>
    )
}