import { NavigateFunction } from 'react-router-dom';

let _navigate: NavigateFunction | null = null;

export function setNavigate(navigate: NavigateFunction) {
    _navigate = navigate;
}

export function navigateTo(path: string) {
    if (_navigate) {
        _navigate(`${path}`, { replace: true });
    } else {
        console.warn('navigateTo() was called before the navigator was set.');
    }
}