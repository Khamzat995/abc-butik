import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import TabProductTwentyTwo from "../../wrappers/product/TabProductTwentyTwo";
import CountDownEight from "../../wrappers/countdown/CountDownEight";
import ProductSliderSix from "../../wrappers/product/ProductSliderSix";
import BrandLogoSliderFive from "../../wrappers/brand-logo/BrandLogoSliderFive";
import BannerThirtySeven from "../../wrappers/banner/BannerThirtySeven";
import HeroSliderThirtySix from "../../wrappers/hero-slider/HeroSliderThirtySix";
import MedicalContact from "../../components/contact/MedicalContact";
import BannerTwentyFive from "../../wrappers/banner/BannerTwentyFive";

const HomeValentinesDay = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Бутик | Добро пожаловать</title>
        <meta
          name="description"
          content="Valentines day home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderThirtySix />
        {/* banner */}
        <BannerTwentyFive spaceTopClass="pt-60" spaceBottomClass="pb-70" />
        {/* tab product */}
        <TabProductTwentyTwo spaceBottomClass="pb-60" category="fashion" />
        {/* deal counter */}
        <CountDownEight
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="December 31, 2023 23:59:00"
          backgroundImage="/assets/img/bg/deal-bg-1.webp"
        />
        {/* product slider */}
        <ProductSliderSix
          category="featured"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />

        <MedicalContact />

        {/* banner */}
        <BannerThirtySeven spaceBottomClass="pb-85" />
        {/* brand logo */}
        <BrandLogoSliderFive spaceBottomClass="pb-100" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeValentinesDay;
