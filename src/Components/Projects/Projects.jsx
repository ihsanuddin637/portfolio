import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="md:flex items-center justify-between gap-5 my-16 border-2 p-4 rounded-lg">
        <div>
          <img
            className="lg:max-w-[600px] h-96"
            src="/assets/projects1.png"
            alt=""
          />
        </div>
        <div>
          <h2>Hobby-Connect</h2>
          <p>
            Hobby Connect is a social platform designed to help people discover,
            join, or create local hobby groups from book clubs to hiking teams
            encouraging community building through shared interests.
          </p>
          <ul>
            <li>Global Showcase</li>
            <li>Mobile-Optimized</li>
            <li>Tailwind UI</li>
            <li>Realistic UI</li>
            <li>Lightning Speed</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-info">React</div>
            <div className="badge badge-info">Tailwind Css</div>
            <div className="badge badge-info">Firebase</div>
            <div className="badge badge-info">Express</div>
            <div className="badge badge-info">MongoDb</div>
            <div className="badge badge-info">Node</div>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="btn btn-neutral"><a target="_blank" href="https://hobby-connect.netlify.app/">Live Link</a></button>
            <button className="btn btn-neutral"><a target="_blank" href="https://github.com/ihsanuddin637/hobby-connect">Github Repository</a></button>
            <button className="btn btn-neutral">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
