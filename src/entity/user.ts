interface Experience {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Education {
    degree: string;
    major: string;
    school: string;
    graduationYear: number;
}

interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
}

interface CVSection {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: string[];
    tools: string[];
}

interface CV {
    cvId: number;
    title: string;
    sections: CVSection;
}

export interface User {
    id: number;
    username: string;
    password: string;
    personalInfo: PersonalInfo;
    cvList: CV[];
}
