namespace VKPreviewToken {  
    interface Versions { 
        node(): string;
        chrome(): string;
        electron(): string;
    }
} 

interface VKPreviewToken { 
    versions: VKPreviewToken.Versions;

    exit(code?: number): void;
    hide(): void;

    parseArgs(): any; 

    isDev(): boolean;

    require: NodeRequire;
    process: NodeJS.Process;
}

interface Window {
    VKPreviewToken: VKPreviewToken
}