import './contacts.css';

function Contacts(props){
  const {name, phone, cell, picture} = props.contact
  return(
    <div class="display">
    <div class="contact">
      <img src={picture.thumbnail} alt="photos" id="image"/>
      <div id="details">
      <h3>{name.first} {name.last}</h3>
      <h5>Home: {phone}</h5>
      <h5>Mobile: {cell}</h5>
      </div>
    </div>
    </div>
  )
}

export default Contacts