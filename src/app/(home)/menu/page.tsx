"use client";

import { useLanguage } from "@/store/LanguageContext";
import Products from "@/components/level-1/Products";
import HeroSectionCustomMenu from "@/custom/cus-components/HeroSectionCustomMenu";
import CategorySliderLight from "@/components/level-1/CategorySliderLight";
import HeroSectionCustom from "@/custom/cus-components/HeroSectionCustom";
import ProductMenuList from "@/components/level-1/ProductMenuList";

//import { TnewProductSchema } from '@/lib/types';
// import {  TnewProductSchema } from '@/lib/type/productType';

export default function Page() {
  // const products = await fetchProducts();

  const { lang } = useLanguage();

  if (!lang) {
    return (
      <div className="text-center p-4 text-gray-500">Loading language...</div>
    );
  }

  return (
    <>
        <main className=" text-gray-900 font-sans">
        {/* Foreground Content */}
     
             <HeroSectionCustom />

          {/* Order Menu Button */}
   <ProductMenuList />
    
      </main>
    </>
  );
}
