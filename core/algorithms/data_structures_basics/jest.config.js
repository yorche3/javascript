// jest.config.js — configuración de jest para el módulo.
// El paquete es ESM (`"type": "module"`), así que la configuración también lo es
// y el script de `npm test` arranca jest con --experimental-vm-modules.
export default {
    testEnvironment: "node",
    testMatch: ["**/test/**/*.test.js"]
};
