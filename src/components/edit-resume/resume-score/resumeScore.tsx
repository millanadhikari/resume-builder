import React, { useEffect, useState } from "react";
import Hints from "./Hints";
import { Progress } from "@/components/ui/progress";
import { useAppStore } from "@/store/store";

function ResumeScore() {
  const { resumeDetails } = useAppStore();
  const { summary } = useAppStore();
  const { employment } = useAppStore();
  const { education } = useAppStore();
  const { skills } = useAppStore();
  const { custom } = useAppStore();

  const [total, setTotal] = useState(10);
  const [emailApplied, setEmailApplied] = useState(false);
  const [jobApplied, setJobApplied] = useState(false);
  const [summaryApplied, setSummaryApplied] = useState(false);
  const [employmentApplied, setEmploymentApplied] = useState(false);
  const [educationApplied, setEducationApplied] = useState(false);
  const [skillsApplied, setSkillsApplied] = useState(false);
  const [internshipApplied, setInternshipApplied] = useState(false);

  const [isSticky, setIsSticky] = useState(false);

  const [color, setColor] = useState("bg-red-500");

  useEffect(() => {
    total >= 15 && setColor("bg-yellow-500");
    total >= 35 && setColor('bg-orange-600')
    total >= 45 && setColor('bg-pink-600')
    total >= 80 && setColor('bg-green-600')

    // total <= 15 ? setColor('red-500') : setColor('green-500')
    console.log(color);
  }, [total]);


  useEffect(() => {
    console.log("hints", custom);
  }, [custom]);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        const offsetTop = navbar.offsetTop;
        if (window.pageYOffset > offsetTop) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const emailValue = resumeDetails[0].fields[3].value;
    const jobValue = resumeDetails[0].fields[0].value;
    const summaryValue = summary;
    const employmentValue = employment[0].fields.length > 0;
    const educationValue = education[0].fields.length > 0;
    const skillsValue = skills[0].fields.length > 0;
    const internshipValue =
      custom.length > 0 &&
      custom?.map((internship: any) => {
        internship.type === 'internship' && internship.fields.length > 0;
      });

    //email
    if (emailValue && !emailApplied) {
      setTotal(total + 5); // Add 5 to the total
      setEmailApplied(true); // Set bonusApplied to true to prevent further bonus application
    }

    if (!emailValue && emailApplied) {
      setTotal(total - 5); // Add 5 to the total
      setEmailApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //job Title
    if (jobValue && !jobApplied) {
      setTotal(total + 10); // Add 10 to the total
      setJobApplied(true); // Set bonusApplied to true to prevent further bonus application
    }

    if (!jobValue && jobApplied) {
      setTotal(total - 10); // Add 10 to the total
      setJobApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //summary
    if (summaryValue && !summaryApplied) {
      setTotal(total + 15); // Add 15 to the total
      setSummaryApplied(true); // Set bonusApplied to true to prevent further bonus application
    }
    if (!summaryValue && summaryApplied) {
      setTotal(total - 15); // Add 15 to the total
      setSummaryApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //employment
    if (employmentValue && !employmentApplied) {
      setTotal(total + 25); // Add 25 to the total
      setEmploymentApplied(true); // Set bonusApplied to true to prevent further bonus application
    }
    if (!employmentValue && employmentApplied) {
      setTotal(total - 25); // Add 25 to the total
      setEmploymentApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //education
    if (educationValue && !educationApplied) {
      setTotal(total + 15); // Add 15 to the total
      setEducationApplied(true); // Set bonusApplied to true to prevent further bonus application
    }
    if (!educationValue && educationApplied) {
      setTotal(total - 15); // Add 15 to the total
      setEducationApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //skills
    if (skillsValue && !skillsApplied) {
      setTotal(total + 4); // Add 4 to the total
      setSkillsApplied(true); // Set bonusApplied to true to prevent further bonus application
    }
    if (!skillsValue && skillsApplied) {
      setTotal(total - 4); // Add 4 to the total
      setSkillsApplied(false); // Set bonusApplied to true to prevent further bonus application
    }

    //internship
    if (internshipValue && !internshipApplied) {
      setTotal(total + 2); // Add 2 to the total
      setInternshipApplied(true); // Set bonusApplied to true to prevent further bonus application
    }
    if (!internshipValue && internshipApplied) {
      setTotal(total - 2); // Add 2 to the total
      setInternshipApplied(false); // Set bonusApplied to true to prevent further bonus application
    }
  }, [resumeDetails, summary, employment, education, skills, custom]);

  return (
    <div
      id="navbar"
      className={`w-full md:max-w-[1000px] bg-white py-5  ${
        isSticky && "fixed top-0 px-5"
      }`}
    >
      <div className="flex justify-between">
        <div className="flex gap-3">
          <h2
            className={`${color} text-white font-bold px-1 rounded-md `}
          >
            {total}%
          </h2>
          <p className="text-gray-500">Resume score</p>
        </div>
        <div>
          <Hints
            emailApplied={emailApplied}
            jobApplied={jobApplied}
            summaryApplied={summaryApplied}
            employmentApplied={employmentApplied}
            educationApplied={educationApplied}
            skillsApplied={skillsApplied}
            internshipApplied={internshipApplied}
            total={total}
          />
        </div>
      </div>
      <div className="mt-3">
        <Progress value={total} className={`${color}`}/>
      </div>
    </div>
  );
}

export default ResumeScore;
