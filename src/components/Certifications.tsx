
import { Award, Calendar, ExternalLink } from 'lucide-react';

const certifications = [
  {
    name: 'BUILD YOUR OWN STATIC WEBSITE',
    issuer: 'Nxt wave',
    date: 'Oct 2022',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HNBGETAQFH.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HNBGETAQFH.png'
  },
  {
    name: 'BUILD YOUR OWN RESPONSIVE WEBSITE',
    issuer: 'Nxt wave',
    date: 'Oct 2022',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/EZCYYDVLHX.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/EZCYYDVLHX.png'
  },
  {
    name: 'Python Programming Language',
    issuer: 'Nxt wave',
    date: 'Sep 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/RVQUJWXZLR.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/RVQUJWXZLR.png'
  },
  {
    name: 'BUILD YOUR OWN DYNAMIC WEBSITE',
    issuer: 'Nxt wave',
    date: 'Nov 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/UBBDNNNIES.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/UBBDNNNIES.png'
  },
  {
    name: 'Introduction To Database',
    issuer: 'Nxt wave',
    date: 'Nov 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HUGXLGDFKW.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HUGXLGDFKW.png'
  },
  {
    name: 'JavaScript Essentials',
    issuer: 'Nxt wave',
    date: 'Dec 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HSUOTHLIBQ.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/HSUOTHLIBQ.png'
  },
  {
    name: 'Responsive Web design using Felexbox',
    issuer: 'Nxt wave',
    date: 'Dec 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/ZTRBNBPKON.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/ZTRBNBPKON.png'
  },
  {
    name: 'Git & Git command Lines',
    issuer: 'Nxt wave',
    date: 'Dec 2023',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/GHKPHHOKLU.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/GHKPHHOKLU.png'
  },
  {
    name: 'NODE.JS',
    issuer: 'Nxt wave',
    date: 'Feb 2024',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KKXYRRQBKK.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/KKXYRRQBKK.png'
  },
  {
    name: 'REACT>JS',
    issuer: 'Nxt wave',
    date: 'May 2024',
    credentialId: 'AWS-SAA-1234',
    link: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/NMKHYXQRYF.png',
    image: 'https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/NMKHYXQRYF.png'
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => (
            <div key={cert.credentialId} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{cert.name}</h3>
                    <p className="text-gray-600">{cert.issuer}</p>
                  </div>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{cert.date}</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}