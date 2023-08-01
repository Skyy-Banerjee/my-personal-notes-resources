import React from 'react'

function Form() {
    function handleSubmit(e){
        e.preventDefault();
        console.log('Submitted the form');
    }
  return (
    <form onSubmit={handleSubmit}>
        <button>Submit</button>
    </form>
  )
}

export default Form
