import React from 'react'

function SlotMachineEx({val1, val2, val3}) {
    const allSame = val1 === val2 && val3 === val1 && val2 === val3;
    const msg= allSame ? 'Yaayy.. You Win!': 'Ooops! You Lost'
  return (
    <div>
        <h1>{val1}{val2}{val3}</h1>
        <h3 style={{color: allSame? 'green':'red'}}>{msg}</h3>
        {allSame && <h4><i>Congrats!!!</i></h4>}

      
    </div>
  )
}

export default SlotMachineEx
