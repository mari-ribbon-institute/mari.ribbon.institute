import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import RibbonWuwa from '../resources/Applications/RibbonWuwa.webp';

interface Filter {
  all: string;
  application: string;
  websites: string;
  apiForDev: string;
  database: string;
}

interface Type {
  all: string;
  utility: string;
  creative: string;
  business: string;
  commission: string;
}

interface Order {
  alphabetAscending: string;
  alphabetDescending: string;
  publishDateAscending: string;
  publishDateDescending: string;
  finalUpdateDescending: string;
  finalUpdateAscending: string;
}

interface Application {
  image: StaticImageData;
  name: string;
  version: number;
  filter: string;
  type: string;
  publishDate: string;
  finalUpdate: string;
}

export default function Applications() {
  const filters: Filter = {
    all: 'All',
    application: 'Application',
    websites: 'Websites',
    apiForDev: 'API for Dev',
    database: 'Database',
  };

  const types: Type = {
    all: 'All',
    utility: 'Utilities',
    creative: 'Creative',
    business: 'Business',
    commission: 'Commission',
  };

  const orders: Order = {
    alphabetAscending: 'A \u2191',
    alphabetDescending: 'Z \u2193',
    publishDateAscending: 'Published Date \u2191',
    publishDateDescending: 'Published Date \u2193',
    finalUpdateDescending: 'Updated Date \u2193',
    finalUpdateAscending: 'Updated Date \u2191',
  };

  const applications: Application[] = [
    {
      image: RibbonWuwa,
      name: 'Ribbon Wuwa',
      version: 0.1,
      filter: 'Websites',
      type: 'Commission',
      publishDate: '2024-09-14',
      finalUpdate: '2024-09-14',
    },

  ];

  return (
    <main>
      <h2 className="text-pageTitle font-semibold mb-5">Applications</h2>
      <div>
        <form action="">
          <input type="search" name="" id="" placeholder="Search ..." />
          <br />
          <div className="grid grid-flow-col justify-between mb-4">
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <label>Filter:</label>
              <select>
                {Object.keys(filters).map((key, index) => (
                  <option key={index} value={key}>
                    {filters[key as keyof Filter]}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <label>Type:</label>
              <select>
                {Object.keys(types).map((key, index) => (
                  <option key={index} value={key}>
                    {types[key as keyof Type]}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <label>Order:</label>
              <select>
                {Object.keys(orders).map((key, index) => (
                  <option key={index} value={key}>
                     {orders[key as keyof Order] }
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {applications.map((application, index) => (
          <div key={index} className="bg-white text-xl rounded-xl  p-4">
            <Image 
              className='rounded-xl'
              src={application.image} 
              alt={application.name} 
              width={100}
              height={100}
            />
            <h3 className="text-4xl font-extrabold">{application.name}</h3>
            <sub>Version: {application.version}</sub>
            <br />
            <sub>Filter: {application.filter}</sub>
            <br />
            <sub>Type: {application.type}</sub>
            <br />
            <sub>Publish Date: {application.publishDate}</sub>
            <br />
            <sub>Final Update: {application.finalUpdate}</sub>
          </div>
        ))}
      </div>
    </main>
  );
}