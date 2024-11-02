import { useState } from "react"

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState('')
  const handleChange = (event) => {
    setTitle(event.target.value)
  }
  
const handleSubmit = (event) => {
  event.preventDefault()
  onCreate(title)
}

  return (
    <div className='container'>
      <h1 className='title'>Add a book to the List</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value={title} onChange={handleChange} />
        <button>Create Book</button>
      </form>
    </div>
  )
}

export default BookCreate