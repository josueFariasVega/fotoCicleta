// Gallery Data Source - Shared between Home and Portfolio pages

export interface GalleryItem {
    size: "large" | "tall" | "normal" | "wide";
    type: "photo" | "video";
    category: "FOTOGRAFÍA" | "AUDIOVISUAL" | "DOCUMENTAL";
    title: string;
    image: string;
    videoUrl?: string; // For videos: local path (/videos/file.mp4) or embed URL
}

export const galleryItems: GalleryItem[] = [
    {
        size: "large",
        type: "video",
        category: "AUDIOVISUAL",
        title: "URBAN MOVEMENT 24",
        image: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?q=80&w=2000&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
        size: "tall",
        type: "photo",
        category: "FOTOGRAFÍA",
        title: "SILENT ARCHITECTURE",
        image: "https://images.unsplash.com/photo-1486716985456-630ee40902f3?q=80&w=2000&auto=format&fit=crop",
    },
    {
        size: "normal",
        type: "photo",
        category: "FOTOGRAFÍA",
        title: "NEON ESSENCE",
        image: "https://images.unsplash.com/photo-1550257018-c2909e334ae8?q=80&w=1000&auto=format&fit=crop",
    },
    {
        size: "normal",
        type: "video",
        category: "AUDIOVISUAL",
        title: "TECH SYSTEMS",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
        size: "wide",
        type: "video",
        category: "DOCUMENTAL",
        title: "ROOTS OF CULTURE",
        image: "https://images.unsplash.com/photo-1533575770077-052fa2c609fc?q=80&w=2000&auto=format&fit=crop",
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
    },
    {
        size: "large",
        type: "photo",
        category: "FOTOGRAFÍA",
        title: "HUMAN CANVAS",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2000&auto=format&fit=crop",
    },
];

// Helper to check if video is local file or embed
export const isLocalVideo = (url: string): boolean => {
    return url.startsWith('/') || url.startsWith('./');
};
