// https://use-gesture.netlify.app/docs/

// react-spring v8: DOES WORK
// https://react-spring-test.herokuapp.com

import { useSpring, animated } from 'react-spring'
import { useDrag } from 'react-use-gesture'
export default function PullRelease() {
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(({ down, movement }) => {
    set({ xy: down ? movement : [0, 0] })
  })
  // Bind it to a component
  return (
    <animated.div
      {...bind()}
      style={{ width:'100px',height:'100px', backgroundColor:'blue',
        transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    />
  )
}

// react-spring v9: DOES NOT WORK WHEN DEPLOYED TO THE INTERNET

// import { useSpring, animated } from 'react-spring'
// import { useDrag } from 'react-use-gesture'
// function PullRelease() {
//   const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))
//   // Set the drag hook and define component movement based on gesture data
//   const bind = useDrag(({ down, movement: [mx, my] }) => {
//     set({ x: down ? mx : 0, y: down ? my : 0 })
//   })
//   // Bind it to a component
//   return <animated.div {...bind()} style={{ x, y }} />
// }
