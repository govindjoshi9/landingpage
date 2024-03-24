import { CheckCircle2 } from "lucide-react";

const WhyJoin = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Why Join?
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8 font-bold">Career Paths</p>
            <ul>
              <li className="mt-4 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">
                  Discover diverse career opportunities and paths within the
                  startup ecosystem.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8 font-bold">Exclusive Meetups</p>
            <ul>
              <li className="mt-4 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">
                  Gain access to both offline and online events for networking
                  and learning from industry experts.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
          <div className="p-10 border border-neutral-700 rounded-xl">
            <p className="text-2xl mb-8 font-bold">Startup Access</p>
            <ul>
              <li className="mt-4 flex items-center">
                <CheckCircle2 />
                <span className="ml-2">
                  Connect with accelerated startups and cohorts to explore
                  collaboration opportunities.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyJoin;
