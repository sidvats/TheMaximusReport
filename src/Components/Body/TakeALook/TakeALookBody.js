import TakeALookCard from "./TakeALookCard";

const TakeALookBody=()=>{
    const elements=[];
    for(let i=0;i<=5;i++){
        elements.push(<TakeALookCard key={i}/>);
    }
    return (
        <div style={{boxShadow:"0px 0px 8px",marginTop:"5px",borderRadius:"5px",textAlign:"center",padding:".2rem"}}
        className="sticky-top"
        >
            <strong style={{fontFamily:"Kalnia"}}>Take A Look</strong>
            <marquee behaviour="scroll" direction="up" scrollDelay="100">
                {elements}
            </marquee>
        </div>
    );
}
export default TakeALookBody;