import {React, useState, useEffect, useRef} from 'react'

import { useSprings, animated, interpolate, useSpring, config } from 'react-spring'

import { useGesture, useDrag } from 'react-use-gesture'


export default function Gesture1(props){
    const [{ storeX, storeY }, store] = useState({ storeX:0, storeY:0 })

  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  const bind = useGesture(
  {
      onDrag: ({down, movement:[mx,my]})=>{
                    set({
                        x:down?
                            mx?mx:storeX
                            :
                            storeX,
                        y:down?
                            my?my:storeY
                            :
                            storeY
                        });
                    store({ storeX:mx, storeY:my });
                },
  },
  config
)

// const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
// // Set the drag hook and define component movement based on gesture data
// const bind = useDrag(({ down, movement: [mx, my] }) => {
//   set({ x: down ? mx : 0, y: down ? my : 0 })
// })
  // Bind it to a component
  return <animated.div {...bind()} style={{ x, y,
      width:'100px',
      height:'100px',
      backgroundColor:'red',
      alignSelf:'center',
      marginTop:'5vh',
   }} />
}
