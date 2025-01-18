import { useState } from 'react'
import List from './components/List'
import Item from './components/Item'

const App = () => {
  const [data, setData] = useState([
    { id: 1, content: "Hello World!", name: "Thaw Thaw" },
    { id: 2, content: "React is fun!", name: "Ko Htet" },
    { id: 3, content: "Yay, TGIF!", name: "Soe Moe" },
  ])

  const remove = id => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div
      style={{ 
        maxWidth: 600, 
        margin: "200px auto", 
        backgroundColor: "cyan",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <h1>Yaycha</h1>

      <List>
        {data.map(item => (
          <Item
            key={item.id}
            item={item}
            remove={remove}
          />
        ))}
      </List>
    </div>
  )
}

export default App
