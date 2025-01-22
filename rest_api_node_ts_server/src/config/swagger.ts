import swaggerJSDoc from "swagger-jsdoc"
import { SwaggerUiOptions } from "swagger-ui-express"

const options: swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: "3.0.2",
        tags: [
            {
                name: "Products",
                description: "API operations related to products"
            }
        ],
        info: {
            title: "REST API Node.js / Express / TypeScript",
            version: "1.0",
            description: "API Docs for Products"
        }
    },
    apis: ["./src/router.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOption: SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url('https://img.freepik.com/free-vector/hand-drawn-flat-design-anarchy-symbol_23-2149244363.jpg');
            height: 80px;
            width: auto;
        }

        .swagger-ui .topbar {
            background-color: #2b3b45;
        }
    `,
    customSiteTitle: "REST API Docs Express / TypeScript"
}

export default swaggerSpec
export { swaggerUiOption }
