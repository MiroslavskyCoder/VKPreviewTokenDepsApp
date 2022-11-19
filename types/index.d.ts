namespace VKPreviewToken { 
    interface Session { 
        token: string;
    }
}

interface VKPreviewToken {
    listSavesSessions(options?: any): VKPreviewToken.Session[];
    createSession(options: any): VKPreviewToken.Session;
    isActiveSession(): boolean;
}

interface Window {
    VKPreviewToken: VKPreviewToken
}