import { CurrencyDollarIcon, CurrencyPoundIcon, CurrencyEuroIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

async function getData() {
  const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  return data.json();
}

const getCurrencyIcon = (symbol) => {
  switch (symbol) {
    case '&#36;':
      return <CurrencyDollarIcon className = 'w-10 h-10 text-blue-900' />;
    case '&pound;':
      return <CurrencyPoundIcon className = 'w-10 h-10 text-blue-900' />;
    case '&euro;':
      return <CurrencyEuroIcon className = 'w-10 h-10 text-blue-900' />;
    default:
      return null;
  }
};

export default async function Home() {
  const data = await getData();
  const currencies = Object.keys(data.bpi);

  return (
    <section className="py-8 bg-[#f5f5f7] sm:py-16 lg:py-20">
      <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 h-screen">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-black sm:text-4xl sm:leading-tight"> {data.chartName} </h2>
          <p className="text-md font-bold text-black sm:text-lg sm:leading-tight"> {data.disclaimer} </p>
          <p className="text-black"> {data.updated} </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8 lg:mt-16 sm:grid-cols-3 md:gap-8">
          {currencies.map((stats) => (
            <div key={stats}>
              <div className="overflow-hidden bg-white rounded-lg shadow-lg">
                <div className="px-7 py-9">
                  <div className="flex items-center">
                    {getCurrencyIcon(data.bpi[stats].symbol)}
                    <h5 className="text-2xl font-bold text-gray-900">{data.bpi[stats].code}</h5>
                  </div>
                  <p className="text-base text-gray-600 md:max-w-xs">Description: {data.bpi[stats].description}</p>
                  <p className="text-base text-gray-600 md:max-w-xs">Rate: {data.bpi[stats].rate}</p>
                  <p className="text-base text-gray-600 md:max-w-xs">Float Rate: {data.bpi[stats].rate_float}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
