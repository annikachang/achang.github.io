export interface DescriptionType {
    sub_header: string;
    body: string[];
    date: string;
}

export interface MainDescriptionType {
    header: string;
    description: DescriptionType[];
}

export interface ProjectDescriptionType {
    svg_url: string,
    name: string,
    desc: string,
    link: string
}

export interface ContactType {
    svg_url: string,
    name: string,
    link: string
}

const educationDescription: DescriptionType[] = [
    {
        sub_header: "Candidate for Bachelor of Science @ Northeastern University",
        body: ["Computer Science and Behavioral Neuroscience Major"],
        date: "September 2021 - May 2025 (expected)"
    }
];

const experiencesDescription: DescriptionType[] = [
    {
        sub_header: "Incoming Software Development Engineer @ Amazon",
        body: [],
        date: "May - August 2024"
    },
    {
        sub_header: "Software Development Co-op @ Coverys",
        body: [],
        date: "July - December 2023"
    }
];

const organizationDescriptions: DescriptionType[] = [
    {
        sub_header: "Tech Lead and Developer @ Scout",
        body: [],
        date: "September 2022 - present"
    },
    {
        sub_header: "Writer and Web Team Member @ NUScience",
        body: [],
        date: "July - December 2023"
    }
]

export const mainDescriptionData: MainDescriptionType[] = [
    { header: 'Education',  description: educationDescription},
    {header: 'Experiences', description: experiencesDescription},
    {header: 'Organizations', description: organizationDescriptions}
];


export const projectDescriptionData: ProjectDescriptionType[] = [
    {svg_url: '../images/communa/logo.svg', name: "Communa", desc: "A short-term alternative to AirBnb for students.", link: "/project/communa"},
    {svg_url: '../images/wildflower/logo.png', name: "Wildflower & Co", desc: "A mindfulness and community-based planner for women and non-binary people.", link: "/project/wildflower"},
    {svg_url: '../images/carson/logo.png', name: "Carson", desc: "A carpooling mobile application for college students on co-op or internships.", link: "/project/carson"}
];

export const contactData: ContactType[] = [
    {svg_url: '../images/mail-logo.svg', name: "chang.ann@northeastern.edu", link: "mailto:chang.ann@northeastern.edu"},
    {svg_url: '../images/linkedin-logo.svg', name: "https://www.linkedin.com/in/annika-chang", link: "https://www.linkedin.com/in/annika-chang"},
    {svg_url: '../images/github-logo.svg', name: "https://github.com/annikachang", link: "https://github.com/annikachang"}
]

  
