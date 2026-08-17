import CtaRive from "../CtaRive/CtaRive"
import RequestModal from "../ReguestModel/ReguestModel"
import "./BookAdemo.css"
const BookAdemoComponen = () => {
  return (
    <div className="BookAdemoContainer d-flex align-items-center justify-content-center">
        <div className="wallpaper-BookAdemo">

      <CtaRive/>
        </div>

<div className="booking-title container">
<div className="title">
    <h1 className="ContentColor">
        Transform Your Car service

    </h1>
    <h1 className="LightColor">
Management With With CarServicePro

    </h1>
</div>

<div className="booking-btn">
   <RequestModal
  buttonLabel="Book a Demo"
  buttonClassName="px-5 py-3 mt-4 rounded-pill fw-semibold"
  buttonStyle={{ backgroundColor: "white", border: "none",color:"black" }}
/>
</div>
</div>
    </div>
  )
}

export default BookAdemoComponen
