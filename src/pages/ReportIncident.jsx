import React, { useState } from "react";

export default function ReportIncident() {
  const initial = {
    type: "",
    description: "",
    location: "",
    date: "",
    anonymous: "yes",
  };

  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function validate() {
    const errs = {};
    if (!form.type) errs.type = "Please select incident type.";
    if (!form.description || form.description.trim().length < 8) errs.description = "Please provide a brief description (8+ characters).";
    if (!form.location) errs.location = "Please provide a location.";
    if (!form.date) errs.date = "Please choose a date.";
    return errs;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    // Prototype behavior: log and show summary
    console.log("Prototype Report Submitted:", form);
    setSubmitted(true);

    // Keep the entered data visible, reset form fields after a short delay (simulate safe submit)
    setTimeout(() => {
      setForm(initial);
    }, 2500);
  }

  return (
    <section className="page report-page">
      <h2>Report Incident (Prototype)</h2>
      <p className="disclaimer">⚠️ This is a prototype. Your report will NOT be sent to authorities.</p>

      {!submitted ? (
        <form className="form-card" onSubmit={handleSubmit} noValidate>
          <label>
            Type of incident
            <select name="type" value={form.type} onChange={handleChange} aria-required="true">
              <option value="">— Select —</option>
              <option value="Physical">Physical</option>
              <option value="Verbal">Verbal</option>
              <option value="Sexual">Sexual</option>
              <option value="Other">Other</option>
            </select>
            {errors.type && <div className="error">{errors.type}</div>}
          </label>

          <label>
            Brief description
            <textarea name="description" value={form.description} onChange={handleChange} placeholder="What happened? Keep it brief." />
            {errors.description && <div className="error">{errors.description}</div>}
          </label>

          <label>
            Location
            <input type="text" name="location" value={form.location} onChange={handleChange} placeholder="City / neighbourhood / workplace" />
            {errors.location && <div className="error">{errors.location}</div>}
          </label>

          <label>
            Date
            <input type="date" name="date" value={form.date} onChange={handleChange} />
            {errors.date && <div className="error">{errors.date}</div>}
          </label>

          <fieldset className="inline-radio">
            <legend>Would you like to remain anonymous?</legend>
            <label><input type="radio" name="anonymous" value="yes" checked={form.anonymous === "yes"} onChange={handleChange} /> Yes</label>
            <label><input type="radio" name="anonymous" value="no" checked={form.anonymous === "no"} onChange={handleChange} /> No</label>
          </fieldset>

          <div className="form-actions">
            <button type="submit" className="btn primary">Submit Report (Prototype)</button>
          </div>
        </form>
      ) : (
        <div className="form-card success">
          <h3>Thank you for sharing 🙏</h3>
          <p>This is a prototype preview of your submission:</p>
          <pre className="summary">
{JSON.stringify(form, null, 2)}
          </pre>
          <p className="small">Note: the displayed data is local only and this is a demo.</p>
          <button className="btn" onClick={() => setSubmitted(false)}>Submit another (demo)</button>
        </div>
      )}
    </section>
  );
}
