import React from 'react';
import { InputLabel, FormControl, MenuItem, Select } from '@mui/material';
import clsx from 'clsx';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { LinkFilled } from '../../globalStyles';
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

type XvsYFilterProps = {
    xSelect: {
        label?: string;
        value: string;
        placeholder?: string;
        onChange: (value: any) => void;
        items: Item[];
    };
    ySelect: {
        label?: string;
        value: string;
        placeholder?: string;
        onChange: (value: any) => void;
        items: Item[];
    };
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
            <FormControl className={formControl} fullWidth>
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
            <FormControl className={formControl} fullWidth>
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
                href={button.href}
                target="_blank"
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
