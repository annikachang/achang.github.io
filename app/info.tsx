export interface DescriptionType {
    sub_header: string;
    body: string[];
    date: string;
}

export interface MainDescriptionType {
    header: string;
    description: DescriptionType[];
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

  
