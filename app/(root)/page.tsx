import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Participate: Burma Spring Fundraising Events Globally!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              With your support, Federal Democracy in Burma is JUST ONE CLICK away!
            </p>
            <Button 
              size='lg'
              asChild
              className="button w-full sm:w-fit"
            >
              <Link href='#events'>
                Join Events!
              </Link>
            </Button>
          </div>

          <Image
            src='/assets/images/Burma_hero.jpg'
            width={1000}
            height={1000}
            alt="hero image"
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh] rounded-xl"
          />
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h3 className="h3-bold">
          Explore Events: <br />
          CRPH - OFP Fundraising Program
        </h3>
        <div>
          Search
          Category Filter
        </div>
      </section>
    </>
  );
}
