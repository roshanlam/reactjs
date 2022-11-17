export const sendData = async (data: any, url: string) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
};