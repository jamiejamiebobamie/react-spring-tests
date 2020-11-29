import {React, useState, useEffect, useRef} from 'react'

import {useSpring, animated, config} from 'react-spring'

export default function UseSpring(prop){

    const [state, incrementState] = useState(0)

    // try using stop() and combine: const [state, set] = useState(0) into below
    const {x} = useSpring({ x: state, config: config.gentle})

    // const [on, toggle] = useState(true)

    //
    // const timeout = useRef(null)
    //
    // useEffect(() => {
    //   // timeout.current = on ?
    //   //         setInterval(()=>{ interp(!state)},1100)
    //   //         :
    //   //         clearInterval(timeout.current)
    // });

    return (
        <animated.div
        onClick = { ()=> {
            incrementState( state === 3 ? 0 : state + 1 )
        }
        }
          style={{
              marginTop:x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['5vh', '1vh','5vh']
                  }),
              marginBottom:x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['5vh', '1vh','5vh']
                  }),

              textAlign:'center',
              alignSelf:'center',
              borderRadius:'1000px',
              width:x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['20px', '100px','20px']
                  }),
              paddingBottom:x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['10px', '27px','10px']
                  }),
              paddingTop:x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['10px', '27px','10px']
                  }),
              fontSize: x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['0px', '40px','0px']
                  }),
              color: x
                    .interpolate({
                      range: [0, 1,2],
                      output: ['pink', 'red','pink']
                  }),
              backgroundColor:'pink',
              opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
              transform: x
                    .interpolate({
                      range: [0, 1, 2],
                      output: [0, -25,25]
                  }).interpolate(x => `translate(${x}vw)`)
          }}>
          {prop.content}
        </animated.div>
    )
}
// marginLeft:x
//       .interpolate({
//         range: [0, 1,2],
//         output: ['0vw', '10vw','20vw']
//     }),
