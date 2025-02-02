import { useState, useContext } from 'react'
import List from './components/List'
import Item from './components/Item'
import Form from './components/Form'
import { AppContext } from './context/ThemedApp'

const App = () => {
  // Using Context
  const { mode, setMode } = useContext(AppContext)
  const [showForm, setShowForm] = useState(false)

  const [data, setData] = useState([
    { id: 1, content: "Hello World!", name: "Thaw Thaw" },
    { id: 2, content: "React is fun!", name: "Ko Htet" },
    { id: 3, content: "Yay, TGIF!", name: "Soe Moe" },
  ])

  // for list component
  const remove = id => {
    setData(data.filter(item => item.id !== id))
  }

  // for react form component
  const add = (content, name) => {
    const id = data[data.length - 1].id + 1
    setData([...data, { id, content, name }])
  }

  return (
    <div
      style={{
        maxWidth: "100%",
        minHeight: "100vh",
        // margin: "200px auto",
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
        padding: 20,
        borderRadius: 8,
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 0 20px 0",
        }}
      >
        Yaycha
        <div>
          {/* form section */}
          <button
            onClick={() => setShowForm(!showForm)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 32,
              border: "0 none",
              background: showForm ? "#dc3545" : "#0d6efd",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            {showForm ? "x" : "+"}
          </button>

          {/* list section */}
          <button
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
            style={{
              marginLeft: 8,
              padding: "0 20px",
              borderRadius: 32,
              border: "0 none",
              background: mode === "dark" ? "#333" : "#000",
              color: mode === "dark" ? "white" : "#fff",
              cursor: "pointer",
            }}
          >
            {mode === "dark" ? "light" : "dark"}
          </button>
        </div>
      </h1>

      {/* form section */}
      {showForm && <Form add={add} />}

      {/* list section */}
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
