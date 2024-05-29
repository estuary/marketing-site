import React, { useState } from 'react';

import {
    Container,
    Title,
    Button,
    ContainerDescription,
    Description,
    IconPlus,
    IconMinus,
} from './style';

const Item = ({ title, children, index, selected, setOpen, ...props }) => {
    const open = index === selected;
    const Icon = open ? IconMinus : IconPlus;

    return (
        <Container>
            <Button onClick={() => setOpen(open ? 0 : index)} {...props}>
                <Icon />
                <Title>{title}</Title>
            </Button>
            <ContainerDescription open={open}>{children}</ContainerDescription>
        </Container>
    );
};

const Accordion: any = () => {
    const [selected, setSelected] = useState(0);

    return (
        <>
            <Item
                title="What is Real-time ETL & CDC?"
                index={1}
                selected={selected}
                setOpen={setSelected}
            >
                <Description>
                    Real-time ETL & CDC means all the turn-key ability of using
                    managed connectors to ETL/ELT data, but with millisecond
                    refreshes in your data warehouse, databases, SaaS apps,
                    vector DBS, and more.
                </Description>
            </Item>
            <Item
                title="How is Estuary Different?"
                index={2}
                selected={selected}
                setOpen={setSelected}
            >
                <Description>
                    Estuary makes streaming change data accessible to the whole
                    data team. Simply point a connector at your source, and view
                    real-time updates in your destinations. Access every source
                    and destination you need by using Estuary connectors, or by
                    bringing your own.
                </Description>
            </Item>
            <Item
                title="Who shouldn’t use Estuary?"
                index={3}
                selected={selected}
                setOpen={setSelected}
            >
                <Description>
                    Teams with low-velocity data and no business case for faster
                    insight or operations would find less value in the usage of
                    streaming connectors. Teams with a very manageable cost with
                    their existing batch ELT solution will also find less value.
                </Description>
            </Item>
        </>
    );
};

export default Accordion;
