import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

interface VehicleDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  vehicle: {
    plate: string;
    color: string;
    image: string;
    timestamp: string;
    cameraId: string;
  } | null;
}

export function VehicleDetailsModal({
  isOpen,
  onClose,
  vehicle,
}: VehicleDetailsModalProps) {
  if (!vehicle) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 z-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl z-50">
          <div className="flex items-center justify-between mb-4">
            <Dialog.Title className="text-xl font-semibold">
              Detalles del Vehículo
            </Dialog.Title>
            <Dialog.Close asChild>
              <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          <div className="space-y-4">
            {/* Vehicle image */}
            <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
              <img
                src={vehicle.image}
                alt={`Vehículo ${vehicle.plate}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vehicle details */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Placa</p>
                <p className="font-mono font-semibold text-lg">{vehicle.plate}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Color</p>
                <p className="font-semibold">{vehicle.color}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Fecha y Hora</p>
                <p className="font-semibold">{vehicle.timestamp}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Cámara</p>
                <p className="font-semibold">{vehicle.cameraId}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
