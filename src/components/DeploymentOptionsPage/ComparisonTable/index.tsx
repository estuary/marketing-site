import Table from '../../Table';
import Container from '../../Container';
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
        <section>
            <Container className={container} isVertical>
                <h2>Comparison table</h2>
                <Table headers={headers} data={data} />
            </Container>
        </section>
    );
};

export default ComparisonTable;
