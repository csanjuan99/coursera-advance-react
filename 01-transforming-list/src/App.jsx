import { useState } from 'react'

const data = [
  {
    id: 1,
    name: 'John Doe',
    age: 32,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  },
  {
    id: 2,
    name: 'Bob Smith',
    age: 34,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-3_ipa0mj.jpg',
  },
  {
    id: 3,
    name: 'Peter Jones',
    age: 29,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-4_t9nxjt.jpg',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    age: 36,
    image:
      'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883413/person-1_rfzshl.jpg',
  }
]

const listAgeNames = data.map(person => {
  return {
    content: `${person.name} is ${person.age} years old`,
  }
})


function App() {

  return (
    <>
      <ul>
        {listAgeNames.map((person, index) => {
          return <li key={index}>{person.content}</li>
        })}
      </ul>
    </>
  )
}

export default App
