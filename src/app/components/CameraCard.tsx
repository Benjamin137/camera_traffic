import { useNavigate } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CameraCardProps {
  id: string;
  image: string;
  status: "online" | "offline";
}

export function CameraCard({ id, image, status }: CameraCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/admin/${id}`)}
      className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
    >
      {/* Status indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 border-white shadow-md ${
            status === "online" ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>

      {/* Camera image */}
      <div className="aspect-video w-full bg-gray-200">
        <ImageWithFallback
          src={image}
          alt={`Cámara ${id}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Camera ID */}
      <div className="p-4">
        <p className="text-sm text-gray-600">Identificador</p>
        <h3 className="font-semibold">{id}</h3>
      </div>
    </div>
  );
}
