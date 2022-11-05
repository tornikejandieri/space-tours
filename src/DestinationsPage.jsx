import Destination from './Destination.jsx'


const DestinationsPage = ({destination}) => {
  return ( 
    <div className="destinations-page">
      {destination.destinations.map((dest) => {
       return <Destination id={new Date().getTime().toString()} {...dest} />
      })}
    </div>
   );
}
 
export default DestinationsPage;