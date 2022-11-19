namespace VKPreviewToken { 
    interface Session { 
        token: string;
    }
    interface Versions { 
        node(): string;
        chrome(): string;
        electron(): string;
    }
}

interface VKPreviewToken {
    listSavesSessions(options?: any): VKPreviewToken.Session[];
    createSession(options: any): VKPreviewToken.Session;
    isActiveSession(): boolean;

    versions: VKPreviewToken.Versions;

    exit(code?: number): void;

    isDev(): boolean;
}

interface Window {
    VKPreviewToken: VKPreviewToken
}