const EmailSent = ({ handleButtonClick }) => (
  <div className="auth-full-body-wrapper">
    <div className="email-sent-card">
      <div className="card-body">
        <div className="email-sent-content">
          <div className="identity-content">
            <span className="icon">
              <i className="fa fa-check" />
            </span>
          </div>
          <p className="card-title">
            Congratulations. Registered Successfully.
          </p>
          <p className="card-description">
            Please check your email for email verification.
          </p>
          <p className="card-info">
            For security reason please check SPAM folder of your email if not
            found in inbox.
          </p>
        </div>
        <div className="card-actions">
          <button onClick={handleButtonClick}>Continue</button>
        </div>
      </div>
    </div>
  </div>
);

export default EmailSent;
