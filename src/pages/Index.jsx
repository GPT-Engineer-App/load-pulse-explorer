import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Paw, Heart, Award, DogBowl } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const dogFacts = [
  "Dogs have a sense of time and miss you when you're gone.",
  "A dog's nose print is unique, much like a human's fingerprint.",
  "Dogs can understand up to 250 words and gestures.",
  "Puppies are born blind, deaf, and toothless.",
  "A dog's average body temperature is 101.2°F (38.4°C).",
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 text-center flex items-center justify-center text-purple-800">
          <Paw className="mr-2 text-yellow-500" /> Pawsome Dog World
        </h1>
        
        <Carousel className="mb-8">
          <CarouselContent>
            {[
              "https://images.unsplash.com/photo-1517849845537-4d257902454a",
              "https://images.unsplash.com/photo-1534361960057-19889db9621e",
              "https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
            ].map((src, index) => (
              <CarouselItem key={index}>
                <img 
                  src={src}
                  alt={`Cute dog ${index + 1}`}
                  className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Heart className="mr-2 text-red-500" /> What Makes Dogs Special?
              </CardTitle>
              <CardDescription>Characteristics that make dogs unique companions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                <li>Loyal and affectionate nature</li>
                <li>Ability to understand human emotions</li>
                <li>Diverse breeds with unique traits</li>
                <li>Trainable for various tasks and roles</li>
                <li>Provide companionship and reduce stress</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 text-yellow-500" /> Fun Dog Facts
              </CardTitle>
              <CardDescription>Interesting tidbits about our canine friends</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-6 space-y-2">
                {dogFacts.map((fact, index) => (
                  <li key={index}>{fact}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center">
              <DogBowl className="mr-2 text-blue-500" /> Popular Dog Breeds
            </CardTitle>
            <CardDescription>Some of the most beloved dog breeds worldwide</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="large">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="large">Large Breeds</TabsTrigger>
                <TabsTrigger value="medium">Medium Breeds</TabsTrigger>
                <TabsTrigger value="small">Small Breeds</TabsTrigger>
              </TabsList>
              <TabsContent value="large">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Labrador Retriever", "German Shepherd", "Golden Retriever", "Rottweiler", "Doberman", "Great Dane"].map((breed) => (
                    <div key={breed} className="bg-white p-3 rounded-md shadow text-center hover:bg-yellow-100 transition-colors">
                      {breed}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="medium">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["Bulldog", "Boxer", "Collie", "Siberian Husky", "Australian Shepherd", "Beagle"].map((breed) => (
                    <div key={breed} className="bg-white p-3 rounded-md shadow text-center hover:bg-yellow-100 transition-colors">
                      {breed}
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="small">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {["French Bulldog", "Poodle", "Chihuahua", "Pug", "Yorkshire Terrier", "Shih Tzu"].map((breed) => (
                    <div key={breed} className="bg-white p-3 rounded-md shadow text-center hover:bg-yellow-100 transition-colors">
                      {breed}
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button 
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Heart className="mr-2" /> Like this page ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
