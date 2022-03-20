import Results from '../data/contact.json'
import Contacts from './Contacts'

function Main() {
    return(
        
        <div id="name">
         <h1>Contact List</h1>
         <div  id="title">
          {Results.results.map((contact, index) => {
              return <Contacts contact={contact} key={index} />
          })}
          </div>
        </div>
     
    )
}

export default Main