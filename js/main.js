const app = {
    init() {
        this.renderNavigation();
        this.bindEvents();
        this.renderInitialContent();
    },

    renderNavigation() {
        const nav = document.getElementById('apiNav');
        apiData.endpoints.forEach(category => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'mb-4';
            
            const categoryTitle = document.createElement('h3');
            categoryTitle.className = 'font-medium text-gray-900 mb-2';
            categoryTitle.textContent = category.name;
            
            const endpointList = document.createElement('ul');
            endpointList.className = 'space-y-1';
            
            category.endpoints.forEach(endpoint => {
                const li = document.createElement('li');
                const link = document.createElement('a');
                link.href = `#${endpoint.id}`;
                link.className = 'text-gray-600 hover:text-gray-900 block px-2 py-1 text-sm rounded-md hover:bg-gray-100';
                link.textContent = endpoint.name;
                link.dataset.endpointId = endpoint.id;
                li.appendChild(link);
                endpointList.appendChild(li);
            });
            
            categoryDiv.appendChild(categoryTitle);
            categoryDiv.appendChild(endpointList);
            nav.appendChild(categoryDiv);
        });
    },

    renderEndpoint(endpoint) {
        const content = document.getElementById('apiContent');
        const html = `
            <div class="space-y-4">
                <div class="border-b pb-4">
                    <h2 class="text-2xl font-bold">${endpoint.name}</h2>
                    <div class="flex items-center mt-2">
                        <span class="px-2 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded">${endpoint.method}</span>
                        <span class="ml-2 text-gray-600">${endpoint.path}</span>
                    </div>
                </div>
                
                <div>
                    <h3 class="text-lg font-medium mb-2">Description</h3>
                    <p class="text-gray-600">${endpoint.description}</p>
                </div>

                ${this.renderParameters(endpoint)}
                ${this.renderResponses(endpoint)}
            </div>
        `;
        content.innerHTML = html;
        hljs.highlightAll();
    },

    renderParameters(endpoint) {
        if (!endpoint.parameters?.length) return '';
        
        return `
            <div>
                <h3 class="text-lg font-medium mb-2">Parameters</h3>
                <div class="bg-gray-50 rounded-lg p-4">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="text-left text-sm font-medium text-gray-500">Name</th>
                                <th class="text-left text-sm font-medium text-gray-500">Type</th>
                                <th class="text-left text-sm font-medium text-gray-500">Required</th>
                                <th class="text-left text-sm font-medium text-gray-500">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${endpoint.parameters.map(param => `
                                <tr>
                                    <td class="text-sm text-gray-900">${param.name}</td>
                                    <td class="text-sm text-gray-500">${param.type}</td>
                                    <td class="text-sm text-gray-500">${param.required ? 'Yes' : 'No'}</td>
                                    <td class="text-sm text-gray-500">${param.description}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        `;
    },

    renderResponses(endpoint) {
        return `
            <div>
                <h3 class="text-lg font-medium mb-2">Responses</h3>
                ${Object.entries(endpoint.responses).map(([code, response]) => `
                    <div class="mb-4">
                        <h4 class="text-md font-medium mb-2">
                            <span class="px-2 py-1 text-sm font-medium bg-gray-100 rounded">${code}</span>
                            <span class="ml-2">${response.description}</span>
                        </h4>
                        <pre><code class="language-json">${JSON.stringify(response.example, null, 2)}</code></pre>
                    </div>
                `).join('')}
            </div>
        `;
    },

    generatePostmanCollection() {
        const collection = {
            info: {
                name: apiData.info.name,
                description: apiData.info.description,
                schema: "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
            },
            item: apiData.endpoints.map(category => ({
                name: category.name,
                item: category.endpoints.map(endpoint => ({
                    name: endpoint.name,
                    request: {
                        method: endpoint.method,
                        header: [],
                        url: {
                            raw: `{{baseUrl}}${endpoint.path}`,
                            host: ["{{baseUrl}}"],
                            path: endpoint.path.split('/').filter(Boolean)
                        },
                        description: endpoint.description
                    }
                }))
            }))
        };

        const blob = new Blob([JSON.stringify(collection, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'api-collection.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    },

    bindEvents() {
        document.getElementById('apiNav').addEventListener('click', (e) => {
            if (e.target.dataset.endpointId) {
                e.preventDefault();
                const endpoint = this.findEndpoint(e.target.dataset.endpointId);
                if (endpoint) {
                    this.renderEndpoint(endpoint);
                }
            }
        });

        document.getElementById('exportPostman').addEventListener('click', () => {
            this.generatePostmanCollection();
        });
    },

    findEndpoint(id) {
        for (const category of apiData.endpoints) {
            const endpoint = category.endpoints.find(ep => ep.id === id);
            if (endpoint) return endpoint;
        }
        return null;
    },

    renderInitialContent() {
        const content = document.getElementById('apiContent');
        content.innerHTML = `
            <div class="text-center py-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">${apiData.info.name}</h2>
                <p class="text-gray-600">${apiData.info.description}</p>
                <p class="text-sm text-gray-500 mt-2">Version: ${apiData.info.version}</p>
            </div>
        `;
    }
};

document.addEventListener('DOMContentLoaded', () => app.init()); 