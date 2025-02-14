import { InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import {
    wrapper,
    formControl,
    columnDirection,
    connectorSelect,
    selectItem,
    itemImage,
    darkTheme,
    disabledLink,
} from './styles.module.less';

type Item = {
    id: string;
    image?: IGatsbyImageData;
    title: string;
};

interface SelectProps {
    label?: string;
    value: string;
    placeholder?: string;
    onChange: (value: any) => void;
    items: Item[];
}

type XvsYFilterProps = {
    xSelect: SelectProps;
    ySelect: SelectProps;
    button: {
        title: string;
        href: string;
    };
    direction?: 'row' | 'column';
    isDarkTheme?: boolean;
};

const selectMenuProps = {
    slotProps: { paper: { style: { maxHeight: '30vh' } } },
};

const getLinkId = (
    xSelect: SelectProps,
    ySelect: SelectProps,
    buttonTitle: string
) => {
    if (!xSelect.value || !ySelect.value) {
        return undefined;
    }

    const xTitle = xSelect.items
        .find((item) => item.id === xSelect.value)
        ?.title.replaceAll(' ', '-')
        .toLowerCase();

    const yTitle = ySelect.items
        .find((item) => item.id === ySelect.value)
        ?.title.replaceAll(' ', '-')
        .toLowerCase();

    return `${xTitle}-vs-${yTitle}-${buttonTitle.toLowerCase()}-button`;
};

const XvsYFilter = ({
    xSelect,
    ySelect,
    button,
    direction,
    isDarkTheme,
}: XvsYFilterProps) => {
    return (
        <div
            className={clsx(
                wrapper,
                direction ? columnDirection : null,
                isDarkTheme ? darkTheme : null
            )}
        >
            <FormControl className={formControl}>
                {xSelect.label ? (
                    <InputLabel>{xSelect.label}</InputLabel>
                ) : null}
                <Select
                    label={xSelect.label}
                    value={xSelect.value}
                    onChange={(evt: any) => xSelect.onChange(evt.target.value)}
                    variant="outlined"
                    MenuProps={selectMenuProps}
                    className={connectorSelect}
                    SelectDisplayProps={{
                        'aria-controls': 'vendor-select-menu-two',
                    }}
                >
                    <MenuItem
                        value={xSelect.placeholder}
                        className={selectItem}
                    >
                        <em>{xSelect.placeholder}</em>
                    </MenuItem>
                    {xSelect.items.map((item) => (
                        <MenuItem
                            className={selectItem}
                            key={item.id}
                            value={item.id}
                        >
                            {item.image ? (
                                <GatsbyImage
                                    image={item.image}
                                    alt={`${item.title} Logo`}
                                    className={itemImage}
                                />
                            ) : null}
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={formControl}>
                {ySelect.label ? (
                    <InputLabel>{ySelect.label}</InputLabel>
                ) : null}
                <Select
                    label={ySelect.label}
                    value={ySelect.value}
                    onChange={(evt: any) => ySelect.onChange(evt.target.value)}
                    variant="outlined"
                    MenuProps={selectMenuProps}
                    className={connectorSelect}
                    SelectDisplayProps={{
                        'aria-controls': 'vendor-select-menu-two',
                    }}
                >
                    <MenuItem
                        value={ySelect.placeholder}
                        className={selectItem}
                    >
                        <em>{ySelect.placeholder}</em>
                    </MenuItem>
                    {ySelect.items.map((item) => (
                        <MenuItem
                            className={selectItem}
                            key={item.id}
                            value={item.id}
                        >
                            {item.image ? (
                                <GatsbyImage
                                    image={item.image}
                                    alt={`${item.title} Logo`}
                                    className={itemImage}
                                />
                            ) : null}
                            {item.title}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <LinkFilled
                id={getLinkId(xSelect, ySelect, button.title)}
                href={button.href}
                className={
                    xSelect.value === xSelect.placeholder ||
                    ySelect.value === ySelect.placeholder
                        ? disabledLink
                        : null
                }
            >
                {button.title}
            </LinkFilled>
        </div>
    );
};

export default XvsYFilter;
