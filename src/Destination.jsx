const Destination = ({index, name, images, description, distance, travel }) => {
  return ( 
    <div>
      <p>{name}</p>
      <img src={images} alt="" />
      <p>{description}</p>
      <p>{distance}</p>
      <p>{travel}</p>
    </div>
   );
}
 
export default Destination;