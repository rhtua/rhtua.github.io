import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRef, useState } from "react";
import { aboutText } from "../../translation/about";
import { WorkSlide } from "./WorkSlide";
import { ProjectsSlide } from "./ProjectsSlide";
import { SkillsSlide } from "./SkillsSlide";

export const About: React.FC = () => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 62em)");
  const [active, setActive] = useState(0);
  const swiperRef = useRef<SwiperRef>(null);

  const text = aboutText;

  const slideTo = (index: number) => {
    swiperRef?.current?.swiper.slideTo(index);
  };

  return (
    <Flex direction="column" h="full" w="full">
      {isLargerThanLg && (
        <Flex
          color="#ebebeb"
          opacity={0.7}
          w="full"
          fontWeight={600}
          fontSize={{ base: "60%", md: "100%", lg: "120%" }}
          gap={16}
          justify="center"
          pt={{ base: "4%", xl: "4%" }}
        >
          <Text
            cursor="pointer"
            userSelect="none"
            onClick={() => slideTo(0)}
            color={active === 0 ? "#F04A00" : "#EBEBEB"}
            className="aboutHeader"
          >
            {text.work}
          </Text>
          <Text
            cursor="pointer"
            userSelect="none"
            onClick={() => slideTo(1)}
            color={active === 1 ? "#F04A00" : "#EBEBEB"}
            className="aboutHeader"
          >
            {text.projects}
          </Text>
          <Text
            cursor="pointer"
            userSelect="none"
            onClick={() => slideTo(2)}
            color={active === 2 ? "#F04A00" : "#EBEBEB"}
            className="aboutHeader"
          >
            {text.skills}
          </Text>
        </Flex>
      )}
      <Flex h="full" w="full" id="before">
        <Swiper
          ref={swiperRef}
          className="projectsSwiper"
          onActiveIndexChange={(swiperCore: any) => {
            setActive(swiperCore.activeIndex);
          }}
          allowTouchMove={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide key={0}>
            <Flex
              w="full"
              h="full"
              align="start"
              direction="column"
              justify={{ base: "start", lg: "center" }}
              overflowY={isLargerThanLg ? "hidden" : "auto"}
              overflowX="hidden"
            >
              <WorkSlide />
              {!isLargerThanLg && (
                <>
                  <ProjectsSlide />
                  <SkillsSlide />
                </>
              )}
            </Flex>
          </SwiperSlide>
          {isLargerThanLg && (
            <>
              <SwiperSlide key={1}>
                <ProjectsSlide />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <SkillsSlide />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </Flex>
    </Flex>
  );
};
