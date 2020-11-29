// import Gesture1 from './websiteExamples/UseGestureTest/Gesture1.jsx'
// import Card from './websiteExamples/UseGestureTest/Card.jsx'
// import Card from './websiteExamples/UseSpring/Card.jsx'


import './App.css';
import Gesture1 from './websiteExamples/UseGestureTest/Gesture1v8.jsx'


function App() {

    return (
        <div className='App'>
            <Gesture1/>
        </div>
    )
}

export default App;


// <Card
//     front='Term1'
//     back='Definition1'
//     Domain='English'
//     Subdomain='Greetings'
//     Topic='Common'
//     onReleaseFunction={(dir)=>{
//         const {x,y} = dir
//         if (x){
//             if (x>0){
//                 console.log('decrement card index')
//             }else if (x<0){
//                 console.log('increment card index')
//             }
//         }else if (y){
//             if (y>0){
//                 console.log('shuffle this card only')
//             }else if (y<0){
//                 console.log('remove this card')
//             }
//         }
//     }}
// />
