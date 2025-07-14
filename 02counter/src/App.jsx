import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 
/* 
1.The createRoot create's its own DOM and then compare it with the web browser's DOM and only update those components which are actually updated.
2.But the browser removes the whole DOM and then recrates the whole DOM with the updated values this is called reload.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by the React is called the React Fibre algo.
7. The algo react uses to differentiate the web browser's tree and React's tree formed through create root is called reconciliation.
8. Reconciliation is the algo behind what popularly known as the Virtual-DOM.
9.In UI it is not necessary for every update to be applied immediately. 
hydration : Jab pehli baar page load hota hai, buttons aur images dikhte hain (HTML aa gaya), lekin kuch click nahi hota kyunki JavaScript ab tak load nahi hui hoti. Phir jab JavaScript load ho ke React ko HTML ke saath connect karti hai aur sab interactive ho jata hai, us process ko hydration bolte hain. aur ye fibre algorithm k through kaafi aachi hoti hai*/
function App() {

  const [counter, setCounter] = useState(15)
const addValue = () =>{
  
  setCounter(precounter => precounter +1) // rum by call back 
  setCounter(precounter => precounter +1)
  setCounter(precounter => precounter +1)
  setCounter(precounter => precounter +1)
//  if (precounter<=19){}
 
}
const deleteValue = () =>{
  if (counter >=1){
  // counter= counter+1
  setCounter(counter-1)
  }
}

   return (
    <>
      <h1>Chai our react</h1>
      <h2>Counter value: {counter}</h2>
      <br />
      <button 
      onClick={addValue}>Add value: {counter}</button>
      <br />     
      <button
      onClick={deleteValue}>Delete value: {counter}</button>
      <footer>Footer : {counter}</footer>
    </>
  )
}

export default App
