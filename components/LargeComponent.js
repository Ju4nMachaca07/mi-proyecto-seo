// components/LargeComponent.js
import Image from "next/image";

export default function LargeComponent() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Optimización de Imágenes en Next.js</h2>
      <p>
        Este componente demuestra cómo Next.js optimiza imágenes automáticamente:
        carga diferida (lazy loading), generación de tamaños responsivos,
        y uso de formatos modernos cuando es posible.
      </p>

      <div style={{ marginTop: "20px" }}>
        <Image
          src="/Java-logo.jpg"
          alt="Ejemplo optimizado"
          width={800}
          height={500}
          priority={false}
        />
      </div>

      <p style={{ marginTop: "20px" }}>
      </p>
    </div>
  );
}
