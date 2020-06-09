async function getFinalResponse(res) {
    if (res.status === 200) {
        const response = await res.json();
        return response;
    }
    return res;
}

export default function () {
    return {
        post: async (url, data, options = null) => {
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                ...options
            });
            return getFinalResponse(res);            
        },
        get: async (url) => {
            const res = await fetch(url);
            return getFinalResponse(res);
        }
    }
}