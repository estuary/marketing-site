import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    blogsIndexSearch,
    blogsIndexInputAdornment,
} from './styles.module.less';

interface SearchInputProps {
    query: string;
    handleQueryChange: (evt: any) => void;
    placeholder?: string;
}

const SearchInput = ({
    query,
    handleQueryChange,
    placeholder,
}: SearchInputProps) => {
    return (
        <div className={blogsIndexSearch}>
            <SearchIcon className={blogsIndexInputAdornment} />
            <input
                placeholder={placeholder}
                type="text"
                value={query}
                onChange={handleQueryChange}
            />
        </div>
    );
};

export default SearchInput;
