import SearchIcon from '@mui/icons-material/Search';
import {
    blogsIndexSearch,
    blogsIndexInputAdornment,
} from './styles.module.less';

interface SearchInputProps {
    handleQueryChange: (evt: any) => void;
    placeholder?: string;
}

const SearchInput = ({ handleQueryChange, placeholder }: SearchInputProps) => {
    return (
        <div className={blogsIndexSearch}>
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
