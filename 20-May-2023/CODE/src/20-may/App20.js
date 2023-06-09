import {Routes,Route} from 'react-router-dom'
import Greeting from '../Greeting'
import ShoppingEx from './ShoppingEx'
import Fruits from '../19-may/fruitshw'
import UseParamsEx from './UseParamsEx'
export default function App20()
{
 
    return <Routes>
        <Route path="/" element={<Greeting></Greeting>}>
        <Route path="/shopping" element={<ShoppingEx></ShoppingEx>}></Route>
        <Route path="/fruits" element={<Fruits></Fruits>}></Route>
        <Route path="/alpha/:name" element={<UseParamsEx></UseParamsEx>}></Route>
        </Route>
    </Routes>

}