import { forwardRef } from 'react'
import Button from '../Button'
import { InputContainer } from './styled'

export const Input = forwardRef(({dataRepos ,...props}, ref) => {
  return (
    <InputContainer>
      <input ref={ref} {...props} />
      <Button onClick={dataRepos}/>
    </InputContainer>
  )
});



// function Input({dataRepos, ...props}, ref) {
//   return (
//     <InputContainer>
//       <input {...props} ref={ref}/>
//       <Button onClick={dataRepos}/>
//     </InputContainer>
//   )
// }
//
//
//export forwardRef({ Input })
//



