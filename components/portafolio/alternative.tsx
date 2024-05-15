'use client';
import Image from 'next/image';

interface ImageObject {
    img: string;
}

export type PropsModal = {
    title: string;
    srcImage: ImageObject[];
    description: string;
    enlace?: string;
    tecs?: string;
    modal: () => void;
    info: ({}) => void;
};

function Alternative(props: PropsModal) {
    const images = props.srcImage;
    const OpenWork = () => {
        props.modal();
        props.info({
            titulo: props.title,
            descripcion: props.description,
            imagen: images,
            link: props.enlace,
            tecs: props.tecs,
        });
    };
    return (
        <>
            <Image
                loading="lazy"
                onClick={OpenWork}
                className="object-cover h-full cursor-pointer hover:scale-105 transition-all rounded-md"
                alt={props.title}
                src={images[0].img}
                width={450}
                height={300}
            />
        </>
    );
}

export default Alternative;
