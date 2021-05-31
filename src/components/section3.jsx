import Reat from "react";
import "../css/section3.css";
export default function Section3() {
  return (
    <div className=" container-fluid section3 ">
      <div className="left">
        <div className="content">
          <p>
            Rapyder is a Global AWS Consulting Partner, providing Cloud
            Consulting, Implementation, and Managed Services to Enterprises,
            SMBs, and Startups. As an Advanced AWS Consulting Partner, we have
            deep expertise in Managed Amazon cloud services, Cloud Migration,
            DevOps and Well-Architected Framework. With end-to-end cloud
            solutions across industry verticals, we’re a cloud partner that is
            agile, precise, innovative and quick with solutions providing 24/7
            support & monitoring for our services.
          </p>
          <button>Know More</button>
        </div>
      </div>
      <div className="right">
        <img
          src="https://www.rapyder.com/wp-content/uploads/2019/12/premium-AWS-cloud-service-provider-1.jpeg"
          alt="img-2"
        />
      </div>
    </div>
  );
}
