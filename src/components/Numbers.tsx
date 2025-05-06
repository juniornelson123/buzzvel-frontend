import Image from 'next/image'

interface DataItemProps {
  image: string;
  number: string;
  text: string;
}

const DataItem = ({ image, number, text }: DataItemProps) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={image} alt="conteúdo" width={64} height={64} />
      <p className="mt-2 lg:mt-8 text-5xl lg:text-7xl text-yellow-400 font-bold">{number}</p> 
      <p className="mt-2 lg:mt-8 text-xl text-yellow-400">{text}</p> 
    </div>
  );
}

const items = [
  {
    image: "heart-circle-sharp.svg",
    number: "195",
    text: "user countries",
  },
  {
    image: "diamond.svg",
    number: "1M",
    text: "valued teachers",
  },
  {
    image: "class.svg",
    number: "17M",
    text: "happy students",
  }
]

export default function Numbers() {
  return (
    <div className="mx-auto px-8 py-4 flex h-[657px] lg:h-[373px] items-center bg-gray-900 justify-around flex-col lg:flex-row">
      {items.map(item => <DataItem {...item} key={item.image} />)}
    </div>
  );
}
