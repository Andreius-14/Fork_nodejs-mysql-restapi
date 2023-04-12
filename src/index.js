import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT);
console.log(`Server on port http://localhost:${PORT}`);


// 🌱 Importa config.js  - Usa sus Variables 
// 🌱 Importa App.js     - El codigo esta separado, App esta la configuracion de las rutas

// 🌱 Index.js  - Crea el puerto donde ira la Conf de las Rutas