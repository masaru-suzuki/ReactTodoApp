import React from 'react'
import DatePicker from "react-datepicker"
// import "react-datepicker/dist/react-datepicker.css"
import "node_modules/react-datepicker/dist/react-datepicker.css"

function PickDate() {
  const initialDate = new Date()
  const [startDate, setStartDate] = useState(initialDate)
  const handleChange = (date) => {
    setStartDate(date)
  }

  return(
    <DatePicker
        selected={startDate}
        onChange={handleChange}
      />
    )
 }
  export default PickDate