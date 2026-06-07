CORRECCION INSTALACION VERCEL - TECNO ACERO PANAMA

Problema corregido:
El package-lock.json anterior tenia URLs internas de instalacion que Vercel no puede descargar. Por eso se quedaba trabado en "Installing dependencies".

Como aplicar:
1. Sube estos archivos a la raiz del repositorio, reemplazando el package-lock.json existente.
2. Confirma que .npmrc quede tambien en la raiz.
3. Haz commit y redeploy en Vercel.

No se tocó el diseño ni la estructura de la web; este ZIP solo corrige la instalacion de dependencias.
