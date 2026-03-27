import { Camera } from "lucide-react";
import { CameraCard } from "../components/CameraCard";

const cameras = [
  {
    id: "CAM-001",
    image: "https://images.unsplash.com/photo-1672104228492-c00df2055c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN0cmVldCUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NzQxMzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "online" as const,
  },
  {
    id: "CAM-002",
    image: "https://images.unsplash.com/photo-1545614976-7eb3dec9ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY2FtZXJhJTIwcm9hZCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzc0MTM2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "online" as const,
  },
  {
    id: "CAM-003",
    image: "https://images.unsplash.com/photo-1672104228492-c00df2055c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN0cmVldCUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NzQxMzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "offline" as const,
  },
  {
    id: "CAM-004",
    image: "https://images.unsplash.com/photo-1545614976-7eb3dec9ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY2FtZXJhJTIwcm9hZCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzc0MTM2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "online" as const,
  },
  {
    id: "CAM-005",
    image: "https://images.unsplash.com/photo-1672104228492-c00df2055c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMGNhbWVyYSUyMHN0cmVldCUyMHN1cnZlaWxsYW5jZXxlbnwxfHx8fDE3NzQxMzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "online" as const,
  },
  {
    id: "CAM-006",
    image: "https://images.unsplash.com/photo-1545614976-7eb3dec9ef0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFmZmljJTIwY2FtZXJhJTIwcm9hZCUyMG1vbml0b3Jpbmd8ZW58MXx8fHwxNzc0MTM2NjIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    status: "offline" as const,
  },
];

export default function CamerasPage() {
  const onlineCount = cameras.filter((c) => c.status === "online").length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Camera className="w-8 h-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Sistema de Cámaras Inteligentes
              </h1>
              <p className="text-sm text-gray-600 mt-1">
                {onlineCount} de {cameras.length} cámaras en línea
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cameras.map((camera) => (
            <CameraCard
              key={camera.id}
              id={camera.id}
              image={camera.image}
              status={camera.status}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
