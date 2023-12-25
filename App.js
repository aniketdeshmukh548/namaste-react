/* <div id='parent'>
    <div id='child'>
        <h1>I am H1 Tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
    <div id='child2'>
        <h1>I am H1 Tag</h1>
        <h2>I am H2 Tag</h2>
    </div>
</div> */

//----------------------create above structure using react
//The below code is the core react code but html is easy so we use JSX instead of core react
const heading=React.createElement(('div'),{id:'parent'},
    [(React.createElement(('div'),{id:'child'},(
        [React.createElement(('h1'),{},('I am H1 Tag!!')),React.createElement(('h2'),{},('I am H2 Tag!!'))]
    ))),
    (React.createElement(('div'),{id:'child2'},(
        [React.createElement(('h1'),{},('I am H1 Tag!!')),React.createElement(('h2'),{},('I am H2 Tag!!'))]
    )))]
)

//const heading=React.createElement(('h1'),{id:"heading"},('Hello World From React'));
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)