import React from 'react';
import { defaultWrapperDark } from '../../../globalStyles/wrappers.module.less';
import Table from '../../Table';
import { container } from './styles.module.less';

const headers = ['Features', 'Public Deployment', 'Private Deployment', 'BYOC'];

const data = [
    ['Infrastructure Control', 'Limited', 'High', 'High'],
    ['Security', 'Standard', 'Enhanced', 'Customizable'],
    ['Setup Complexity', 'Low', 'Low', 'Medium'],
    ['Customization', 'Limited', 'Moderate', 'Extensive'],
    ['Data Residency Control', 'Limited', 'Full', 'Full'],
    ['Compliance Flexibility', 'Standard', 'High', 'Highest'],
    ['Cost', 'Predictable', 'Predictable', 'Depends on setup'],
    ['Maintenance Responsibility', 'Estuary', 'Shared', 'Shared'],
];

const ComparisonTable = () => {
    return (
        <section className={defaultWrapperDark}>
            <div className={container}>
                <h2>COMPARISON TABLE</h2>
                <Table headers={headers} data={data} />
            </div>
        </section>
    );
};

export default ComparisonTable;
