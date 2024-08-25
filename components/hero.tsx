import Link from "next/link";
import Balancer from "react-wrap-balancer";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import ShinyButton from "@/components/magicui/shiny-button";
import FlickeringGrid from "./magicui/flickering-grid";
import SparklesText from "@/components/magicui/sparkles-text";

const Hero = () => {
  return (
    <Section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <FlickeringGrid
        className="z-0 absolute inset-0 [mask:radial-gradient(125%_125%_at_50%_5%,#fff_25%,transparent_35%)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.5}
        flickerChance={0.1}
        height="100%"
        width="100%"
      />

      <Container className="flex flex-col items-center text-center">
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex"></div>
            <h1 className="text-center text-gray-900 dark:text-gray-50 sm:text-6xl">
            Transforming Ideas,{" "}
            <span className="inline-flex 
              leading-tight ">
                into Digital{" "}
                <SparklesText
                  text="Reality"
                  className="ml-2 leading-tight font-medium " // Added margin-left for spacing
                />
              </span>
               </h1>

            <h5 className="text-muted-foreground">
              <Balancer>
          From sleek web designs and intuitive mobile apps to robust software and stunning graphics, our expert team delivers excellence in every project. Let us help you create impactful digital experiences.{" "}
              </Balancer>
            </h5>
            <div className="mt-10 flex gap-4">
              <ShinyButton text="Get Quote" className="" href="/some-link" />
              <Button variant={"ghost"} asChild>
                <Link href="/posts">Our Services -{">"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
