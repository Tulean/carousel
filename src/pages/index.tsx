import { useState } from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Spinner, Grid, GridItem } from "@chakra-ui/react";
import styled from "@emotion/styled";
import { Settings } from "react-slick";
import { Carousel } from "../components/Carousel";
import { useAxios } from "../hooks/useAxios";

const blurUrl =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNMqgcAAUkA43sNJscAAAAASUVORK5CYII=";

const settings: Partial<Settings> = {
  infinite: true,
  swipeToSlide: true,
  speed: 300,
  centerPadding: "0px",
  centerMode: true,
  arrows: true,
  dots: true,
  draggable: true,
};

type SlideWrapperProps = {
  isActive: boolean;
};

type Collection = {
  cover_image_url: string;
};

type Story = {
  cover_src: string;
};

const IndexPage = styled.div`
  height: 100vh;
  width: 100%;
  padding: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(88, 102, 107, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  .slick-dots {
    position: relative;
  }
  .slick-dots li button:before {
    color: white;
  }
`;

const CollectionsContainer = styled.div`
  width: 70vw;
  img {
    border-radius: 5%;
  }
`;
const SpinnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StoriesContainer = styled.div`
  width: 70vw;
  img {
    border-radius: 50%;
  }
`;
const SlideWrapper = styled.div`
  transform: scale(0.5);
  transition: transform 300ms;
  opacity: 0.5;
  ${(props: SlideWrapperProps) =>
    props.isActive ? "transform: scale(1); opacity: 1;" : null}
`;
const CarouselTitle = styled.span`
  color: #c5cbce;
  font-family: "Courier New", Courier, monospace;
  font-size: calc(12px + 1vw);
  font-style: italic;
  font-weight: bold;
`;

const Index: NextPage = () => {
  const [collectionsIndex, setCollectionsIndex] = useState(0);
  const [storiesIndex, setStoriesIndex] = useState(0);
  const [collectionsData, isCollectionLoading] = useAxios({
    url: "/api/v1/collections",
    method: "GET",
  });
  const [storiesData, isStoriesLoading] = useAxios({
    url: "/api/v1/stories",
    method: "GET",
  });

  return (
    <IndexPage>
      <Grid justifyContent={"center"} alignItems={"center"} rowGap={20}>
        <GridItem>
          <CollectionsContainer>
            <CarouselTitle>Collections</CarouselTitle>
            {isCollectionLoading ? (
              <SpinnerWrapper>
                <Spinner style={{ color: "white" }} />
              </SpinnerWrapper>
            ) : (
              <Carousel
                settings={{
                  ...settings,
                  slidesPerRow: 1,
                  slidesToShow: 3,
                  beforeChange: (current, next) => setCollectionsIndex(next),
                }}
                className="nextap-carousel-collections"
              >
                {collectionsData.data.map(
                  (collection: Collection, index: number) => {
                    return (
                      <SlideWrapper
                        isActive={index === collectionsIndex}
                        key={index}
                      >
                        <Image
                          src={collection.cover_image_url}
                          alt={collection.cover_image_url}
                          key={index}
                          width={400}
                          height={300}
                          layout="responsive"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurUrl}
                        />
                      </SlideWrapper>
                    );
                  },
                )}
              </Carousel>
            )}
          </CollectionsContainer>
        </GridItem>
        <GridItem>
          <StoriesContainer>
            <CarouselTitle>Stories</CarouselTitle>
            {isStoriesLoading ? (
              <SpinnerWrapper>
                <Spinner style={{ color: "white" }} />
              </SpinnerWrapper>
            ) : (
              <Carousel
                settings={{
                  ...settings,
                  slidesPerRow: 1,
                  slidesToShow: 5,
                  beforeChange: (current, next) => setStoriesIndex(next),
                }}
                className="nextap-carousel-stories"
              >
                {storiesData.data.map((collection: Story, index: number) => {
                  return (
                    <SlideWrapper isActive={index === storiesIndex} key={index}>
                      <Image
                        src={collection.cover_src}
                        alt={collection.cover_src}
                        width={100}
                        height={100}
                        key={index}
                        layout="responsive"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL={blurUrl}
                      />
                    </SlideWrapper>
                  );
                })}
              </Carousel>
            )}
          </StoriesContainer>
        </GridItem>
      </Grid>
    </IndexPage>
  );
};

export default Index;
