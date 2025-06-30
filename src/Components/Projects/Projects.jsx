import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="flex-col lg:flex items-center justify-between gap-5 my-16 border-2 p-4 rounded-lg">
        <div>
          <img className="lg:max-w-[600px] h-96" src="/projects1.png" alt="" />
        </div>
        <div>
          <h2>Hobby-Connect</h2>
          <p>
            Hobby Connect is a social platform designed to help people
            discover, join, or create local hobby groups from book clubs to
            hiking teams encouraging community building through shared
            interests.
          </p>
          <ul>
            <li>Global Showcase</li>
            <li>Mobile-Optimized</li>
            <li>Tailwind UI</li>
            <li>Realistic UI</li>
            <li>Lightning Speed</li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-info">react</div>
            <div className="badge badge-info">Tailwind Css</div>
            <div className="badge badge-info">Firebase</div>
            <div className="badge badge-info">Express</div>
            <div className="badge badge-info">MongoDb</div>
            <div className="badge badge-info">Node</div>
          </div>
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Details
          </button>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Hello!</h3>
              <p className="py-4">Press ESC key or click outside to close</p>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Projects;
