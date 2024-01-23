const { render, screen, fireEvent } = require("@testing-library/react")
import Body from '../Body';
import '@testing-library/jest-dom'
import MOCK_DATA from '../mocks/mockRestaurantdata.json'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

describe('search flow inside integration test',()=>{
    it('should serach res list for veg as input ',async()=>{
        await act(async()=>{
            render(<BrowserRouter><Body/></BrowserRouter> )
        })
        const cardsBeforesearch=screen.getAllByTestId('resCard');
        expect(cardsBeforesearch.length).toBe(9)
        const searchbtn=screen.getByRole('button',{name:"Serach"});
        const searchInput=screen.getByTestId("searchInput");
        fireEvent.change(searchInput,{target:{value:"veg"}});
        fireEvent.click(searchbtn)
        const cardsAftersearch=screen.getAllByTestId('resCard')
        expect(cardsAftersearch.length).toBe(1)
    })
    it('should filter toprated restaurant ',async()=>{
        await act(async()=>{
            render(<BrowserRouter><Body/></BrowserRouter> )
        })
        const cardsBeforefilter=screen.getAllByTestId('resCard');
        expect(cardsBeforefilter.length).toBe(9)
        const topRatedbutton=screen.getByRole('button',{name:'Top Rated Restaurants (4.0+)'});
        fireEvent.click(topRatedbutton)
        const cardsAfterfilter=screen.getAllByTestId('resCard');
        expect(cardsAfterfilter.length).toBe(7)
    })
})