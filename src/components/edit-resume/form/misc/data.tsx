import { MdOutlineDashboardCustomize } from "react-icons/md";
import { HiOutlineClipboardDocument } from "react-icons/hi2";
import { PiPottedPlantDuotone, PiSpeakerHighDuotone } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaRegChessRook } from "react-icons/fa6";
import { LiaLanguageSolid } from "react-icons/lia";

type Field = {
  name: string;
  label: string;
  value: string;
};

type PersonalData = {
  id: number;
  header: string;
  edit: boolean;
  fields: Field[];
};

interface Summary {
  header: string;
  edit: boolean;
  fields: [];
}

export const personal: PersonalData[] = [
  {
    id: 1,
    header: "Personal Data",
    edit: true,
    fields: [
      {
        name: "title",
        label: "Wanted Title",
        value: "",
      },
      {
        name: "firstName",
        label: "First Name",
        value: "",
      },
      {
        name: "lastName",
        label: "Last Name",
        value: "",
      },
      {
        name: "email",
        label: "Email",
        value: "",
      },
      {
        name: "phone",
        label: "Phone",
        value: "",
      },
      {
        name: "country",
        label: "Country",
        value: "",
      },
      {
        name: "city",
        label: "City",
        value: "",
      },
      {
        name: "address",
        label: "Address",
        value: "",
      },
      {
        name: "postalCode",
        label: "Postal Code",
        value: "",
      },
      {
        name: "drivingLicense",
        label: "Driving License",
        value: "",
      },
      {
        name: "nationality",
        label: "Nationality",
        value: "",
      },
      {
        name: "placeOfBirth",
        label: "Place of Birth",
        value: "",
      },
      {
        name: "dateOfBirth",
        label: "Date of Birth",
        value: "",
      },
    ],
  },
];

export const addSection = [
  {
    id: 1,
    title: "Custom Section",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    id: 2,
    title: "Courses",
    icon: <HiOutlineClipboardDocument />,
  },
  {
    id: 3,
    title: "Extra-curricular Activities",
    icon: <PiPottedPlantDuotone />,
  },
  {
    id: 4,
    title: "Internships",
    icon: <IoBriefcaseOutline />,
  },
  {
    id: 5,
    title: "Hobbies",
    icon: <FaRegChessRook />,
  },
  {
    id: 6,
    title: "Languages",
    icon: <LiaLanguageSolid />,
  },

  {
    id: 7,
    title: "References",
    icon: <PiSpeakerHighDuotone />,
  },
];

export const summary: Summary[] = [
  {
    header: "Professional Summary",
    edit: true,
    fields: [],
  },
];

export const education: Summary[] = [
  {
    header: "Education",
    edit: true,
    fields: [],
  },
];

export const description: any = ""

export const employment: Summary[] = [
  {
    header: "Employment",
    edit: true,
    fields: [],
  },
];

export const socialLinks: Summary[] = [
  {
    header: "Social Links",
    edit: true,
    fields: [],
  },
];

export const skills = [
  {
    header: "Skills",
    edit: true,
    fields: [],
    ability: [
      "Adaptability",
      "Detail Oriented",
      "Excellent Communication Skills",
      "Collaboration & Teamwork",
      "Creativity",
      "Decision Making",
      "Critical thinking and problem solving",
      "Management Skills",
      "Time Management Skills",
      "Marketing",
    ],
  },
]
