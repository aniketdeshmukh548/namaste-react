import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import "@testing-library/jest-dom"
import MOCK_DATA from '../mocks/resCardMock.json'
import {RestaurantisOpen} from '../RestaurantCard'
describe('',()=>{
    it('should dispaly Restaurant card with props data',()=>{
        render(<RestaurantCard resData={MOCK_DATA}/>)

        const name=screen.getByText('Chinese Wok')
        expect(name).toBeInTheDocument()
    })
    // it('should dispaly open restaurant label',()=>{
    //     render(<RestaurantisOpen resData={MOCK_DATA}/>)

    //     const openres=screen.getByLabelText('Open')
    //     expect(openres).toBeInTheDocument()
    // })
})