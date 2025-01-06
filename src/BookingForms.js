import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { basicSchema } from "./schema";
import { submitAPI } from './api';

const onSubmit = async (values, action, updateBookedTimes) => {
  console.log(values);
  if (submitAPI) {
    const success = await submitAPI(values);
    if (success) {
      updateBookedTimes(values.time);
      action.resetForm();
      alert("Reservation submitted successfully!");
    } else {
      alert("Failed to submit reservation.");
    }
  } else {
    console.error("submitAPI function is not available");
  }
};

function BookingForm({ availableTimes, initializeTimes, bookedTimes, updateBookedTimes }) {
  const [times, setTimes] = useState(availableTimes || []);

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    formik.handleChange(e);

    const fetchedTimes = await initializeTimes(selectedDate);
    setTimes(fetchedTimes);
  };

  const formik = useFormik({
    initialValues: {
      date: "",
      time: "",
      number: "",
      occasion: "",
    },
    validationSchema: basicSchema,
    onSubmit: (values, action) => onSubmit(values, action, updateBookedTimes),
  });

  useEffect(() => {
    const checkSubmitAPI = setInterval(() => {
      if (typeof window.submitAPI !== 'undefined') {
        console.log("submitAPI is available!");
        clearInterval(checkSubmitAPI);
      }
    }, 100);

    return () => clearInterval(checkSubmitAPI);
  }, []);

  useEffect(() => {
    const filteredTimes = availableTimes.filter(time => !bookedTimes.includes(time));
    setTimes(filteredTimes);
  }, [bookedTimes, availableTimes]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "grid",
        maxWidth: "400px",
        justifySelf: "center",
        margin: "15px",
      }}
    >
      <label htmlFor="date" style={{ margin: "15px" }}>
        Date
      </label>
      <input
        value={formik.values.date}
        onChange={handleDateChange}
        id="date"
        type="date"
        placeholder="Date"
        onBlur={formik.handleBlur}
        className={formik.errors.date && formik.touched.date ? "input-errors" : ""}
      />
      {formik.errors.date && formik.touched.date && (
        <p className="errors">{formik.errors.date}</p>
      )}

      <label htmlFor="time" style={{ margin: "15px" }}>
        Time
      </label>
      <select
        value={formik.values.time}
        onChange={formik.handleChange}
        id="time"
        placeholder="Time"
        onBlur={formik.handleBlur}
        className={formik.errors.time && formik.touched.time ? "input-errors" : ""}
      >
        <option value="">Choose a time</option>
        {Array.isArray(times) && times.length > 0 ? (
          times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No times available
          </option>
        )}
      </select>
      {formik.errors.time && formik.touched.time && (
        <p className="errors">{formik.errors.time}</p>
      )}

      <label htmlFor="number" style={{ margin: "15px" }}>
        Number of guests
      </label>
      <input
        value={formik.values.number}
        onChange={formik.handleChange}
        id="number"
        type="number"
        placeholder="Number of guests"
        onBlur={formik.handleBlur}
        className={formik.errors.number && formik.touched.number ? "input-errors" : ""}
      />
      {formik.errors.number && formik.touched.number && (
        <p className="errors">{formik.errors.number}</p>
      )}

      <label htmlFor="occasion" style={{ margin: "15px" }}>
        Occasion
      </label>
      <select
        value={formik.values.occasion}
        onChange={formik.handleChange}
        id="occasion"
        placeholder="Occasion"
        onBlur={formik.handleBlur}
        className={formik.errors.occasion && formik.touched.occasion ? "select-errors" : ""}
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      {formik.errors.occasion && formik.touched.occasion && (
        <p className="errors">{formik.errors.occasion}</p>
      )}

      <button aria-label="Submit Form"
        disabled={formik.isSubmitting}
        className="button"
        type="submit"
        style={{ margin: "40px" }}
      >
        Reserve!
      </button>
    </form>
  );
}

export default BookingForm;