import Content from './Content'
import { data } from '../assets/data'

const Header = () => {

  return (
   <>
        <div className="row">
            <div className="container">
                <div className="h1">FAQs</div>
                {data.map((v, i)=> (
                    <Content qn={v.qn} ans={v.ans} key={i} />
                ))}
            </div>
        </div>
   </>
  )
}

export default Header