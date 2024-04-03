import { createConnectTransport } from "@connectrpc/connect-web";

const transport = createConnectTransport({
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:9090',
});

export default transport;