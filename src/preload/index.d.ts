import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
    interface Window {
        electron: ElectronAPI
        api: CustomAPI
    }

    interface CustomAPI {
        test: () => string;
    }
}