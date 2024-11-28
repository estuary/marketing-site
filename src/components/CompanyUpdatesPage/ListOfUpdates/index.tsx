import React from 'react';
import { defaultWrapperGrey } from '../../../globalStyles/wrappers.module.less';
import Container from '../../Container';
import VerticalList from '../../VerticalList';
import { container } from './styles.module.less';

const defaultItems = [
    {
        id: 'abc',
        title: 'Lorem ipsum dolor sit amet',
        description: {
            data: {
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>`,
            },
        },
        postedDate: 'September 5, 2024',
        picture: 'Picture',
    },
    {
        id: 'abcd',
        title: 'Lorem ipsum dolor sit amet',
        description: {
            data: {
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>`,
            },
        },
        postedDate: 'September 5, 2024',
        picture: 'Picture',
    },
    {
        id: 'abcde',
        title: 'Lorem ipsum dolor sit amet',
        description: {
            data: {
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>`,
            },
        },
        postedDate: 'September 5, 2024',
        picture: 'Picture',
    },
    {
        id: 'abcdef',
        title: 'Lorem ipsum dolor sit amet',
        description: {
            data: {
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>`,
            },
        },
        postedDate: 'September 5, 2024',
        picture: 'Picture',
    },
    {
        id: 'abcdefg',
        title: 'Lorem ipsum dolor sit amet',
        description: {
            data: {
                description: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.</p>`,
            },
        },
        postedDate: 'September 5, 2024',
        picture: 'Picture',
    },
];

const ListOfUpdates = () => {
    return (
        <section className={defaultWrapperGrey}>
            <Container isVertical className={container}>
                <h2>LIST OF UPDATES</h2>
                <VerticalList items={defaultItems} />
            </Container>
        </section>
    );
};

export default ListOfUpdates;
