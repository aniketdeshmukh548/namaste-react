import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe('contact us page test case',()=>{
    beforeAll(()=>{
        console.log('will test before all other test cases')
    })
    beforeEach(()=>{
        console.log('will test before each test cases')
    })
    afterAll(()=>{
        console.log('will test after all other test cases')
    })
    afterEach(()=>{
        console.log('will test after each test cases')
    })
    test("should load heading in contact component",()=>{
        render(<Contact />);
        const heading = screen.getByRole('heading')
        expect(heading).toBeInTheDocument()
    })
    
    test("should load button in contact component",()=>{
        render(<Contact />);
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
})