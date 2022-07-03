import React from 'react'
import loading from './loading.gif'

// url: https://giphy.com/explore/loading
// // racf ==>react arrow component function ==> TAB  
//state kullanmayacağın zaman  için function kullanabilirsin
const Loading = () => {
    return (
        <React.Fragment>
            <img src={loading} alt="Loading..."
                 style={{
                     width: '300px',
                     backgroundColor: 'white',
                     paddingTop: '210px',
                     display: 'block',
                     margin: 'auto'
                 }}/>
        </React.Fragment>
    )
}
export default Loading;