import { FileDown } from 'lucide-react';

export function ResumeButton() {
  return (
    <a
      href="https://drive.google.com/file/d/1u0ogpSWfAOSQxh9abz3wTT1Surh6Wjol/view?usp=drive_link"
      download="Ganesh-Santhosh-Resume.pdf"
      className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
    >
      <FileDown className="w-5 h-5 mr-2" />
      Download Resume
    </a>
  );
}
