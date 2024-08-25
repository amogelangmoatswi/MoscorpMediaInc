// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import { TracingBeam } from "./ui/tracing-beam";

// Asset imports
import Placeholder from "@/public/aboutus.jpg";


const AboutUs = () => {
  return (
    <Section id="about-us">
      <Container>

      <TracingBeam className="px-6">
        <div className="not-prose relative flex w-full overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            layout="responsive" // This ensures the image scales proportionally
            objectFit="contain" // This ensures the whole image is visible
          />
        </div>

       
        <h2>About Moscorp Media Inc.</h2>
        <p><strong>Innovators. Creators. Visionaries.</strong></p>
        <p>
          At Moscorp Media Inc., we are more than just a digital agency; we are your
          strategic partner in the ever-evolving world of technology. Founded with a
          passion for innovation and a commitment to excellence, our mission is to
          empower businesses to thrive in the digital landscape.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>
            <strong>Expertise:</strong> Our team is composed of industry
            professionals with extensive experience in their respective fields. We
            stay ahead of the curve by continually updating our skills and
            knowledge.
          </li>
          <li>
            <strong>Innovation:</strong> We are passionate about leveraging the
            latest technologies to provide our clients with innovative solutions
            that drive success.
          </li>
          <li>
            <strong>Collaboration:</strong> We view our clients as partners. We work
            closely with you throughout the project to ensure that the final product
            aligns with your vision and goals.
          </li>
          <li>
            <strong>Results-Driven:</strong> Our ultimate goal is to help you
            achieve your business objectives. We measure our success by the impact
            we create for your brand.
          </li>
        </ul>

        <h3>Let’s Create Together</h3>
        <p>
          Ready to take your digital presence to the next level? Let’s collaborate
          and bring your ideas to life. <a href="/contact">Contact us</a> today to
          start your journey with Moscorp Media Inc.
        </p>
        </TracingBeam>
      </Container>
    </Section>
  );
};

export default AboutUs;
