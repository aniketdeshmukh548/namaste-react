import { fireEvent, render ,screen} from "@testing-library/react"
import Header from '../Header'
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom"

describe("Header component test cases",()=>{
    test('should load login button', () => { 
        render(
           <BrowserRouter>
            <Provider store={appStore}><Header /></Provider>
           </BrowserRouter> 
        )
        const loginbutton = screen.getByRole("button") 
        //const loginbutton = screen.getByText('Login')
        expect(loginbutton).toBeInTheDocument()
     })
     it('should show cart items 0', () => { 
        render(
           <BrowserRouter>
            <Provider store={appStore}><Header /></Provider>
           </BrowserRouter> 
        )
        const cartItems = screen.getByText('Cart🛒-(0)')
        expect(cartItems).toBeInTheDocument()
     })
     it('should show cart items 0', () => { 
        render(
           <BrowserRouter>
            <Provider store={appStore}><Header /></Provider>
           </BrowserRouter> 
        )
        const cartItems = screen.getByText(/Cart/) //this /Cart/ is called as regex method
        expect(cartItems).toBeInTheDocument()
     })
     it('should change login to logout button on click', () => { 
        render(
           <BrowserRouter>
            <Provider store={appStore}><Header /></Provider>
           </BrowserRouter> 
        )
        const loginbutton = screen.getByRole('button',{name:'Login'});
        fireEvent.click(loginbutton)
        const logoutbutton = screen.getByRole('button',{name:'Logout'});
        expect(logoutbutton).toBeInTheDocument()
     })
     
     
     
})