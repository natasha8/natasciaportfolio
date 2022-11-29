interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}
interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    };
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    heroImage: Image;
    backgroundInformation: string;
    profilePic: Image;
    phoneNumber: string;
    email: string;
    address: string;
    social:Social[];
}

export interface Experience extends SanityBody {
    _type: "experience";
    jobTitle: string;
    company: string;
    city: string;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    points: string[];
    technologies: Technology[];
}
export interface Education extends SanityBody {
    _type: "education";
    schoolName: string;
    logo: Image;
    description: string;
    dateStarted: date;
    dateEnded: date;
    technologies: Technology[];
}

export interface Technology extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
    
}

export interface Skill extends SanityBody {
    _type: "skill";
    image: Image;
    title: string;
}

export interface Project extends SanityBody {
    _type: "project";
    title: string;
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}
