import React from "react";
import { Link } from "react-router-dom";

function CtaSection() {
  return (
    <div className="relative min-w-full mt-16" >
      <div className=" flex flex-row pb-24 justify-center ">
        <h3 className="w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          auctor, lorem vitae porttitor pharetra, mauris nibh luctus ligula, at
          gravida erat tellus sit amet eros. Aliquam dapibus libero mattis quam
          sollicitudin consectetur sit amet quis ex.
        </h3>
        <Link to='/contact'>
        <button className="bg-slate-600 text-white rounded-md p-2 ml-20 hover:bg-slate-800" >Apply Now</button>
        </Link>
      </div>

      <div className="flex flex-row w-full">
        <div className="px-4 w-1/3">
          <img src="src\assets\pexels-bruna-sonore-861598-1754853.jpg" className="size-96 rounded-full content-center"></img>
          <h5 className="pt-8 text-lg font-semibold">Commercial</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            auctor, lorem vitae porttitor pharetra, mauris nibh luctus ligula,
            at gravida erat tellus sit amet eros. Aliquam dapibus libero mattis
            quam sollicitudin consectetur sit amet quis ex. Sed vitae sapien ac
            magna laoreet ullamcorper. Aliquam mi mi, dictum sed consequat a,
            dapibus pulvinar diam. Vivamus vulputate tincidunt tellus vel
            consequat. Mauris imperdiet vitae velit id placerat. Aliquam erat
            volutpat. Maecenas nibh lorem, accumsan rutrum leo eget, viverra
            consequat enim. Aliquam dictum, sapien id congue fringilla, risus
            eros suscipit dolor, nec tempus diam quam sed urna.
          </p>
        </div>
        <div className="px-4 w-1/3">
          <img src="src\assets\pexels-julia-kuzenkov-442028-1974596.jpg" className="size-96 rounded-full content-center"></img>
          <h5 className="pt-8 text-lg font-semibold">Exterior</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            auctor, lorem vitae porttitor pharetra, mauris nibh luctus ligula,
            at gravida erat tellus sit amet eros. Aliquam dapibus libero mattis
            quam sollicitudin consectetur sit amet quis ex. Sed vitae sapien ac
            magna laoreet ullamcorper. Aliquam mi mi, dictum sed consequat a,
            dapibus pulvinar diam. Vivamus vulputate tincidunt tellus vel
            consequat. Mauris imperdiet vitae velit id placerat. Aliquam erat
            volutpat. Maecenas nibh lorem, accumsan rutrum leo eget, viverra
            consequat enim. Aliquam dictum, sapien id congue fringilla, risus
            eros suscipit dolor, nec tempus diam quam sed urna.
          </p>
        </div>
        <div className="px-4 w-1/3">
          <img src="src\assets\pexels-pixabay-210464.jpg" className="size-96 rounded-full content-center"></img>
          <h5 className="pt-8 text-lg font-semibold">Interior</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            auctor, lorem vitae porttitor pharetra, mauris nibh luctus ligula,
            at gravida erat tellus sit amet eros. Aliquam dapibus libero mattis
            quam sollicitudin consectetur sit amet quis ex. Sed vitae sapien ac
            magna laoreet ullamcorper. Aliquam mi mi, dictum sed consequat a,
            dapibus pulvinar diam. Vivamus vulputate tincidunt tellus vel
            consequat. Mauris imperdiet vitae velit id placerat. Aliquam erat
            volutpat. Maecenas nibh lorem, accumsan rutrum leo eget, viverra
            consequat enim. Aliquam dictum, sapien id congue fringilla, risus
            eros suscipit dolor, nec tempus diam quam sed urna.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CtaSection;
