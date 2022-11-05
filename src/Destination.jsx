const Destination = ({id, name, images, description, distance, travel }) => {
  return ( 
    <div style={{fontFamily: 'barlow'}}>
      <h3>PICK YOUR DESTINATION</h3>
      <p>{name}</p>
      <img src={images} alt="" />
      <p>{description}</p>
      <p>{distance}</p>
      <p>{travel}</p>
    </div>
   );
}
 
export default Destination;