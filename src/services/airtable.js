const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE;
const TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN;

const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

export async function getProducts() {
  try {
    const response = await fetch(AIRTABLE_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });

    if (!response.ok) throw new Error("Error al obtener productos");

    const data = await response.json();

    console.log("Datos crudos de Airtable:", data.records); 

    const products = data.records.map((record) => {
      const fields = record.fields;

      const precioOriginal = fields.PrecioOriginal;
      const precioOferta = fields.PrecioOferta;

      return {
        id: record.id,
        name: fields.Name,
        price: typeof precioOferta === "number" && typeof precioOriginal === "number" && precioOferta < precioOriginal
          ? precioOferta
          : precioOriginal,
        originalPrice: fields.PrecioOriginal || null,
        description: fields.Descripcion,
        category: Array.isArray(fields.Categoria)
          ? fields.Categoria.map(cat => cat.trim())
          : fields.Categoria ? [fields.Categoria.trim()] : [],
        images: Array.isArray(fields.Imagen) && fields.Imagen.length > 0
          ? fields.Imagen.map(img => img.url)
          : ["/image/default.jpg"],
        };
    });

    return products;

  } catch (error) {
    console.error("Error al obtener productos desde Airtable:", error);
    return [];
  }
}