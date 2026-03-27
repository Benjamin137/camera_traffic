import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import * as Tabs from "@radix-ui/react-tabs";
import { VehicleListItem } from "../components/VehicleListItem";
import { VehicleDetailsModal } from "../components/VehicleDetailsModal";

// Mock data
const initialVehicles = [
  {
    id: "1",
    plate: "ABC-123",
    color: "Blanco",
    image: "https://images.unsplash.com/photo-1759607666152-1c49503c13a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNhciUyMGZyb250JTIwdmlld3xlbnwxfHx8fDE3NzQxMzY2MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    timestamp: "2026-03-21 10:30:45",
    cameraId: "CAM-001",
  },
  {
    id: "2",
    plate: "XYZ-789",
    color: "Negro",
    image: "https://images.unsplash.com/photo-1763789381416-7b94c5f97560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGNhciUyMHNlZGFufGVufDF8fHx8MTc3NDEzNjYyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    timestamp: "2026-03-21 10:28:12",
    cameraId: "CAM-001",
  },
  {
    id: "3",
    plate: "DEF-456",
    color: "Rojo",
    image: "https://images.unsplash.com/photo-1747457930957-d5c464908210?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBjYXIlMjB2ZWhpY2xlfGVufDF8fHx8MTc3NDA2MTY1NHww&ixlib=rb-4.1.0&q=80&w=1080",
    timestamp: "2026-03-21 10:25:33",
    cameraId: "CAM-001",
  },
  {
    id: "4",
    plate: "GHI-789",
    color: "Azul",
    image: "https://images.unsplash.com/photo-1701338130045-2a212ff261aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwY2FyJTIwYXV0b21vYmlsZXxlbnwxfHx8fDE3NzQxMzY2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    timestamp: "2026-03-21 10:20:15",
    cameraId: "CAM-001",
  },
];

const initialBlacklist = ["JKL-012", "MNO-345", "PQR-678"];

export default function CameraAdminPage() {
  const { cameraId } = useParams();
  const navigate = useNavigate();
  const [selectedVehicle, setSelectedVehicle] = useState<(typeof initialVehicles)[0] | null>(null);
  const [blacklist, setBlacklist] = useState<string[]>(initialBlacklist);
  const [newPlate, setNewPlate] = useState("");

  const handleAddToBlacklist = () => {
    if (newPlate.trim() && !blacklist.includes(newPlate.trim().toUpperCase())) {
      setBlacklist([...blacklist, newPlate.trim().toUpperCase()]);
      setNewPlate("");
    }
  };

  const handleRemoveFromBlacklist = (plate: string) => {
    setBlacklist(blacklist.filter((p) => p !== plate));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-3 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver a Cámaras
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">
            Administración - {cameraId}
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs.Root defaultValue="main" className="w-full">
          <Tabs.List className="flex gap-2 border-b border-gray-200 mb-6">
            <Tabs.Trigger
              value="main"
              className="px-6 py-3 font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 transition-colors"
            >
              Registro de Vehículos
            </Tabs.Trigger>
            <Tabs.Trigger
              value="blacklist"
              className="px-6 py-3 font-medium text-gray-600 border-b-2 border-transparent hover:text-gray-900 data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 transition-colors"
            >
              Lista Negra
            </Tabs.Trigger>
          </Tabs.List>

          {/* Main tab - Vehicle list */}
          <Tabs.Content value="main" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="font-semibold text-lg mb-4">
                Vehículos Detectados Recientemente
              </h2>
              <div className="space-y-3">
                {initialVehicles.map((vehicle) => (
                  <VehicleListItem
                    key={vehicle.id}
                    plate={vehicle.plate}
                    color={vehicle.color}
                    image={vehicle.image}
                    timestamp={vehicle.timestamp}
                    onViewDetails={() => setSelectedVehicle(vehicle)}
                  />
                ))}
              </div>
            </div>
          </Tabs.Content>

          {/* Blacklist tab */}
          <Tabs.Content value="blacklist" className="space-y-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">
                Agregar Placa a Lista Negra
              </h2>
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newPlate}
                  onChange={(e) => setNewPlate(e.target.value.toUpperCase())}
                  placeholder="Ej: ABC-123"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleAddToBlacklist();
                    }
                  }}
                />
                <button
                  onClick={handleAddToBlacklist}
                  className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Agregar
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="font-semibold text-lg mb-4">
                Placas en Lista Negra ({blacklist.length})
              </h2>
              <div className="space-y-2">
                {blacklist.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">
                    No hay placas en la lista negra
                  </p>
                ) : (
                  blacklist.map((plate) => (
                    <div
                      key={plate}
                      className="flex items-center justify-between p-4 bg-red-50 border border-red-200 rounded-md"
                    >
                      <span className="font-mono font-semibold text-red-900">
                        {plate}
                      </span>
                      <button
                        onClick={() => handleRemoveFromBlacklist(plate)}
                        className="p-2 text-red-600 hover:bg-red-100 rounded-md transition-colors"
                        title="Eliminar de lista negra"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Tabs.Content>
        </Tabs.Root>
      </main>

      {/* Vehicle details modal */}
      <VehicleDetailsModal
        isOpen={!!selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        vehicle={selectedVehicle}
      />
    </div>
  );
}
