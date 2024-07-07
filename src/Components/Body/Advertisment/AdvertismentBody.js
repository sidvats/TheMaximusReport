import AdvertismentCard from "./AdvertismentCard";
const AdvertismentBody=()=>{
    return (
        <div style={{boxShadow:"0px 0px 8px Grey",padding:".5rem",borderRadius:"8px"}}>
            <strong style={{fontFamily:"kalnia"}}>Advertisments</strong>
            <AdvertismentCard/>
            <AdvertismentCard/>
            <AdvertismentCard/>
            <AdvertismentCard/>
            <AdvertismentCard/>
        </div>
    );
}
export default AdvertismentBody;