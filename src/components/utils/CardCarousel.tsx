import Image from 'next/image';

export const CardCarousel = ( { description, author, role, image } ) => {
  return (
    <div className="shadow-xl items-center z-10 bg-white px-4 py-8 rounded-xl">
      <p className="text-lg mb-6">{description}</p>
      <div className="flex items-center">
        <Image src={image} alt={author} className="rounded-full h-16 object-cover" width={64} height={64} />
        <div className="ml-4">
          <p className="text-sm">{author}</p>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}