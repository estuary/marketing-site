import { InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import clsx from 'clsx';
import { GatsbyImage } from 'gatsby-plugin-image';
import LinkFilled from '../LinksAndButtons/LinkFilled';
import { Connector, getSlugifiedText } from '../../../shared';
import ConnectorLogoPlaceholder from '../ConnectorLogoPlaceholder';
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
    id?: string;
    image?: Connector['logo'];
    title?: string;
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

    const xTitle = getSlugifiedText(
        xSelect.items.find((item) => item.id === xSelect.value)?.title
    );

    const yTitle = getSlugifiedText(
        ySelect.items.find((item) => item.id === ySelect.value)?.title
    );

    return `${xTitle}-vs-${yTitle}-${buttonTitle.toLowerCase()}-search-filter-button`;
};

const connectorIconSize = 20;

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
                            {item.image?.childImageSharp?.gatsbyImageData ? (
                                <GatsbyImage
                                    image={
                                        item.image.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${item.title} Logo`}
                                    className={itemImage}
                                />
                            ) : (
                                <ConnectorLogoPlaceholder
                                    connectorType="capture"
                                    connectorIconSize={connectorIconSize}
                                    className={itemImage}
                                />
                            )}
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
                            {item.image?.childImageSharp?.gatsbyImageData ? (
                                <GatsbyImage
                                    image={
                                        item.image.childImageSharp
                                            .gatsbyImageData
                                    }
                                    alt={`${item.title} Logo`}
                                    className={itemImage}
                                />
                            ) : (
                                <ConnectorLogoPlaceholder
                                    connectorType="materialization"
                                    connectorIconSize={connectorIconSize}
                                    className={itemImage}
                                />
                            )}
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
