import Swal from "sweetalert2";

export function showModal(options) {
  return Swal.fire({
    title: options.title,
    text: options.text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: options.confirmText || "Sí",
    cancelButtonText: "Cancelar",
  });
}
