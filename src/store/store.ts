import { create } from "zustand";
import { ReactNode } from "react";
import {
  description,
  education,
  employment,
  personal,
  skills,
  socialLinks,
  summary,
} from "@/components/edit-resume/form/misc/data";

type Field = {
  name: string;
  label: string;
  value: string;
};

type SummaryFields = {};

interface Personal {
  id: number;
  header: string;
  edit: boolean;
  fields: Field[];
}

interface Summary {
  header: string;
  edit: boolean;
  fields: any[];
}

interface Description {
  description: string;
}
interface AddSection {
  id: string;
  title: string;
  icon: ReactNode;
}

interface Skills {
  header: string;
  edit: boolean;
  fields: any[];
  ability: string[];
}

interface AppState {
  resumeDetails: Personal[];
  setResumeDetails: (data: Personal[]) => void;

  summary: string;
  setSummary: (data: string) => void;

  education: Summary[];
  setEducation: (data: any) => void;

  employment: Summary[];
  setEmployment: (data: any) => void;

  skills: Skills[];
  setSkills: (data: any) => void;

  socialLinks: Summary[];
  setSocialLinks: (data: any) => void; // skills:Summary

  custom: any[];
  setCustom: (data: any) => void; // skills:Summary

  template:any;
  setTemplate:(data:any) => void
}

export const useAppStore = create<AppState>()((set) => ({
  resumeDetails: personal,
  setResumeDetails: (data) =>
    set((state) => ({ ...state, resumeDetails: data })),

  summary: "",
  setSummary: (data) => set((state) => ({ summary: data })),

  education: education,
  setEducation: (data) => set((state) => ({ ...state, education: data })),

  employment: employment,
  setEmployment: (data) => set((state) => ({ ...state, employment: data })),

  skills: skills,
  setSkills: (data) => set((state) => ({ ...state, skills: data })),

  socialLinks: socialLinks,
  setSocialLinks: (data) => set((state) => ({ ...state, socialLinks: data })),

  custom: [],
  setCustom: (data) => set((state) => ({ ...state, custom: data })),
  
  template: {},
  setTemplate: (data) => set((state) => ({template:data}))
}));
