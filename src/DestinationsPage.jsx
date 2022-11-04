import Destination from './Destination.jsx'


const DestinationsPage = ({destination}) => {
  return ( 
    <div className="destinations-page">
      {destination.destinations.map((dest, index) => {
       return <Destination id={index} {...dest} />
      })}
    </div>
   );
}
 
export default DestinationsPage;