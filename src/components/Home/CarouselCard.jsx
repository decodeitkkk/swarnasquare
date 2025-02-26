import { Carousel } from "../ui/carousel";

export function CarouselDemo() {
    const slideData = [
        {
            title: "Mystic Mountains",
            button: "Explore Component",
            src: "/ring.jpg",
            type: "image",
        },
        {
            title: "Urban Dreams",
            button: "Explore Component",
            src: "/ring2.jpg",
            type: "video",
        },
        {
            title: "Neon Nights",
            button: "Explore Component",
            src: "/ring.jpg",
            type: "image",
        },
        {
            title: "Desert Whispers",
            button: "Explore Component",
            src: "/ring2.jpg",
            type: "video",
        },
    ];
    return (
        <div className="relative overflow-hidden w-full h-full py-20">
            <Carousel slides={slideData} />
        </div>
    );
}
