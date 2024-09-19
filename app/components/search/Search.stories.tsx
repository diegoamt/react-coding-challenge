import { Search } from './Search';

export default {
    title: 'Components/Search',
    component: Search,
    parameters: {
        layout: 'fullscreen',
    },
    backgrounds: {
        default: 'dark',
    }
};

export const Default = {
    args: {
        placeholder: 'Search products ...'
    }
}
