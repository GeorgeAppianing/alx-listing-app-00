// components/property/PropertyCard.tsx
import Image from "next/image";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  const { name, price, rating, image, discount, address } = property;

  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden group">
      <div className="relative h-48 sm:h-56">
        <Image
          src={image}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="group-hover:scale-105 transition-transform"
          priority={false}
        />
        {discount && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">
          {address.city}, {address.country}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm font-medium">${price.toLocaleString()}</div>
          <div className="text-sm text-gray-600">{rating} ★</div>
        </div>

        <div className="mt-3 text-xs text-gray-500 flex gap-2 flex-wrap">
          <span className="px-2 py-0.5 rounded-full bg-gray-100">{property.offers.bed} bed</span>
          <span className="px-2 py-0.5 rounded-full bg-gray-100">{property.offers.shower} bath</span>
          <span className="px-2 py-0.5 rounded-full bg-gray-100">{property.offers.occupants} guests</span>
        </div>
      </div>
    </article>
  );
};

export default PropertyCard;
