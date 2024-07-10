"use client";
import * as React from "react";
import Image from "next/image";
import star from "../../public/star.jpg";
import pcnc from "../../public/pcnc.jpg";
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
import { useRouter } from "next/navigation";
import Link from "next/link";
import { BiBuildingHouse } from "react-icons/bi";

const images = [
  {
    src: star,
    alt: "S.T.A.R.",
    link: "",
    description: "",
  },
  {
    src: pcnc,
    alt: "PCNC",
    link: "",
    description: "",
  },
  {
    src: toto2,
    alt: "Soins Pastoraux",
    link: "",
    description: "",
  },
  {
    src: toto3,
    alt: "Annuaire",
    link: "",
    description: "",
  },
  {
    src: toto4,
    alt: "Cellules               de maisons",
    link: "https://cellules.vercel.app/",
    description:
      "Trouver facilement une cellule de maison à proximité de son domicile. Une cellule de maison est un moment où des bien-aimés se réunissent une fois par semaine pour revenir sur la Parole apportée le dimanche.",
  },
  {
    src: toto5,
    alt: "Covoiturage",
    link: "",
    description: "",
  },
];

const BanPage = () => {
  const router = useRouter();
  return (
    <div className=" flex flex-col items-center justify-center py-24">
      <div className="max-md:container flex max-md:justify-center max-md:items-center">
        <Carousel
          plugins={[
            Autoplay({
              delay: 3000,
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

          <CarouselPrevious className="max-md:hidden" />
          <CarouselNext className="max-md:hidden" />
        </Carousel>
      </div>
      <ScrollArea className="max-md:w-full w-1/2 whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 max-md:space-x-2 p-4">
          {images?.map((image, index) => (
            <figure key={index} className="shrink-0 flex flex-col items-center">
              <div
                onClick={() => router.push(image?.link)}
                className="hover:cursor-pointer w-40 max-md:w-24 overflow-hidden rounded-md"
              >
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
                      <AlertDialogTitle className="text-blue-800">
                        {image.alt}
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        {image?.description}
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Annuler</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() => router.push(image.link)}
                        className="bg-blue-900"
                      >
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
      <Link
        href="https://cellules.vercel.app/benelux"
        className="mt-2 underline hover:text-yellow-400 max-md:text-xs"
      >
        <div className="flex flex-col justify-center items-center">
          <BiBuildingHouse className="" size={30} />

          <p>Nos campus du Benelux</p>
        </div>
      </Link>
    </div>
  );
};

export default BanPage;

type CompoProps = {
  image: any;
};
const Compo = ({ image }: CompoProps) => {
  const router = useRouter();
  return (
    <div className="hover:cursor-pointer md:p-1 w-[600px] md:h-[400px]  max-md:w-[350px] max-md:mx-4">
      {/*       <Image src={toto1} alt="xxxx" className="aspect-video" />
       */}{" "}
      <Card onClick={() => router.push(image?.link)}>
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
