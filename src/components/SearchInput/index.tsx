import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx';
import {
    blogsIndexSearch,
    blogsIndexInputAdornment,
} from './styles.module.less';

interface SearchInputProps {
    handleQueryChange: (evt: any) => void;
    placeholder?: string;
    className?: string;
}

const SearchInput = ({
    handleQueryChange,
    placeholder,
    className,
}: SearchInputProps) => {
    return (
        <div className={clsx(blogsIndexSearch, className)}>
            <SearchIcon className={blogsIndexInputAdornment} />
            <input
                placeholder={placeholder}
                type="text"
                onChange={handleQueryChange}
            />
        </div>
    );
};

export default SearchInput;
