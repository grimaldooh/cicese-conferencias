import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSpacingProps {
  itemCount?: number;
}

export default function CarouselSpacing({ itemCount = 5 }: CarouselSpacingProps): React.ReactElement {
  // Create an array with the specified length for mapping
  const items: number[] = Array.from({ length: itemCount }, (_, i) => i + 1);

  return (
    <Carousel className="w-full max-w-sm">
      <CarouselContent className="-ml-1">
        {items.map((item: number, index: number) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-2xl font-semibold">{item}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}