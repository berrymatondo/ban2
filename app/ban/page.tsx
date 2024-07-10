"use client";
import * as React from "react";
import Image from "next/image";
import toto from "../../public/toto.png";
import toto1 from "../../public/toto1.jpg";
import toto2 from "../../public/toto2.jpg";
import toto3 from "../../public/toto3.jpg";
import toto4 from "../../public/toto4.jpg";
import toto5 from "../../public/toto5.jpg";
import Autoplay from "embla-carousel-autoplay";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const images = [
  {
    src: toto,
    alt: "S.T.A.R.",
  },
  {
    src: toto1,
    alt: "PCNC",
  },
  {
    src: toto2,
    alt: "Soins Pastoraux",
  },
  {
    src: toto3,
    alt: "Annuaire",
  },
  {
    src: toto4,
    alt: "Cellule de maison",
  },
  {
    src: toto5,
    alt: "Covoiturage",
  },
];

const BanPage = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-24">
      <div className="flex">
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          opts={{ align: "start", loop: true }}
          className="w-[600px] max-md:w-[350px]"
        >
          <CarouselContent className="">
            {/*             {Array.from({ length: 5 }).map((_, index) => (
             */}{" "}
            {images?.map((image, index) => (
              <CarouselItem className="" key={index}>
                <Compo image={image} />
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* 
          <CarouselContent>
            <CarouselItem>
              {" "}
              <Compo />
            </CarouselItem>
            <CarouselItem>
              <Compo />
            </CarouselItem>
            <CarouselItem>
              {" "}
              <Compo />
            </CarouselItem>
          </CarouselContent> */}

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <ScrollArea className="max-md:w-full w-1/2 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 max-md:space-x-2 p-4">
          {images?.map((image, index) => (
            <figure key={index} className="shrink-0 flex flex-col items-center">
              <div className="w-40 max-md:w-24 overflow-hidden rounded-md">
                <Image
                  src={image.src}
                  alt={`Photo by ${image.src}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  /*            width={40}
                  height={60} */
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                {/*                 <span className="font-semibold text-foreground">
                  {image.alt}
                </span> */}
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button className="max-md:text-xs" variant="outline">
                      {" "}
                      {image.alt}
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>{image.alt}</AlertDialogTitle>
                      <AlertDialogDescription>
                        Information sur {image.alt}.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction className="">
                        Continuer
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default BanPage;

type CompoProps = {
  image: any;
};
const Compo = ({ image }: CompoProps) => {
  return (
    <div className="md:p-1 w-[600px] md:h-[400px]  max-md:w-[350px] max-md:mx-4">
      {/*       <Image src={toto1} alt="xxxx" className="aspect-video" />
       */}{" "}
      <Card>
        <CardContent className="relative flex aspect-video items-center justify-center overflow-hidden">
          {/*           <span className="text-4xl font-semibold">{index + 1}</span>
           */}{" "}
          <Image src={image.src} alt="xxxx" className="absolute" />
          <p className="text-6xl max-md:text-4xl font-semibold text-white z-10 text-center">
            {image.alt}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
