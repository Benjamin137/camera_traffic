import { Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface VehicleListItemProps {
  plate: string;
  color: string;
  image: string;
  timestamp: string;
  onViewDetails: () => void;
}

export function VehicleListItem({
  plate,
  color,
  image,
  timestamp,
  onViewDetails,
}: VehicleListItemProps) {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {/* Vehicle thumbnail */}
      <div className="w-20 h-20 rounded-md overflow-hidden bg-gray-200 flex-shrink-0">
        <ImageWithFallback
          src={image}
          alt={`Vehículo ${plate}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Vehicle info */}
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-mono font-semibold text-lg">{plate}</span>
          <span className="text-sm text-gray-500">{timestamp}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">Color: {color}</p>
      </div>

      {/* View details button */}
      <button
        onClick={onViewDetails}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <Eye className="w-4 h-4" />
        Ver Detalles
      </button>
    </div>
  );
}
