import { ImageAbout } from "@/assets/images";
import { Heading } from "@/components";
import React from "react";

const About = () => {
  return (
    <section className="py-10 lg:py-16" id="about">
      <div className="max-w-7xl mx-4 xl:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <Heading className="text-left !w-fit !mb-5">About Us</Heading>
            <p className="font-extralight">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
              commodi facere nihil odit doloremque vitae nisi cum natus
              excepturi earum laudantium, qui fuga laboriosam, temporibus
              architecto accusantium laborum? Sint perferendis unde assumenda
              voluptate in id dicta nostrum accusantium eos! Molestias harum
              velit ut exercitationem amet enim reiciendis veritatis aut libero
              molestiae saepe quas quidem, accusamus officiis tenetur
              necessitatibus voluptatum. Aut harum sequi dignissimos nam, unde
              ullam debitis libero nesciunt assumenda repellat voluptate
              incidunt praesentium necessitatibus totam voluptatem? Repellendus
              quisquam illum minus nostrum voluptatum! Repudiandae velit ab non
              minus. Rem praesentium hic, reprehenderit aperiam porro harum ab
              fugit quos? Corrupti, excepturi?
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="2000"
          >
            <img src={ImageAbout} alt="about" />
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
};

export default About;
