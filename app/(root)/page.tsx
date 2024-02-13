import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {

  const page = Number(searchParams?.page || 1);
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category: category,
    page,
    limit: 6,
  });

  return (

    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0 bg-dotted-pattern">
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
            src='/assets/images/Burma_Hero.png'
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
          NUG | CRPH | OFP Fundraising Programs
        </h3>
        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection 
          data={events?.data}
          emptyTitle='No Events Found!'
          emptyStateSubtext='Come Back Later!'
          collectionType='All_Events'
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
