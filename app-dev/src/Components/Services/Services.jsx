import './Services.css'
function Services() {
  return (
    <div className="services-container">
      <div className="service">
        <img src="./plan_upgrade.svg" alt="internet error" />
        <p>Plan Upgrade</p>
      </div>
      <div className="service">
        <img src="hero.svg" alt="internet error" />
        <p>Explore hero unlimited</p>
      </div>
      <div className="service">
        <img src="Web-utilities.svg" alt="internet error" />
        <p>Utilities bills</p>
      </div>
      <div className="service">
        <img src="p2p.svg" alt="internet error" /><p>Prepaid to Postpaid</p></div>
      <div className="service">
        <img src="help&support.svg" alt="internet error" />
        <p>Help & Support</p></div>
    </div>
  );
}

export default Services;
