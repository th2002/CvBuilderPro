export interface Experience {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Education {
    degree: string;
    major: string;
    school: string;
    graduationYear: number;
}

export interface PersonalInfo {
    fullName: string ;
    email: string ;
    linkedin: string;
    phone: string;
}

export interface CVSection {
    nominee: string;
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: string[];
    tools: string[];
}

export interface CV {
    cvId: number;
    title: string;
    description: string;
    sections: CVSection;
    createDate: string;
    updateDate: string;
}

export interface User {
    id: number;
    username: string;
    password: string;
    personalInfo: PersonalInfo;
    cvList: CV[];
}
