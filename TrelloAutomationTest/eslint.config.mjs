import js from "@eslint/js";
import eslintPluginExample from "./plugins/eslint-plugin-example.js";

export default [
    
    /* js.configs.recommended,
    {
        
        ignores: ['reports/*', 'src/config', 'src/enviroments', 'src/po'],
        plugins: {"example": eslintPluginExample},
        files: ['src/tests/*'],
        rules: {
            "example/no-empty-catch": "warn",
            "no-undef" : "off", 
        },
    }, */
    {
        plugins: {"example": eslintPluginExample},
        files: ['src/tests/*'],
        rules: {
            "example/no-empty-catch": "warn",
            "no-undef" : "off", 
        },
    }
];
