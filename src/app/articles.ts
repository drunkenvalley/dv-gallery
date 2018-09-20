import { Article } from './article';

export const Articles: Article[] = [
    {
        title: 'The MKII - 038 -',
        subtitle: 'A project of passion',
        text: [
            'This system was borne out of a desire for the Silverstone TJ07. When Charles Harwood revealed their Murderbox MKII in 2011,I truly wanted to build in it.',
            'It would be 2018 before I finally sat down and was ready to truly build this.',
            'I built this system to show my passion for Charles’ and Nils’ work. Without them, neither the case nor the amazing cable sleeving would exist. Without them, their way of thinking likely would not have influenced me either.',
            'You shouldn’t want to hide something. It should just be beautiful.',
            'Thank you, Charles Harwood and Nils Papke.'
        ],
        image_src: 'assets/',
        images: [
            'MKII-1.png',
            'MKII-2.png',
            'MKII-3.png',
            'MKII-4.png',
            'MKII-5.png',
            'MKII-6.png'
        ],
        thumbnail: 'MKII-thumb.png'
    },
    {
        title: 'CAD block',
        subtitle: 'Learning by replicating',
        text: [
            "What you are looking at here is the EK Supremacy Evo RGB. Bit of a mouthful, I know. More specifically, this is how I built it up in Fusion 360 based on EKWB's pictures of the item, as well as its limited technical drawings. In making this, I wanted to explore two things especially.",
            "Firstly, I wanted to illustrate how the waterblock could look with a simple vinyl sticker applied to its top. My idea would be to leave space around the badge, the perimeter as well as the G1/4 inch ports. This waterblock comes installed with an LED, and I think this product would look especially gorgeous if it was lit up in this configuration!",
            "Secondly, there was a need to learn more CAD. This was an excellent opportunity to take my tinkering so far and apply it to something fancier. Based only on a single technical drawing with very limited information, I have been working to reconstruct the waterblock rather faithfully."
        ],
        image_src: 'assets/',
        images: [
            'CADBlock-1.png',
            'CADBlock-2.png'
        ],
        thumbnail: 'CADBlock-thumb.png'
    }
];