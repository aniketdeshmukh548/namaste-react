import { sum } from "../sum"

test("sum should be 5 of our sum function",()=>{
    const result=sum(4,3)
    expect(result).toBe(7)
})