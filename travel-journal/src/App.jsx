import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Entry from "./components/Entry"
import dataarray from "./data.js"
import data from './data.js';

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

function App() {

  const entries = dataarray.map((entry) => {
    return (
      <Entry 
        key = {entry.id}
        props = {entry}
      />
    )
  })

  return (
    <>
        <Header />
        <main className="container">
            {entries}
        </main>
    </>
  )
}

export default App;
