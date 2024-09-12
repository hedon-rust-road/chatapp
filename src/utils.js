import { invoke } from "@tauri-apps/api/core";

const URL_BASE = "http://localhost:6688/api";
const SSE_URL = "http://localhost:6687/events";

let config = null;

try {
    if (invoke) {
        config = await invoke('get_config');
    }
} catch (error) {
    console.warn('failed to get config: fallback');
}

const getUrlBase = () => {
    if (config && config.server.chat) {
        return config.server.chat;
    }
    return URL_BASE;
}

const getSSEBase = () => {
    if (config && config.server.notification) {
        return config.server.notification;
    }
    return SSE_URL;
}

const initSSE = (store) => {
    let sse_base = getSSEBase();
    let url = `${sse_base}?token=${store.state.token}`;
    const sse = new EventSource(url);

    sse.addEventListener("NewMessage", (e) => {
        let data = JSON.parse(e.data);
        console.log('message:', data);
        delete data.event;
        store.commit('addMessage', {channelId: data.chatId, message: data});
    })

    sse.onmessage = (event) => {
        console.log("got event:", event);
    }

    sse.onerror = (error) => {
        console.error('EventSource failed:', error);
        sse.close();
    }

    return sse;
}

export {
    getUrlBase,
    initSSE,
}