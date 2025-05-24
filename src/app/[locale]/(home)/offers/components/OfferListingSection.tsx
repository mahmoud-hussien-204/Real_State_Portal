import Container from "@/components/Container";

import ProjectItem from "@/components/ProjectItem";

import SectionHeader from "@/components/SectionHeader";
import Spinner from "@/components/ui/spinner";

const OfferListingSection = ({
  offers,
  isLoadingOffers,
  offersCount,
}: {
  offers: IOffer[];
  isLoadingOffers: boolean;
  offersCount: number;
}) => {
  return (
    <section className='mt-4.5rem bg-neural-colors-50 py-4.5rem'>
      <Container>
        <SectionHeader
          title='offers.offers_listing'
          subtitle={
            isLoadingOffers
              ? "common.empty_str"
              : offersCount > 0
                ? "offers.available_offers"
                : "offers.no_offers"
          }
          count={offersCount}
        />

        <div className='mt-5 flex w-full flex-wrap justify-center gap-x-[5%] gap-y-8 md:justify-start'>
          {isLoadingOffers ? (
            <Spinner />
          ) : offers.length > 0 ? (
            offers.map((project) => (
              <ProjectItem
                project={{
                  id: project.id,
                  name_ar: project.name_ar,
                  name_en: project.name_en,
                  image: project.images,
                  offer: project.offer,
                  sale_status: project.sale_status,
                  city: project.city,
                  country: project.country,
                  area: project.area,
                  starting_price: project.starting_price,
                }}
                key={project.id}
                className='max-w-full flex-grow lg:max-w-[50rem] lg:flex-grow-0'
              />
            ))
          ) : null}
        </div>

        {/* <Pagination
          totalPages={11}
          currentPage={1}
          onPageChange={() => {}}
          className='mx-auto mt-6 max-w-full gap-6 overflow-x-auto'
        /> */}
      </Container>
    </section>
  );
};

export default OfferListingSection;
