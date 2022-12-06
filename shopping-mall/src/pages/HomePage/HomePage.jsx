import { useState } from 'react'
import { useContext } from 'react'
import { Card } from '../../components/Card/Card'
import { FailLoadData } from '../../components/Shared/FailLoadData/FailLoadData'
import { data } from '../../database/data'
import { Cart } from '../../components/Cart/Cart'
import { HomePageMainStyle, HomePageUlStyle } from './HomePageStyle'

export const HomePage = () => {

    const [loadData, setLoadData] = useState(null)
    useContext(data).then(data => {
        setLoadData(data)
    })

    return (
        <HomePageMainStyle>
        {
            loadData !== null ?
            <>
                <HomePageUlStyle>
                    {loadData.map(item => <Card key={item.id} {...item} />)}
                </HomePageUlStyle>
                <Cart />
            </>
            :
            <FailLoadData />
        }
        </HomePageMainStyle>
    )
}